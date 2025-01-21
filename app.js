// imports

const posts = require("./Data/posts")
const postsRouter = require("./routers/posts")

// Local server with express.js

const express = require('express')
const app = express()
const port = 3000

// to get static files
app.use(express.static("public"))

// routers
app.use("/posts", postsRouter)

// console.log to show the using port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
