import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let som = 0;

for(let i = 1; i <= 50; i++){
    som += i;
}

console.log(som);
process.exit()