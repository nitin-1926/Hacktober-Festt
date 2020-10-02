const USERNAME = 'aniketchanana05';
const PASSWORD = '';
const BASE_URL = 'https://www.instagram.com/';
const FOLLOWER_SELECTOR = `a[href="/${USERNAME}/followers/"]`;
const FOLLOWING_SELECTOR = `a[href="/${USERNAME}/following/"]`;
const env = {
    USERNAME,
    PASSWORD,
    BASE_URL,
    FOLLOWER_SELECTOR,
    FOLLOWING_SELECTOR 
};

module.exports = env;