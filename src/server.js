// arquivos requeridos
const express = require("express")
const server = express()

//configurar pasta publica, arquivos staticos
server.use(express.static("public"))

// utilizando templete engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//configurar rotas
server.get("/", (req, res) => {
    return res.render("index.html", { title : "Um titulo"})
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})
server.get("/search", (req, res) => {
    return res.render("search-results.html")
})


//pagina inicial


//ligando servidor
server.listen(3000)