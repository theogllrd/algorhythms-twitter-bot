const { TwitterApi } = require('twitter-api-v2');
const axios = require('axios');
const fs = require('fs');
const axiosRetry = require('axios-retry');
require('dotenv').config();

axiosRetry(axios, { retries: 5 });

// download nft from ipfs
async function getFile(url, path) {
    return new Promise((resolve, reject) => {
        console.log('jump inside getFile function');
        axios({
            method: "get",
            url: url,
            responseType: "stream",
            timeout: 500000
        }).then((response) => {
            response.data.on('end', resolve);
            response.data.pipe(fs.createWriteStream(path));
        }).catch((error) => {
            console.log("catching error in getFile function");
            console.log(error);
            reject();
        });
    });
}

// Tweet a text-based status
async function postTweet(tweetText, tweetMedia) {


    const userClient = new TwitterApi({
        appKey: process.env.CONSUMER_KEY,
        appSecret: process.env.CONSUMER_SECRET,
        accessToken: process.env.ACCESS_TOKEN_KEY,
        accessSecret: process.env.ACCESS_TOKEN_SECRET,
    });

    try {
        // upload the nft to twitter servers
        const media_id = await userClient.v1.uploadMedia(tweetMedia);
        console.log('Media ' + media_id + ' uploaded');
        // tweet
        await userClient.v1.tweet(tweetText, {
            media_ids: [media_id]
        });
        console.log('Successfully tweeted: ' + tweetText);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    postTweet,
    getFile
};