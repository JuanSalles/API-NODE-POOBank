export interface IOperacoesBancarias {
    
    deposito(valor: number):string
    saque(valor: number):string
    transferencia(conta: number, valor: number):string
    
}