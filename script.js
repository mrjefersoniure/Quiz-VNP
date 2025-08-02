const quizBody = document.getElementById('quiz-body');
const prevButton = document.getElementById('prev-button');
const progressBar = document.querySelector('.progress-bar');
const checkoutURL = "https://fabricadegestao.pagtickets.com.br/vendas-na-pratica-5aturma__17038/";
let currentQuestionIndex = 0;

const questions = [
    {
        title: { part1: "Você está pronto para", part2: "transformar suas vendas?" },
        description: "Teste suas habilidades de vendas e descubra o seu próximo nível.",
        options: [
            "🚀 Sim, quero melhorar!",
            "🤔 Talvez, não sei ainda.",
            "😌 Não, estou satisfeito."
        ],
        validate: (selectedIndex) => selectedIndex === 0
    },
    {
        title: { part1: "Quais desafios", part2: "você enfrenta ao vender?" },
        description: "Vamos entender melhor suas dificuldades para encontrar o caminho certo para você.",
        options: [
            "😭 Não sei como abordar clientes.",
            "💸 Os preços sempre parecem altos.",
            "😬 Não tenho confiança para vender.",
            "😡 Não sei como fechar vendas."
        ],
        validate: (selectedIndex) => selectedIndex !== undefined
    },
    {
        title: { part1: "Como você lida com as", part2: "objeções dos clientes?" },
        description: "A forma como você responde às objeções pode fazer toda a diferença.",
        options: [
            "😰 Fico sem saber o que dizer e perco a venda.",
            "😤 Insisto até o cliente desistir.",
            "🤔 Tento entender, mas nem sempre funciona.",
            "😎 Tenho respostas prontas e estratégicas."
        ],
        validate: (selectedIndex) => selectedIndex !== undefined
    },
    {
        title: { part1: "O que você", part2: "gostaria de aprender?" },
        description: "Vamos personalizar sua experiência.",
        options: [
            "🔒 Técnicas de fechamento.",
            "💬 Negociação eficaz.",
            "🤝 Construção de rapport.",
            "❓ Gestão de objeções."
        ],
        validate: (selectedIndex) => selectedIndex !== undefined
    },
    {
        title: { part1: "O que a falta de confiança", part2: "em vendas tem custado a você?" },
        description: "As vendas impactam todas as áreas da sua vida.",
        options: [
            "💵 Diminuição dos meus rendimentos.",
            "⏳ Perda de tempo e energia em negociações longas.",
            "😞 Sentimento de frustração e insegurança.",
            "📈 Dificuldade de crescimento profissional e pessoal."
        ],
        validate: (selectedIndex) => selectedIndex !== undefined
    },
    {
        title: { part1: "E se você pudesse ter", part2: "todas as respostas?" },
        description: "Imagine abordar clientes com confiança, superar objeções e fechar vendas com facilidade.",
        options: [
            "🌟 Seria incrível!",
            "✅ É o que eu preciso.",
            "🤷‍♂️ Acho que não existe algo assim."
        ],
        validate: (selectedIndex) => selectedIndex !== 2
    },
];

function showQuestion(index) {
    if (index >= 0 && index < questions.length) {
        currentQuestionIndex = index;
        const currentQuestion = questions[currentQuestionIndex];
        
        quizBody.innerHTML = `
            <div class="question active">
                <h2>${currentQuestion.title.part1} <span class="highlight-blue">${currentQuestion.title.part2}</span></h2>
                <p>${currentQuestion.description}</p>
                <div class="answer-options">
                    ${currentQuestion.options.map((option, i) => 
                        `<button data-index="${i}">${option}</button>`
                    ).join('')}
                </div>
            </div>
        `;
        
        document.querySelectorAll('.answer-options button').forEach(button => {
            button.addEventListener('click', (event) => {
                // AQUI FOI REMOVIDA A VALIDAÇÃO
                if (currentQuestionIndex < questions.length - 1) {
                    showQuestion(currentQuestionIndex + 1);
                } else {
                    showLoadingPage();
                }
            });
        });

        updateUI();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
}

function updateUI() {
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    if (currentQuestionIndex > 0) {
        prevButton.disabled = false;
    } else {
        prevButton.disabled = true;
    }
}

function showLoadingPage() {
    quizBody.innerHTML = `
        <div class="loading-page active">
            <h2>Parabéns! Sua jornada de transformação começa agora.</h2>
            <p>Suas respostas mostram que o curso 'Vendas na Prática' foi feito para você. Nele, você aprenderá a dominar a psicologia da venda, negociar como um profissional e fechar negócios com confiança. É hora de agir!</p>
            <div class="loading-bar-container">
                <div class="loading-bar"></div>
            </div>
        </div>
    `;

    document.querySelector('.quiz-header-top').style.display = 'none';
    document.querySelector('.progress-bar-container').style.display = 'none';

    setTimeout(() => {
        document.querySelector('.loading-bar').style.width = '100%';
    }, 100);

    setTimeout(() => {
        showOfferPage();
    }, 2500);
}

function showOfferPage() {
    quizBody.innerHTML = `
<div class="offer-page active">
            <h2>Sua solução definitiva para vender mais!</h2>
            <img src="./hero.png" alt="oferta"style="width: 100%; object-fit: cover;">
            
            <h3>O que você vai aprender?</h3>
            <ul>
                <li>Como abordar clientes e quebrar o gelo.</li>
                <li>Técnicas de PNL para vendas.</li>
                <li>Como demonstrar produtos e serviços com valor.</li>
                <li>Gerenciamento de objeções como "está caro".</li>
                <li>Estratégias de fechamento sem pressão.</li>
                <li>O segredo do pós-venda e fidelização.</li>
            </ul>

            <img src="./oferta.png" alt="oferta"style="width: 100%; object-fit: cover;">
            
            <a href="${checkoutURL}" class="cta-button">TRANSFORMAR MINHAS VENDAS AGORA!</a>

            <div class="social-proof">
                <h3>O que nossos alunos dizem</h3>
        <img src="./dep (1).png" alt="depoimento"style="width: 100%; object-fit: cover;">
        <img src="./dep (2).png" alt="depoimento"style="width: 100%; object-fit: cover;">
        <img src="./dep (3).png" alt="depoimento"style="width: 100%; object-fit: cover;">

            </div>

            <div class="guarantee-seal">
                <img src="./Selo-de-qualidade.webp" alt="Selo de Garantia">
            </div>

            <a href="${checkoutURL}" class="cta-button">SIM, QUERO ESSA OFERTA!</a>
        </div>
    `;
}

prevButton.addEventListener('click', prevQuestion);

showQuestion(0);






