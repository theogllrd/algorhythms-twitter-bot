const twit = require('twit');
//const TwitterApi = require('twitter-api-v2').default;
const axios = require('axios');
//const IPFS = require('ipfs-core').default;
//import * as IPFS from 'ipfs-core';
require('dotenv').config();

const twitterConfig = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

const twitterClient = new twit(twitterConfig);

// Instanciate with desired auth type (here's Bearer v2 auth)
//const twitterClientV2 = new TwitterApi(twitterConfig.consumer_secret);



// Tweet a text-based status
async function postTweet(tweetText) {



    

    /*
    // CHUNKS VERSION
    const init_data = {
        command: 'INIT',
        media_type: 'video/mp4',
        total_bytes: processedImage.length,
        //media_ids: 1509941134776279047,
    };

    let append_data = {
        command: 'APPEND',
        segment_index: 0,
        media_id: 0,
        media_data: '',
    };

    // init the media upload
    twitterClient.post('media/upload', init_data, (error, init_data, response) => {
        if (!error) {
            append_data.media_id = response['headers']['x-mediaid'];
            console.log(`Successfully init video: ${JSON.stringify(response)}`);
        } else {
            console.error(error);
        }
    });

    //append_data.media_data = processedImage;
    
    // upload chunks of the media
    twitterClient.post('media/upload', append_data, (error, append_data, response) => {
        if (!error) {
            console.log(`Successfully append video: ${JSON.stringify(response)}`);
        } else {
            console.error(error);
        }
    });

    const request_data = {
        'command': 'FINALIZE',
        'media_id': append_data.media_id,
    };

    twitterClient.post('media/upload', request_data, (error, request_data, response) => {
        if (!error) {
            console.log(`/!\\ Successfully finalize video: ${JSON.stringify(response)}`);
        } else {
            console.error(error);
        }
    });
    
    /*
    // VERSION AVEC LA LIB twitter-api-v2
    const client = new TwitterApi({
        appKey: 'SyUHzS0sBelIwVvQhzqxSKkd8',
        appSecret: '8xPAyqJKqMe3DUBXfL6PapzM1l46SWzI3PRLHthpIXudaPHOa9',
        accessToken: '518387126-CSB28xTRMyc7jikEuWZU0Yh8LJGwLVojC83eKUXW',
        accessSecret: 'WeG4UGic4KSAN8QaEPyr66iHp7udis9CGcsHLVl5huHCe',
      });
    
    console.log('appKey: '+JSON.stringify(client));
    
    const clienteuh = await client.appLogin();
    const rwClient = clienteuh.readWrite;
    const verifyCred = rwClient.v1.verifyCredentials();
    console.log(verifyCred);
    //await rwClient.v1.tweet('Hello, this is a test.');
    */

    
    // the final tweet
    const tweet = {
        status: tweetText,
        //media_ids: append_data.media_id, // add this line whis the media_id to tweet it
    };


    
    



    
    
    //console.log(`Successfully tweeted: ${tweetText}`); // pour éviter de spamm 500 tweets sur mon twitter perso
    
    // FINAL TWEET, fonctionnel
    twitterClient.post('statuses/update', tweet, (error, tweet, response) => {
        if (!error) {
            console.log(`Successfully tweeted: ${tweetText}`);
        } else {
            console.error(error);
        }
    });
}


module.exports = {
    postTweet: postTweet,
};