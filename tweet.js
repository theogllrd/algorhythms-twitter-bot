const { TwitterApi } = require('twitter-api-v2');
const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

const twitterConfig = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

async function getFile(url, tokenId){
    return new Promise((resolve, reject) => {
        axios({
            method: "get",
            url: url,
            responseType: "stream"
        }).then((response) => {
            response.data.pipe(fs.createWriteStream(`./mp4/${tokenId}.mp4`));
            resolve()
        }).catch((err) => {
            console.log(err);
            reject();
        });
    })

}

// Tweet a text-based status
async function postTweet(tweetText) {

    const userClient = new TwitterApi({
        appKey: process.env.CONSUMER_KEY,
        appSecret: process.env.CONSUMER_SECRET,
        accessToken: process.env.ACCESS_TOKEN_KEY,
        accessSecret: process.env.ACCESS_TOKEN_SECRET,
      });

    // userClient.v1.uploadMedia()

}


module.exports = {
    postTweet,
    getFile
};