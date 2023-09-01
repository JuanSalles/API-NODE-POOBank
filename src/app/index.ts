
import IExportaConta from '../interfaces/IExportaConta.js';
import DataBase from '../modules/DataBase.js'
const elementoLogin: HTMLElement | null = document.getElementById('login-da-conta');
const elementoResultado: HTMLElement | null = document.getElementById('resultado');

function criaElementoHTMLDoBanco(conta: IExportaConta | undefined){
    const resultado = `
    <div>
        <p>CONTA: ${conta?.id}</p>
        <p>TIPO DA CONTA: ${conta?.tipoDeConta}</p>
        <p>NOME: ${conta?.nomeCompleto}</p>
        <p>DATA DE NASCIMENTO: ${conta?.dataDeNascimento}</p>
        <p>SALDO: ${conta?.saldo}</p> 
    </div>
    `
    return resultado
}

elementoLogin?.addEventListener("submit", event => {
    const db = new DataBase();

    const target = event.target as HTMLFormElement
    event.preventDefault();

    console.log(target.elements[1]);
    // const conta: number = parseInt(target.elements[0].value);
    // const senha: string = target.elements[1].value;

    // const dadosConta = db.buscarConta(conta, senha);

    // elementoResultado!.innerHTML = criaElementoHTMLDoBanco(dadosConta);
    
});

