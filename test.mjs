import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = 5;
let som = 0;

while(som != 100){
   console.log(som);
   som += getal;
}
process.exit()