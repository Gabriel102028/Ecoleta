// arquivos requeridos
const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db.js")

//configurar pasta publica, arquivos staticos
server.use(express.static("public"))

//habilitar o uso do req.body na aplicação
server.use(express.urlencoded({ extended: true}))

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

    //console.log(req.query)
    return res.render("create-point.html")
})

server.post("/save-point", (req, res) => {

    //req.body e o corpo do formulario
    //console.log(req.body)
    //2 inserir uma tabela

    const query = `
                
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES ( ?,?,?,?,?,?,?);    
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro")
            
        }

        console.log("Cadastrado com sucesso.")
        console.log(this)

        return res.render("create-point.html", { saved: true})
    }

    db.run(query, values, afterInsertData)

})


server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == ""){
        //pesquisa vazia
        return res.render("search-results.html", {total: 0})
    }
    //pegar os dados do banco de dados
    //3 Consusltar os dados da tabela
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
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