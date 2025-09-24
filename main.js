// Sorteia o número aleatório
var randomnumber = Math.floor(Math.random() * 100) + 1;
console.log("Número sorteado (debug): " + randomnumber);

var guesses = 0;

// função do palpite
function checkGuess(userGuess) {
    guesses++;

    if (userGuess === randomnumber) {
        console.log("Número correto!");
        console.log("Tentativas: " + guesses);
    } else if (userGuess > randomnumber) {
        console.log("Tente um número menor!");
    } else {
        console.log("Tente um número maior!");
    }
if (guesses < 20) {
    console.log("Você tem mais " + (20 - guesses) + " tentativas");
} if (guesses >= 20) {
    console.log("Você perdeu"); 
    displayImage("imagem-de-perca") 
}}

displayImage("imagem-do-jogo.png");

function displayImage(imagepatch) {
	var img = document.createElement("img");
	img.src = imagepath;
	document.doby.appendChild(img);
}

//versão 1.0

while (imagem-de-perca) {
    return userGuess
}