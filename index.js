const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname,"templates")

app.post('/cadastrar/salvar', (requisicao,resposta) =>{
    
})

app.get('/cadastrar',(requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/cadastro.html`)
})

// https://localhost:3000/usuarios/20
app.get('/usuarios/:id',(requisicao,resposta) => {
    const id = requisicao.params.id

    console.log(`acessando dados do usuario${id}`)

    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})

// https://localhost:3000
app.get('/',(requisicao,resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)

})

app.listen(3000,() => {
    console.log("Servidor rodando na porta 3000!")
}
)