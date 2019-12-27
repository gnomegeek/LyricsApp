const request = require('request')
const fetchLyrics = (artist, song, callback) => {
    request({
        url: `https://api.lyrics.ovh/v1/${artist}/${song}`,
        json: true
    }, (error, response) => {
        if (error) {
            callback('!! Unable to connect to the Internet !!', undefined)
        } else if (response.body.error) {
            callback('Please try some other combination. Maybe its the API fault. Apologies !!', undefined)
        }
        callback(undefined, response.body.lyrics)
    })
}


module.exports = fetchLyrics;