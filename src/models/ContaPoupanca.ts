import ContaBancaria from "./ContaBancaria";

export default class ContaPoupanca extends ContaBancaria{
    private juros: number = 40;

    constructor(id:number){
        super(id)
        this.saldo += this.juros
    }
}