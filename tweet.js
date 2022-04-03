//const twit = require('twit');
const TwitterApi = require('twitter-api-v2').default;
//const axios = require('axios');


const twitterConfig = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

//const twitterClient = new twit(twitterConfig);

// Instanciate with desired auth type (here's Bearer v2 auth)
const twitterClientV2 = new TwitterApi(twitterConfig);

// Tweet a text-based status
async function tweet(tweetText) {

    // Format a provided URL into it's base64 representation
    
    /*
    function getBase64(url) {
        return axios.get(url, { responseType: 'arraybuffer' }).then(response => Buffer.from(response.data, 'binary').toString('base64'))
    }

    const processedImage = await getBase64('https://ipfs.io/ipfs/QmcphuTiyoMByJkPWuiMXpiVxojs2YReYbN6jaJdi7KSw3/64000001.mp4');

    
    const mediaINIT = {
        command: 'INIT',
        media_type: 'video/mp4',
        total_bytes: 11947817,
        //media_ids: 1509941134776279047,
    };

    let mediaAPPEND = {
        command: 'APPEND',
        segment_index: 0,
        media_id: 0,
        media_data: '',
    };

    // init the media upload
    twitterClient.post('media/upload', mediaINIT, (error, mediaINIT, response) => {
        if (!error) {
            mediaAPPEND.media_id = response['headers']['x-mediaid'];
            console.log(`Successfully uploaded video: ${JSON.stringify(mediaAPPEND.media_id)}`);
        } else {
            console.error(error);
        }
    });

    

    
    mediaAPPEND.media_data = processedImage;
    
    // upload chunks of the media
    twitterClient.post('media/upload', mediaAPPEND, (error, mediaAPPEND, response) => {
        if (!error) {
            console.log(`Successfully uploaded video: ${JSON.stringify(response)}`);
        } else {
            console.error(error);
        }
    });

    const request_data = {
        'command': 'FINALIZE',
        'media_id': mediaAPPEND.media_id,
    };

    twitterClient.post('media/upload', request_data, (error, request_data, response) => {
        if (!error) {
            console.log(`Successfully uploaded video: ${JSON.stringify(response)}`);
        } else {
            console.error(error);
        }
    });
    */

    


    // the final tweet
    const tweet = {
        status: tweetText,
        media_ids: mediaAPPEND.media_id,
    };

    await twitterClientV2.v1.tweet('Hello, this is a test !', (error, tweet, response) => {
        if (!error) {
            console.log(`Successfully tweeted: ${tweetText}`);
        } else {
            console.error(error);
        }
    });

    /*twitterClient.post('statuses/update', tweet, (error, tweet, response) => {
        if (!error) {
            console.log(`Successfully tweeted: ${tweetText}`);
        } else {
            console.error(error);
        }
    });*/
}


module.exports = {
    tweet: tweet,
};