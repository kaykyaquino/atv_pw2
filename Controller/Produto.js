// importando o modulo do express
const express = require('express');

const categoriaModel = require("../model/Produto")

const router = express.Router();

router.post('/Produto/cadastrarProduto', (req, res)=>{
    res.send('Produto cadastrado com sucesso')
})
router.get('/Produto/listarProduto', (req, res)=>{
    res.send('Produto listado com sucesso')
});

router.put('/Produto/alterarProduto', (req, res)=>{
    res.send('Produto alterado com sucesso')
});


router.delete('/Produto/excluirProduto', (req, res)=>{
    res.send('Produto excluído com sucesso')
});

module.exports = router;