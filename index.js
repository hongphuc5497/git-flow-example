const express = require('express')
const app = express();
const crypto = require('crypto')

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'This is root route'
  })
})

app.get('/random-hash', (req, res) => {
  res.status(200).json({
    content: crypto.createHash('sha256').update(crypto.randomBytes(16)).digest('hex')
  })
})

app.listen(8000, () => {
  console.log('Meow meow meow')
})
