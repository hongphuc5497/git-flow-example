const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'This is root route'
  })
})

app.listen(8000, () => {
  console.log('Meow meow meow')
})
