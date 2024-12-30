const nameTourist = prompt ("Qual seu nome?");
let nameCity = prompt ("Você visitou alguma cidade nas suas férias?");

while (nameCity === "sim") {
    let whatCity = prompt ("Qual a cidade?");
    alert(nameTourist + " visitou " + whatCity + " nas suas férias" );
    if (nameCity === "não") {
        break;
    }
}

alert (nameTourist + " visitou" + whatCity);