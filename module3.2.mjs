import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let password = '';

while(password != 'pe1iscool'){
    password = await userInput.question('Geef het wachtwoord in:');
}

console.log('Welkom gebruiker');
process.exit()