const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const pathData = {
    home: function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    },

}

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => pathData.home(req, res));

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
})