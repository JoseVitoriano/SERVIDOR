const express = require("express")
const { request } = require("node:http")
const app = express()

app.use(express.json())

let usuarios = []
let id = 1

// CRIA UM NOVO USUÁRIO

app.post('/usuarios',(request, response) => {

    const {name, email, telefone} = request.body

    const user = {
        id: id++,
        name: name,
        email: email,
        telefone: telefone,
        criadoEm: new Date(),
    }

    usuarios.push(user)

    console.log(name, email, telefone)

    response.status(200).send(usuarios)
})

// BUSCA TODOS OS USUARIOS

app.get('/usuarios', (request, response) => {

    response.status(200).send(usuarios)
})

// BUSCA USUÁRIO PELO ID

app.get('/buscar/usuarios/:id', (request, response) =>{

    const id = request.params.id

    const indexUsuarios = usuarios.find(usuario => usuarios.id == id)

    if(!indexUsuarios){
        return response.status(404).send({mensage: "usuário não encontrado"})
    }

    response.status(200).send(indexUsuarios)

})

// CRIANDO O SERVIDOR 

app.listen(3000, () => {
    console.log("Servidor Rodando")
})

