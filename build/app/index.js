"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_js_1 = __importDefault(require("../modules/DataBase.js"));
const elementoLogin = document.getElementById('login-da-conta');
const elementoResultado = document.getElementById('resultado');
function criaElementoHTMLDoBanco(conta) {
    const resultado = `
    <div>
        <p>CONTA: ${conta === null || conta === void 0 ? void 0 : conta.id}</p>
        <p>TIPO DA CONTA: ${conta === null || conta === void 0 ? void 0 : conta.tipoDeConta}</p>
        <p>NOME: ${conta === null || conta === void 0 ? void 0 : conta.nomeCompleto}</p>
        <p>DATA DE NASCIMENTO: ${conta === null || conta === void 0 ? void 0 : conta.dataDeNascimento}</p>
        <p>SALDO: ${conta === null || conta === void 0 ? void 0 : conta.saldo}</p> 
    </div>
    `;
    return resultado;
}
elementoLogin === null || elementoLogin === void 0 ? void 0 : elementoLogin.addEventListener("submit", event => {
    const db = new DataBase_js_1.default();
    const target = event.target;
    event.preventDefault();
    console.log(target.elements[1]);
    // const conta: number = parseInt(target.elements[0].value);
    // const senha: string = target.elements[1].value;
    // const dadosConta = db.buscarConta(conta, senha);
    // elementoResultado!.innerHTML = criaElementoHTMLDoBanco(dadosConta);
});
