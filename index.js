const questionsAndAnswer = [
  {
    'question': 'Kit szeret Sipi a legjobban?',
    'answers': ['Magát', 'Nikit', 'Anyukát', 'Játszani'],
    'good': 'Nikit',
    'next': true
  },
  {
    'question': 'Mi Sipi kedvenc Filmje?',
    'answers': ['Harry Potter sorozat', 'Ál/Arc', 'Harcosok Klubja', 'Ocean\'s Eleven'],
    'good': 'Harcosok Klubja',
    'next': true
  },
  {
    'question': 'Hol találkozott Niki és Sipi?',
    'answers': ['Motoros vizsgán', 'Bálban', 'Moziban', 'Falunapon'],
    'good': 'Motoros vizsgán',
    'next': true
  },
  {
    'question': 'Mikor van Sipi szülinapja?',
    'answers': ['Demceber 12', 'December 14', 'December 13', 'December 15'],
    'good': 'December 13',
    'next': true
  },
  {
    'question': 'Mi Sipi kedvenc könyve?',
    'answers': ['Csúcshatás', 'Galaxis útikalaúz stopposoknak', 'Magyarországról szeretettel', 'Doctor Who Shada'],
    'good': 'Galaxis útikalaúz stopposoknak',
    'next': true
  },
  {
    'question': 'Mi Sipi kedvenc színe?',
    'answers': ['Kék', 'Piros', 'Fehér', 'Fekete'],
    'good': 'Fekete',
    'next': true
  },
  {
    'question': 'Milyen telefont vett Sipi?',
    'answers': ['Samsung Galaxy S20+', 'Samsung Galaxy S20 Ultra', 'Samsung Galaxy S20FE', 'Samsung Galaxy S20+ Ultra FE'],
    'good': 'Samsung Galaxy S20+',
    'next': true
  },
  {
    'question': 'Mit sportolna Sipi szívesen?',
    'answers': ['Falmászás (Boulder)', 'Golf', 'BMX', 'Fedett pályás távolba nézés'],
    'good': 'Falmászás (Boulder)',
    'next': true
  },
  {
    'question': 'Mi Sipi kedvenc sorozata?',
    'answers': ['Casa de Papel', 'Modern család', 'Doctor Who', 'Rick és Morty'],
    'good': 'Doctor Who',
    'next': true
  },
  {
    'question': 'Mit dolgozna szívesen Sipi?',
    'answers': ['Vlogger', 'Hivatásos Gamer', 'Webfejlesztő', 'Író'],
    'good': 'Webfejlesztő',
    'next': true
  },
  {
    'question': 'Hány tetoválás van Sipinek?',
    'answers': ['3', '4', '5', '6'],
    'good': '5',
    'next': true
  },
  {
    'question': 'Melyin Kólát szeret a legjobban Sipi?',
    'answers': ['Zéró Cola', 'Lime-os Pepsi', 'Citromos Cola', 'Dr. Pepper'],
    'good': 'Dr. Pepper',
    'next': true
  },
  {
    'question': 'Szereted Sipit?',
    'answers': ['Igen', 'Nem', 'Nagyon', 'Elmondhatatlanul'],
    'good': 'Elmondhatatlanul',
    'next': true
  },
  {
    'question': 'Tetszett a kvíz?',
    'answers': ['Igen', 'Igen', 'Igen', 'Igen'],
    'good': 'Igen',
    'next': true
  }
];
let anwerable = true;
let questionNumber = 0;
let maxQuestion = questionsAndAnswer.length;

const question = document.querySelector('.question');
const answers = document.querySelector(`.answers`);
const answer0 = document.querySelector(`.answer-0`);
const answer1 = document.querySelector(`.answer-1`);
const answer2 = document.querySelector(`.answer-2`);
const answer3 = document.querySelector(`.answer-3`);

const nextQuestion = (questionNumber) => {
  answerable = true;
  while (answers.firstChild) {
    answers.removeChild(answers.lastChild);
  }
  if (questionNumber < maxQuestion) {
    question.innerHTML = questionsAndAnswer[questionNumber].question;
    for (let i = 0; i < questionsAndAnswer[questionNumber].answers.length; i++) {
      
      let actualAnswerDiv = document.createElement('DIV');
      let actualAnswer = questionsAndAnswer[questionNumber].answers[i];
      actualAnswerDiv.textContent = actualAnswer;
      actualAnswerDiv.setAttribute('class', `answer answer-${i}`);
      actualAnswerDiv.addEventListener('click', function () {
        if (answerable) {
          checkAnswer(this, questionsAndAnswer[questionNumber].good);
        }
      });
      answers.appendChild(actualAnswerDiv);
    }
  } else {
    let container = document.querySelector('.container');
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
    let gameOver = document.createElement('DIV');
    let bg = document.createElement('DIV');
    let img = document.createElement('IMG');
    let gameOverText = document.createElement('DIV');
    gameOverText.setAttribute('class', 'game-over-text');
    gameOverText.innerHTML = 'Gratulálok <span>Szerelmem</span>, végig vitted a kvízt.:) <br /> Vajon hol a meglepetés?';
    gameOver.setAttribute('class', 'game-over');
    bg.setAttribute('class', 'bg');
    img.setAttribute('class', 'game-over-pic');
    img.setAttribute('src', './gameover.jpg');
    container.appendChild(bg);
    gameOver.appendChild(img);
    container.appendChild(gameOver);
    container.appendChild(gameOverText);
  }
}

const checkAnswer = (div, goodAnswer) => {
  answerable = false;
  console.log(`${div.innerHTML} -  ${goodAnswer}`);
  if (div.innerHTML === goodAnswer) {
    div.classList.add('good');
    setTimeout(() => {
      nextQuestion(++questionNumber);
    }, 2500);
  } else {
    div.classList.add('bad');
    setTimeout(() => {
      nextQuestion(questionNumber);
    }, 2500);
  }
}

nextQuestion(0);
