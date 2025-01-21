const posts = require("../Data/posts")

const express = require("express")
const router = express.Router()

// Index 
router.get("/", (req, res) => {
    res.json(posts)
})

// Show
router.get("/:id", (req, res) => {
    const post = posts.find((elm) => elm.id == req.params.id)
        res.json(post)
})

// Create
router.post("/", (req, res) => {
    res.send("Creo un nuovo post ✔")
})

// Update
router.put("/:id", (req, res) => {
    res.send(`Modifico interamente il post con id ${req.params.id}`)
})

// Modify
router.patch("/:id", (req, res) => {
    res.send(`Modifico parzialmente il post con id ${req.params.id}`)
})

// Delete
router.delete("/:id", (req, res) => {
    res.send(`Elimino il post con id ${req.params.id}`)
})

module.exports = router