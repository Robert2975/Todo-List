const express = require("express")
const path = require("path");//compartilha pastas
const routes = require("./routes/routes");
const connectToDb = require("./database/db")

connectToDb() // Execultar o banco de dados
const app = express();
const port = 3000

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded())
app.use(routes)


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
// Usuario: romersimpson2
// Senha banco de dados: VzjWgmGg0u3yRSH5