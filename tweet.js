const twit = require('twit');

const twitterConfig = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

const twitterClient = new twit(twitterConfig);

// Tweet a text-based status
async function tweet(tweetText) {
    
    const mediaINIT = {
        command: 'INIT',
        media_type: 'video/mp4',
        total_bytes: 1759785,
        //media_ids: 1509941134776279047,
    };

    let mediaAPPEND = {
        command: 'APPEND',
        segment_index: 0,
        media_id: 0,
        file: '/Users/theogaillard/Downloads/640008461.mp4',
    };

    twitterClient.post('media/upload', mediaINIT, (error, mediaINIT, response) => {
        if (!error) {
            mediaAPPEND.media_id = response['headers']['x-mediaid'];
            console.log(`Successfully uploaded video: ${JSON.stringify(mediaAPPEND.media_ids)}`);
        } else {
            console.error(error);
        }
    });

    twitterClient.post('media/upload', mediaAPPEND, (error, mediaAPPEND, response) => {
        if (!error) {
            console.log(`Successfully uploaded video: ${JSON.stringify(response)}`);
        } else {
            console.error(error);
        }
    });

    
    
    
    
    
    const tweet = {
        status: tweetText,
        //media_ids: 1509941134776279047,
    };

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