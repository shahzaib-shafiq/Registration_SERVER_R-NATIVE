const express = require('express')
const app = express()
const port = 3000
const bodyParser=require('body-parser');

app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/signup', (req, res) => {
    res.send('POST request to the homepage')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})