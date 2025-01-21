// Local server with express.js

const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('<h1 style="text-align: center; color:rgb(81, 159, 237)">Server del mio blog</h1>')
})

app.get("/bacheca", (req, res) => {
    res.json(posts)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// BLOG'S POSTS

const posts = [
    {
      title: "Il segreto del perfetto Ciambellone",
      content: "Un dolce classico della tradizione, semplice da preparare ma sempre delizioso. Scopri la ricetta per un ciambellone soffice e profumato.",
      image: "http://localhost:3000/images/ciambellone.jpeg",
      tags: ["dolci", "tradizione", "ciambellone", "ricette facili"]
    },
    {
      title: "Cracker alla Barbabietola: salute e gusto",
      content: "Un'idea originale e sana per uno snack croccante e colorato. Ecco come preparare dei cracker alla barbabietola fatti in casa.",
      image: "http://localhost:3000/images/cracker_barbabietola.jpeg",
      tags: ["snack", "barbabietola", "healthy", "ricette vegane"]
    },
    {
      title: "Pane Fritto Dolce: la bontà che stupisce",
      content: "Un piatto sorprendente, croccante all'esterno e morbido dentro. Perfetto per la colazione o uno sfizio pomeridiano.",
      image: "http://localhost:3000/images/pane_fritto_dolce.jpeg",
      tags: ["pane", "dolci fritti", "colazione", "sfiziosità"]
    },
    {
      title: "Pasta alla Barbabietola: un'esplosione di colori",
      content: "Trasforma un piatto tradizionale con l'aggiunta del colore vibrante della barbabietola. Una ricetta semplice e scenografica.",
      image: "http://localhost:3000/images/pasta_barbabietola.jpeg",
      tags: ["pasta", "barbabietola", "vegetariano", "creativo"]
    },
    {
      title: "Torta Paesana: sapori di una volta",
      content: "Un dolce della tradizione lombarda che celebra i sapori genuini di una volta. Ecco la ricetta passo passo.",
      image: "http://localhost:3000/images/torta_paesana.jpeg",
      tags: ["dolci", "tradizione", "torta paesana", "Lombardia"]
    }
  ]

  console.log(posts)