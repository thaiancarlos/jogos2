const questions = [
    { question: "Qual é a tag usada para criar um parágrafo?", answers: [{ text: "<code>&lt;p&gt;</code>", correct: true }, { text: "<code>&lt;pr&gt;</code>", correct: false }, { text: "<code>&lt;para&gt;</code>", correct: false }, { text: "<code>&lt;pg&gt;</code>", correct: false }] },
    { question: "Qual atributo define o URL de um link?", answers: [{ text: "<code>src</code>", correct: false }, { text: "<code>href</code>", correct: true }, { text: "<code>link</code>", correct: false }, { text: "<code>url</code>", correct: false }] },
    { question: "Qual tag cria uma lista não ordenada?", answers: [{ text: "<code>&lt;ol&gt;</code>", correct: false }, { text: "<code>&lt;li&gt;</code>", correct: false }, { text: "<code>&lt;ul&gt;</code>", correct: true }, { text: "<code>&lt;list&gt;</code>", correct: false }] },
    { question: "Como se insere uma imagem?", answers: [{ text: "<code>&lt;image&gt;</code>", correct: false }, { text: "<code>&lt;src&gt;</code>", correct: false }, { text: "<code>&lt;img&gt;</code>", correct: true }, { text: "<code>&lt;picture&gt;</code>", correct: false }] },
    { question: "Qual tag é usada para títulos de seção?", answers: [{ text: "<code>&lt;p&gt;</code>", correct: false }, { text: "<code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code>", correct: true }, { text: "<code>&lt;title&gt;</code>", correct: false }, { text: "<code>&lt;header&gt;</code>", correct: false }] },
    { question: "Qual é a estrutura básica de um documento HTML?", answers: [{ text: "<code>&lt;html&gt;</code>, <code>&lt;body&gt;</code>, <code>&lt;head&gt;</code>", correct: false }, { text: "<code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>, <code>&lt;html&gt;</code>", correct: false }, { text: "<code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>", correct: true }, { text: "<code>&lt;body&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;html&gt;</code>", correct: false }] },
    { question: "Qual tag é usada para quebras de linha?", answers: [{ text: "<code>&lt;br&gt;</code>", correct: true }, { text: "<code>&lt;lb&gt;</code>", correct: false }, { text: "<code>&lt;break&gt;</code>", correct: false }, { text: "<code>&lt;nl&gt;</code>", correct: false }] },
    { question: "Qual é a tag correta para o cabeçalho de uma página?", answers: [{ text: "<code>&lt;head&gt;</code>", correct: false }, { text: "<code>&lt;header&gt;</code>", correct: true }, { text: "<code>&lt;top&gt;</code>", correct: false }, { text: "<code>&lt;h1&gt;</code>", correct: false }] },
    { question: "Qual tag é usada para criar uma tabela?", answers: [{ text: "<code>&lt;table&gt;</code>", correct: true }, { text: "<code>&lt;tab&gt;</code>", correct: false }, { text: "<code>&lt;tr&gt;</code>", correct: false }, { text: "<code>&lt;td&gt;</code>", correct: false }] },
    { question: "Onde o CSS é normalmente incluído em um arquivo HTML?", answers: [{ text: "Dentro de <code>&lt;body&gt;</code>", correct: false }, { text: "No final do arquivo", correct: false }, { text: "Em um arquivo separado ou dentro de <code>&lt;head&gt;</code>", correct: true }, { text: "Em uma tag <code>&lt;style&gt;</code> no <code>&lt;body&gt;</code>", correct: false }] },
    { question: "Qual atributo define um texto alternativo para uma imagem?", answers: [{ text: "<code>alt</code>", correct: true }, { text: "<code>title</code>", correct: false }, { text: "<code>href</code>", correct: false }, { text: "<code>src</code>", correct: false }] },
    { question: "Qual tag é usada para criar um formulário?", answers: [{ text: "<code>&lt;form&gt;</code>", correct: true }, { text: "<code>&lt;input&gt;</code>", correct: false }, { text: "<code>&lt;label&gt;</code>", correct: false }, { text: "<code>&lt;submit&gt;</code>", correct: false }] },
    { question: "Qual tag define um link?", answers: [{ text: "<code>&lt;a&gt;</code>", correct: true }, { text: "<code>&lt;link&gt;</code>", correct: false }, { text: "<code>&lt;href&gt;</code>", correct: false }, { text: "<code>&lt;anchor&gt;</code>", correct: false }] },
    { question: "O que significa HTML?", answers: [{ text: "HyperText Markup Language", correct: true }, { text: "HyperTool Markup Language", correct: false }, { text: "HomeTool Markup Language", correct: false }, { text: "Hyperlink and Text Markup Language", correct: false }] },
    { question: "Qual tag é usada para criar uma lista ordenada?", answers: [{ text: "<code>&lt;ol&gt;</code>", correct: true }, { text: "<code>&lt;ul&gt;</code>", correct: false }, { text: "<code>&lt;li&gt;</code>", correct: false }, { text: "<code>&lt;list&gt;</code>", correct: false }] },
    { question: "Qual é o elemento raiz de um documento HTML?", answers: [{ text: "<code>&lt;body&gt;</code>", correct: false }, { text: "<code>&lt;head&gt;</code>", correct: false }, { text: "<code>&lt;html&gt;</code>", correct: true }, { text: "<code>&lt;root&gt;</code>", correct: false }] },
    { question: "Qual tag cria uma caixa de texto de entrada?", answers: [{ text: "<code>&lt;text&gt;</code>", correct: false }, { text: "<code>&lt;textbox&gt;</code>", correct: false }, { text: "<code>&lt;input type='text'&gt;</code>", correct: true }, { text: "<code>&lt;input&gt;</code>", correct: false }] },
    { question: "Qual é a tag para um comentário em HTML?", answers: [{ text: "<code>// comentário</code>", correct: false }, { text: "<code>&lt;!-- comentário --&gt;</code>", correct: true }, { text: "<code>/* comentário */</code>", correct: false }, { text: "<code># comentário</code>", correct: false }] },
    { question: "Qual tag é usada para o rodapé de uma página?", answers: [{ text: "<code>&lt;foot&gt;</code>", correct: false }, { text: "<code>&lt;bottom&gt;</code>", correct: false }, { text: "<code>&lt;footer&gt;</code>", correct: true }, { text: "<code>&lt;end&gt;</code>", correct: false }] },
    { question: "Qual é o propósito da tag <code>&lt;meta&gt;</code>?", answers: [{ text: "Definir metadados sobre o HTML", correct: true }, { text: "Criar uma lista de links", correct: false }, { text: "Inserir imagens", correct: false }, { text: "Formatar texto", correct: false }] },
    { question: "Qual atributo é usado para agrupar elementos no HTML?", answers: [{ text: "<code>id</code>", correct: false }, { text: "<code>class</code>", correct: true }, { text: "<code>group</code>", correct: false }, { text: "<code>name</code>", correct: false }] },
    { question: "A tag <code>&lt;title&gt;</code> é exibida onde?", answers: [{ text: "Na página principal", correct: false }, { text: "No rodapé da página", correct: false }, { text: "Na barra de título do navegador", correct: true }, { text: "No cabeçalho da página", correct: false }] },
    { question: "Qual tag é usada para adicionar um vídeo?", answers: [{ text: "<code>&lt;video&gt;</code>", correct: true }, { text: "<code>&lt;movie&gt;</code>", correct: false }, { text: "<code>&lt;media&gt;</code>", correct: false }, { text: "<code>&lt;vid&gt;</code>", correct: false }] },
    { question: "O que a tag <code>&lt;em&gt;</code> faz?", answers: [{ text: "Cria um texto grande", correct: false }, { text: "Cria um texto em negrito", correct: false }, { text: "Enfatiza um texto (itálico)", correct: true }, { text: "Adiciona um espaçamento", correct: false }] },
    { question: "Qual tag é usada para criar uma linha horizontal?", answers: [{ text: "<code>&lt;hr&gt;</code>", correct: true }, { text: "<code>&lt;line&gt;</code>", correct: false }, { text: "<code>&lt;divider&gt;</code>", correct: false }, { text: "<code>&lt;br&gt;</code>", correct: false }] }
];


const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const startButton = document.getElementById("start-btn");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    startQuiz();
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `<span>${questionNo}.</span> ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = "true";
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`;
    nextButton.innerHTML = "Jogar Novamente";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startScreen.style.display = "block";
        quizScreen.style.display = "none";
    }
});

// O quiz não começa automaticamente, espera pelo clique do botão "Começar Quiz"