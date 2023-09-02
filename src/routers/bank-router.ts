import express from 'express'
import DataBase from '../models/DataBase'
import ContaBancaria from '../models/ContaBancaria'
import ContaPoupanca from '../models/ContaPoupanca'

const loginRouter = express.Router()

loginRouter.post('/login', (req, res) => {

    // const db = new DataBase()

    // const conta = req.body.conta
    // const senha = req.body.senha
    
    res.send('logado')
})

loginRouter.post('/deposito', (req, res) => {
    const id = req.body.conta
    // const senha = req.body.senha
    const tipoDeConta = req.body.tipoDeConta
    const valor = req.body.valor
    let conta: ContaBancaria

    switch (tipoDeConta){
        default:
            conta = new ContaBancaria(id)
    }

    res.send(conta.deposito(valor))
})

loginRouter.post('/saque', (req, res) => {

    const id = req.body.conta
    // const senha = req.body.senha
    const tipoDeConta = req.body.tipoDeConta
    const valor = req.body.valor
    let conta: ContaBancaria

    switch (tipoDeConta){
        default:
            conta = new ContaBancaria(id)
    }

    res.send(conta.saque(valor))
})

loginRouter.post('/transferencia', (req, res) => {

    const id = req.body.conta
    const destino = req.body.destino
    // const senha = req.body.senha
    const tipoDeConta = req.body.tipoDeConta
    const valor = req.body.valor
    let conta: ContaBancaria

    switch (tipoDeConta){
        case "poupança":
            conta = new ContaPoupanca(id)
        default:
            conta = new ContaBancaria(id)
    }

    res.send(conta.transferencia(destino, valor))
})

loginRouter.get('/conta', (req, res) => {
    if (req.headers.conta){
        const db = new DataBase()
        const conta = req.headers.conta
        // const senha = req.headers.senha
        const resposta = db.buscarConta(conta)
        res.json(resposta);
    }else{
        res.send("conta não encontrada")
    }
})

loginRouter.get('/logs', (req, res) => {
    const logs = require('../../db/logs.json')
    res.json(logs)
})

//provisorio

loginRouter.get('/db', (req, res) => {
    const contas = require('../../db/listaDeContas.json');
    res.json(contas)
})

export default loginRouter