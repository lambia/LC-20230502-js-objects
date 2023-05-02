// Apelle fece una palla fatta di array
// const pallaArray = [
//     ["red", "blue"],
//     "pallina da golf",
//     15
// ];
// pallaArray[2] = 20; //cambio diametro
// console.log("array", pallaArray); //'pallina da golf'

const palla = {
    "colore": ['red', 'blue'],
    'tipo': 'pallina da golf',
    // diametro: 15
    condizioni: undefined
};

palla.diametro = 20;
palla["marca"] = "michelin";

console.log("Palla: ", palla);

//**************************** Proprietà dinamica su oggetto (solo con quadre)
//Facciamo inserire all'utente una nuova proprietà
let nomeProprieta = prompt("quale nuova proprietà vuoi attribuire alla palla?");
let valoreProprieta = prompt("inserisci una nuova proprietà per la palla");

palla[nomeProprieta] = valoreProprieta;

console.log("Palla: ", palla);

for (const key in palla) {
    console.log(`${key} con valore:`, palla[key]);
}

// Questi vanno a scrivere nella proprietà che si chiama "nomeProprieta"
// che NON è quello che volevamo fare
// palla["nomeProprieta"] = valoreProprieta;
// palla.nomeProprieta = valoreProprieta;

//**************************** Array di array
const classi = [
    ['Mattia', 'Giacomo'], //classe 95
    ['Martina', 'Giorgia'] //classe 96
];

const classe95 = classi[0];
console.log( classe95 );

const primoStudente = classe95[0];

console.log( primoStudente );
console.log( classi[0][0] );


//**************************** Array di oggetti
const studenti = [
    { nome: "Luca", eta: 33, voto: 9 },
    { nome: "Marco", eta: 25, voto: 10 }
];

const nuovoStudente = {
    nome: "Giorgio", eta: 26, voto: 9
};

studenti.push(nuovoStudente);

studenti.push({
    nome: "Studente",
    eta: 85,
    voto: 6
});

console.log(studenti);

