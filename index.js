const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World Updated Yet Again!</h1><h2>And again...</h2>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})