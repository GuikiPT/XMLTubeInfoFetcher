const channel_id = '';

async function main() {
    const util = require('util');
    const { XMLTubeInfoFetcher } = require('./XMLTubeInfoFetcher');

    const response = await XMLTubeInfoFetcher(channel_id);
    
    if(!response) {
        console.error(
            new Error(`There's no data replyed by function.`).stack
        );
    }
    else {
        console.log(util.inspect(response, {showHidden: false, depth: null, colors: true}));
    }
}

main();