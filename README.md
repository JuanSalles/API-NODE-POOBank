# API-NODE-POOBank

#Projeto Realizado como atividade de fixação dos conceitos de POO no curso de Angular do Santader Coders 2023.1

#Tecnologias Utilizadas no projeto:
- Node
- Express
- TypeScript

Software utilizado para fazer as requisições: Postman

#EndPoints (Em funcionamento):
- POST "api/deposito" body({conta: number, valor: number})
  
- POST "api/saque" body({conta: number, tipoDeConta: string, valor: number})
  
- POST "api/transferencia" body({conta: number, tipoDeConta: string, destino: number, valor: number})
  
- GET "api/conta" header(conta: number)

#Incialização do projeto

- Crie uma pasta, coloque os arquivos dentro.
- Abra ess apasta no VSCODE e abra o terminal
- Certifique-se de ter o node.js instalado antes de começar os processos abaixo
- no terminal utilize o comando 'npm install' para instalar as dependencias do projeto
- para rodar a aplicação em teste utilize o comando 'npm run dev' e para buildar 'npm run build'
- para startar a aplicação após o build utilize o comando 'npm run start'

#Os logs estão sendo salvos na pasta ./db/logs.txt
