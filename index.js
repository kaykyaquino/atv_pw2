const express = require("express"); // importacao do modulo express

const app = express();

//configuraçao para o express manipular json
app.use(express.json());

const connection = require("./database/database")

const Categoria = require("./Controller/Categoria")
app.use("/", Categoria);

const Produto = require("./Controller/Produto")
app.use("/", Produto);

console.log(connection);
app.listen(3000, ()=>{
    console.group ('servidor rodando');   
});


