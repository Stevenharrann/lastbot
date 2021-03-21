const { fetchJson, fetchBase64 } = require('../utils/fetcher')

/**
 * Get meme from random subreddit
 *
 * @param  {String} subreddit
 * @return  {Promise} Return meme from porn
 */
const random = (subreddit) => new Promise((resolve, reject) => {
    const subreddits = ['porn']
    const randSub = subreddits[Math.random() * subreddits.length | 0]
    console.log('looking for porn on ' + randSub)
    fetchJson('https://meme-api.herokuapp.com/gimme/porn/' )
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})
module.exports = {
    random }