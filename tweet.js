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
    
    const media = {
        command: 'INIT',
        media_type: 'video/mp4',
        total_bytes: 1759785,
        //media_ids: 1509941134776279047,
    };

    twitterClient.post('media/upload', media, (error, media, response) => {
        if (!error) {
            console.log(`Successfully uploaded video: ${response[0].media_id}`);
        } else {
            console.error(error);
        }
    });
    
    
    
    const tweet = {
        status: tweetText,
        //media_ids: 1509941134776279047,
    };

    twitterClient.post('statuses/update', tweet, (error, tweet, response) => {
        if (!error) {
            console.log(`Successfully tweeted: ${tweetText}`);
        } else {
            console.error(error);
        }
    });
}


module.exports = {
    tweet: tweet,
};