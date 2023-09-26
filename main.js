// Node Modules
const axios = require('axios');
const xml2js = require('xml2js');

async function XMLTubeInfoFetcher(provided_channel_id) {
    if (!provided_channel_id) {
        console.error(
            new Error(`An channel_id is required.`).stack
        );
        return null;
    }

    try {
        const response = await axios.get(`http://www.youtube.com/feeds/videos.xml?channel_id=${provided_channel_id}`);

        if (response.status === 200) {
            const xml = response.data;
            const parser = new xml2js.Parser({ explicitArray: false });
            const result = await parser.parseStringPromise(xml);
            const data = result.feed;

            const parsed_videos = [];

            for (entry of data.entry) {
                const parsedEntry = {
                    channel_id: entry['yt:channelId'],
                    video_id: entry['yt:videoId'],
                    title: entry['media:group']['media:title'],
                    url: entry['link']['$']['href'],
                    description: entry['media:group']['media:description'],
                    thumbnails: {
                        default: `https://i2.ytimg.com/vi/${entry['yt:videoId']}/default.jpg`,
                        hq_default: `https://i2.ytimg.com/vi/${entry['yt:videoId']}/hqdefault.jpg`,
                        mq_default: `https://i2.ytimg.com/vi/${entry['yt:videoId']}/mqdefault.jpg`,
                        sd_default: `https://i2.ytimg.com/vi/${entry['yt:videoId']}/sddefault.jpg`,
                        max_res_default: `https://i2.ytimg.com/vi/${entry['yt:videoId']}/maxresdefault.jpg`,
                    },
                    community: {
                        star_rating: entry['media:group']['media:community']['media:starRating']['$'],
                        statistics: entry['media:group']['media:community']['media:statistics']['$']
                    },
                    published_at: new Date(entry['published']).getTime() / 1000,
                    lastUpdate_at: new Date(entry['updated']).getTime() / 1000,
                }
                await parsed_videos.push(parsedEntry);
            };

            const reply = {
                request: {
                    status: response.status,
                    message: 'ok'
                },
                data: {
                    author: {
                        name: data.author.name,
                        url: data.author.uri,
                        id: data.author.uri.replace('https://www.youtube.com/channel/', ''),
                        created_at: new Date(data.published).getTime() / 1000
                    },
                    videos: parsed_videos,
                }
            }
            return reply;
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.error(
                new Error(`YouTube feed not found (status 404) for "${provided_channel_id}" channel id.\n`).stack
            );
            return null;
        } else {
            console.error(
                new Error(`Error while fetching Youtube Feed:\n${error.stack}`)
            );
            return null;
        }
    }
}



(async function () {
    const testing = await XMLTubeInfoFetcher('UCvYc3G3GiO0SUtLLZxDQHow');

    console.log(testing.data.videos);
})();
