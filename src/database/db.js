//importar dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar objeto que irá fazer operações de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto de banco de dados para as operações

db.serialize(() => {

//     //com comandos SQL eu vou:
//     // 1 criar uma tabela
//     db.run(`

//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items
//         );
//     `)

//     //2 inserir uma tabela
//     const query = `
                
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES ( ?,?,?,?,?,?,?);    
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Número 261",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papéis e Papelão"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso.")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)

    // //3 Consusltar os dados da tabela
    // db.all(`SELECT name FROM places`, function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros")
    //     console.log(rows)
    // })

    // //4 deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function (err) {
    //     if (err) {
    //         console.log(err)
    //     }
    //     console.log("registro deletado com sucesso!")
    // })

})