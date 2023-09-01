import IExportaConta from "../interfaces/IExportaConta";
import { Conta } from "../interfaces/TypeConta";

const fs = require('fs');

export default class DataBase {

    private listaDeContas: Array<Conta> = require('../../db/listaDeContas.json');

    #exportaConta(conta: Conta | undefined): IExportaConta | undefined{

        if(conta){
            const resultado = {
                id: conta.id,
                tipoDeConta: conta.tipoDeConta,
                nomeCompleto: conta.nomeCompleto,
                dataDeNascimento: conta.dataDeNascimento,
                saldo: conta.saldo
            }

            return resultado
        }else{
            return undefined
        }
        
        
    }

    buscarConta(id: number, senha: string): IExportaConta | undefined{
        const conta = this.listaDeContas.find((element) =>{
            return ((element.id == id)&&(element.senha == senha))
        })

        return this.#exportaConta(conta)
    }


    
}