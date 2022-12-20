const path = require('path')
const express = require('express')

const app = express()

app.use(require('cors')())
app.use(express.json())

app.post('/send', (req, res, next) => {
  res.json(req.body)
})

app.use(express.static(path.join(__dirname, 'build')))

app.listen(3000, () => {
  console.log('server start')
})
