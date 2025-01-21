// imports

const posts = require("./Data/posts")
const postsRouter = require("./routers/posts")

// Local server with express.js

const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use("/posts", postsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
