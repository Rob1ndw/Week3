import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let code = ' '

while(code !== '5'){
    code=parseFloat(await userInput.question("Ik heb een getal van 0 tot 10 in men hoofd raad maar: "))
}

console.log("Perfect het is juist ")
process.exit()