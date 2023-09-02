import { IOperacoesBancarias } from "../interfaces/IOperacoesBancarias";
import DataBase from "./DataBase";
import Logger from "./Logger";

export default class ContaBancaria implements IOperacoesBancarias {

    private id: number;
    private nomeCompleto: string;
    protected saldo: number = 0;

    constructor(id:number) {
        const db = new DataBase()
        const conta = db.buscarConta(id)
        this.id = conta!.id;
        this.saldo = conta!.saldo;
        this.nomeCompleto = conta!.nomeCompleto;
    }

    getSaldo (): number{
        return this.saldo
    }

    deposito(valor: number): string {
        this.saldo += valor;
        const db = new DataBase();
        db.salvarSaldo(this.id, this.saldo);
        const response = `Deposito de R$: ${valor} feito na conta ${this.id}`
        Logger.salvarLog(response)
        return (response)
    }

    saque(valor: number): string {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            const db = new DataBase();
            db.salvarSaldo(this.id, this.saldo);
            const response = `Saque de R$: ${valor} feito na conta ${this.id}`
            Logger.salvarLog(response)
            return (response)
        } else {
            return (`Saldo Insuficiente`)
        }
    }

    transferencia(conta: number, valor: number): string {
        if (this.saldo >= valor) {
            this.saldo -= valor;

            const db = new DataBase();
            db.salvarSaldo(this.id, this.saldo);
            db.enviarTransferencia(conta, valor);

            const response = `Transferencia de R$: ${valor} da conta ${this.id} para a conta ${conta} realizada com sucesso!`
            Logger.salvarLog(response)
            return (response)
        } else {
            return (`Saldo Insuficiente`)
        }
    }
}