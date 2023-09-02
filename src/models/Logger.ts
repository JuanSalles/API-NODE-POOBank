import fs from 'fs';

export default class Logger{

    static salvarLog(mensagem: string){
        const data = new Date()
        let log = data.toLocaleString()
        log += `\n--`  + mensagem + "\n";
        console.log(log);
        fs.appendFile('./db/logs.txt', log, err => {
         
            // Checking for errors
            if (err) throw err; 
           
            console.log("Done writing"); // Success
        });
    }
}