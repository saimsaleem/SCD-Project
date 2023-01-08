const express = require('express')
const router = require('./routes/user')
const bodyParser = require('body-parser')

const app = express()
const port = 3001

app.use(bodyParser.json())

app.use('/user', router);
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Home!");

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})