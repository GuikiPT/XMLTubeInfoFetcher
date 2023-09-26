async function main() {
    const { XMLTubeInfoFetcher } = require('./function');

    const response = await XMLTubeInfoFetcher('UCvYc3G3GiO0SUtLLZxDQHow');
    
    if(!response) {
        console.error(
            new Error(`There's no data replyed by function.`).stack
        );
    }
    else {
        console.log(response);
    }
}

main();