let numberToBeGuessed = null;
let name;
let guess;
const min = 0;
const max = 25;

while (name === undefined || name === null || name.length === 0) {
    name = prompt("Welkom! Wat is je naam?");
}

alert("hey " + name)

// gebruiker vragen om getal tussen 0 en 25
let number = prompt(
    "Voer een getal in tussen 0 en 25 om te beginnen met raden..."
);
alert("Je hebt " + number + " ingevoerd");

// browser random getal laten kiezen tussen 0 en 25
numberToBeGuessed = Math.floor(Math.random() * (max - min)) + min;

while (guess !== numberToBeGuessed) {
    guess = prompt("Fout gegokt, probeer het opnieuw");
    if (guess > numberToBeGuessed) {
        alert("Je gok was te hoog");
    } else if (guess < numberToBeGuessed) {
        alert("Je gok was te laag");
    } else {
        alert("Gefeliciteerd, je hebt gewonnen");
        alert("dag " + name + " tot de volgende keer");
    }
}

