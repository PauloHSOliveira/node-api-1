const express = require('express')
const bodyParser = require('body-parser')
const databaseConnection = require('./infra/database')
const Tables = require('./infra/tables')
const routes = require('./routes')

databaseConnection.connect((erro) => {
   if(erro) {
    console.error(erro)
   } else {
       console.log('connection sucess')

       Tables.init(databaseConnection)

       const app = express()
       app.use(bodyParser.json())
       app.use(routes)
       app.listen(3333,() => console.log('servidor rodando na porta 3333'))
   }
})


