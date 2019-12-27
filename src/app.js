const fetchLyrics = require('./musicLyrics.js')
const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require('path')
const port = process.env.PORT || 3000

publicPath = path.join(__dirname, '../public')
viewsPath = path.join(__dirname, '../views')


app.use(express.static(publicPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)


app.get('', (req, res) => {
    res.render('index')
})

app.get('/lyrics', (req, res) => {
    artist = req.query.artist
    song = req.query.song
    
    fetchLyrics(artist, song, (error, response) => {
        if(error !== undefined){
            return res.send({
                error,
            })
        } 
        lyrics = response;
        res.send({
            lyrics,
        })
    })
   
})

app.get('*', (req, res) => {
    res.render('404')
})


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})