# XMLTubeInfoFetcher
XMLTubeInfoFetch is a lightweight Node.js app/function designed to effortlessly retrieve basic video and channel details from the legacy XML-based YouTube API, simplifying data access and integration.

* **Simple**, **Light** and **Basic** **to use**.
* **No API Key needed**.
* **Parse YouTube XML API to JSON**.
* **Easy to implement everywhere.**
* **Two main libraries only: Axios and XML2JS**

## Table of Content
* [About](#about)
* [How can I use it?](#how-can-i-use-it)

## About
Some of you may be asking why this simple project is using an inappropriate YouTube API.

YouTube's current API sucks for me in these ways:
* First, the API need a `API Key`.
* Secound, there's a lot of [`Limits`](https://developers.google.com/youtube/v3/guides/quota_and_compliance_audits) to make requests to their API.
* Third, `Rate Limits` are ***Crazy***.
* Fourth, I need a `very basic API Wrapper`, just for `fetch basic information`, I already tryed the oficial wrappers on, but it's very stressful having to create an API Key for such a small project.
* Fifth, I started these project for an Discord Youtube Notification's Bot. If i use current v3 of YouTube API, I will spam and get `Rated Limited` every time for checking if there's a new video from a YouTube Channel. I tryed these a long time ago and I just forfeit. I watch a lot of popular Discord Bots getting rated limited by youtube and yeah.....

## How can I use it?
Like i sayed before, it's pretty simple to use it.

1. Download the project be:
    1. ```git clone https://github.com/GuikiPT/XMLTubeInfoFetcher.git``` if you have git installed.

    2. Or clicking on `<> Code` and after in `Download Zip`.
    > **If you download as zip, you need to uncompress the file!**.

2. Open the folder of the project.

3. Make sure you have Node.JS installed, and if not, install it: [NodeJS Download Website Page](https://nodejs.org/en-us/download).

4. Inside the project folder, open a terminal (*Bash for Linux* and *CMD or PowerShell for Windows*, don't ask me for MacOs, because I not have one to test, but if you want to give me one I really appreciate 😊)

5. Install necessary modules be doing `npm install`. 

6. On the [main.js](main.js) edit the `const channel_id = '';` with the desired YouTube Channel Id.

7. Simply execute the project be doing `npm start` or `npm main.js`;

8. They will retrieve an console log with information about the channel and latest videos:

```json
{
    "author": {
        "name": "Name of the YouTube Channel - String",
        "url": "Url for YouTube Channel - String",
        "id": "Id of the YouTube Channel - String",
        "created_at": 1231313213 # Created Channel Timestammp - Number - Unix Time
    },
    "videos": [
        {
            "channel_id": "Id of the YouTube Channel - String",
            "video_id": "Id of the YouTube Video - String",
            "title": "The Title of the YouTube Video - String",
            "url": "Url for YouTube Video - String",
            "description": "The YouTube Video Description - String",
            "thumbails": {
                "default": "Default Thumbnail Image Url - String",
                "hq_default": "High Quality Thumbnail Image Url - String",
                "mq_default": "Medium Quality Thumbnail Image Url - String",
                "sd_default": "Standard Quality Thumbnail Image Url - String",
                "max_res_default": "Maximum Resolution Quality Thumbnail Image Url - String",
            },
            "community": {
                "star_rating" {
                    "count": 123, # Number of Likes - Number
                    "average": 123, # Average number of likes - Number
                    "min": 123, # ?? - Number
                    "max": 123 # ?? - Number
                }
            },
            "published_at": 12312321123, # Video Published Time - Number - Unix Time
            "lastUpdate_at": 12312312312, # Last Video Update Status Time - Number - Time
        },
        {
            ...
        }
    ]
}
```

See?

It's EZ PZ to get basic information about.