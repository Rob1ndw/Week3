let i = 1;
while(i <= 3){
    let j = 1;
    while(j <= 2){
        console.log(`Buitenste lus: ${i}, Geneste lus: ${j}`);
        j++;
    }
    i++;
}
let x = 1;
while(x <= 10){
    let h = 1;
    while(h <= 10){
        let result = x * h;
        console.log(`${x} x ${h} = ${result}`);
        h++;
    }
    console.log("-----------------");
    x++;
}
process.exit()