const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quanto tempo dura uma partida de futebol?",
        alternativas: [
            {
                texto: "90",
                afirmacao: "1 Correto,"
            },
            {
                texto: "80" ,
                afirmacao: "1 Errado," 
            },
            {
                texto: "70",
                afirmacao: "1 Errado,"
            },
            {
                texto: "85" ,
                afirmacao: "1 Errado," 
            }


        ]
    },
    {
        enunciado: "Qual time de futebol ganhou mais Copas do Mundo?",
        alternativas: [
            {
                texto: "Brasil",
                afirmacao: "2 Correto,"
            },
            {
                texto: "França",
                afirmacao: "2 Errado,"
            },
            {
                texto: "Espanha",
                afirmacao: "2 Errado,"
            },
            {
                texto: "Argentina",
                afirmacao: "2 Errado,"
            }
        ]
    },
    {
        enunciado: "Quando foi realizada a primeira Copa do Mundo de futebol?",
        alternativas: [
            {
                texto: "1930",
                afirmacao: "3 Correto,"
            },
            {
                texto: "1940",
                afirmacao: "3 Errado,"
            },
            {
                texto: "1927",
                afirmacao: "3 Errado,"
            },
            {
                texto: "1924",
                afirmacao: "3 Errado,"
            }

        ]
    },
    {
        enunciado: "Em que time italiano jogou Diego Maradona?",
        alternativas: [
            {
                texto: "Napoli",
                afirmacao: "4 Correto,"
            },
            {
                texto: "Juventus",
                afirmacao: "4 Errado,"
            },
            {
                texto: "Torino",
                afirmacao: "4 Errado,"
            },
            {
                texto: "Milan",
                afirmacao: "4 Errado,"
            }


        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "muito obrigado por responder, essas foram as RESPOSTAS";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta()