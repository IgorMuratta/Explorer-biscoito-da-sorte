// abri e mudar de tela com button
const closedBiscuit = document.querySelector("#closed-biscuit");
const btnClose = document.querySelector("#btnClose");

// capiturando o compo que vai ser renderizado as frases
let phaserHTML = document.querySelector(".card-reveal-show p");

// Card
const cardFirst = document.querySelector(".card-first")
const cardReveal = document.querySelector(".card-reveal")


function handleBiscuit() {
    cardFirst.classList.toggle("hide");
    cardReveal.classList.toggle("hide");

    randomPhaser();
}


function randomPhaser() {
    // Variáveis que gerar número aléatorio
    const randomNumber =  Math.round(Math.random() * 10);

    let phaser = [
        "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
        "A solidão é a sorte de todos os espíritos excepcionais.",
        "Não ser amado é falta de sorte, mas não amar é a própria infelicidade.",
        "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.",
        "Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.",
        "A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.",
        "Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.",
        "A perseverança é a mãe da boa sorte.",
        "Sorte é estar pronto quando a oportunidade vem.",
        "A sorte favorece a mente bem preparada.",
        "Quanto mais eu treino, mais sorte eu tenho."
    ];

    let phaserInnerHTML = phaserHTML.innerHTML = `${phaser[randomNumber]}`;

}


// função que faz voltar a tela inicial
function homeScreen() {
    cardFirst.classList.toggle("hide");
    cardReveal.classList.toggle("hide");
}

// função que muda de tela callback
closedBiscuit.addEventListener("click",handleBiscuit)

// função de callback para retornar a tela inicial
btnClose.addEventListener("click", homeScreen);


