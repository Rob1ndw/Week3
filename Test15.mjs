for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 4; j++) {
        row += (i * j) + " "; // Vermenigvuldig de buitenste loopwaarde (i) met de binnenste (j)
    }
    console.log(row.trim()); // Verwijder extra spatie aan het eind van de rij
}


process.exit()

