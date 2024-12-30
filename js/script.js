const nameTourist = prompt("Qual o seu nome?");
let cities = []; // Array para armazenar todas as cidades
let youTraveled = prompt("Você já visitou alguma cidade? (sim/não)").toLowerCase(); // Normaliza a entrada

while (youTraveled === "sim") {
    let city = prompt("Qual o nome da cidade que você visitou?");
    cities.push(city); // Adiciona a cidade ao array
    youTraveled = prompt("Você visitou alguma outra cidade? (sim/não)").toLowerCase(); // Pergunta novamente
}

// Mensagem final
if (cities.length > 0) {
    alert(
        nameTourist +
        " visitou " +
        cities.length +
        " cidade(s) " +
        cities.join(", ") +
        "."
    );
} else {
    alert(nameTourist + " não visitou nenhuma cidade.");
}
