// importando o modulo do express
const express = require('express');
const categoria = require("../model/Categoria")
const categoriaModel = require("../model/Categoria")

const router = express.Router();

router.post('/Categoria/cadastrarCategoria', (req, res)=>{
    res.send('Categoria cadastrada com sucesso')
});


router.get('/Categoria/listarCategoria', (req, res)=>{
    res.send('Categoria listada com sucesso')
});


router.put('/Categoria/alterarCategoria', (req, res)=>{
    res.send('Categoria alterada com sucesso')
});


router.delete('/Categoria/excluirCategoria', (req, res)=>{
    res.send('Categoria excluída com sucesso')
});

module.exports = router;