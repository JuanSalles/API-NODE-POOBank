import IExportaConta from "../interfaces/IExportaConta";
import { Conta } from "../interfaces/TypeConta";

import fs from 'fs';

export default class DataBase {

    private listaDeContas: Array<Conta> = require('../../db/listaDeContas.json');

    

    buscarConta(id: number | string | undefined | string[]): Conta | undefined{
        const conta = this.listaDeContas.find((element) =>{
            return (element.id == id)
        })

        return conta;
    }

    buscarSaldo(id: number | string | undefined | string[]): number | undefined{
        const conta = this.listaDeContas.find((element) =>{
            return (element.id == id)
        })

        return conta?.saldo;
    }

    salvarSaldo(id: number, saldo: number){
        this.listaDeContas[id-1].saldo = saldo;
        fs.writeFile('./db/listaDeContas.json', JSON.stringify(this.listaDeContas), err => {
         
            // Checking for errors
            if (err) throw err; 
           
            console.log("Done writing"); // Success
        });
    }
    
    enviarTransferencia(id: number, valor: number){
        this.listaDeContas[id-1].saldo += valor;
        fs.writeFile('./db/listaDeContas.json', JSON.stringify(this.listaDeContas), err => {
         
            // Checking for errors
            if (err) throw err; 
           
            console.log("Done writing"); // Success
        });
    }
}