// arquivos requeridos
const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db.js")

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
    //pegar os dados do banco de dados
    //3 Consusltar os dados da tabela
    db.all(`SELECT * FROM places`, function (err, rows) {
        if (err) {
            return console.log(err)
        }
        //total de item
            const total = rows.length
        //mostrar a pagina html com os dados guardados no banco de daods
        return res.render("search-results.html", {places: rows, total})
    })
  
})


//pagina inicial


//ligando servidor
server.listen(3000)