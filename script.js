window.addEventListener('unload', function() {
  
})

// Слайдер с описаниями направлений
var trendsSlideIndex = 1;
trendsShowSlides(trendsSlideIndex);

function trendsPlusSlides(n) {
  trendsShowSlides(trendsSlideIndex += n);
}
function trendsCurrentSlide(n) {
  trendsShowSlides(trendsSlideIndex = n);
}
function trendsShowSlides(n) {
  let i;
  const slides = document.getElementsByClassName("trends__item");
  if (n > slides.length) {trendsSlideIndex = 1}    
  if (n < 1) {trendsSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[trendsSlideIndex-1].style.display = "flex";  
}



// Слайдер с примерами картин
var examplesSlideIndex = 1;
examplesShowSlides(examplesSlideIndex);

function examplesPlusSlides(n) {
  examplesShowSlides(examplesSlideIndex += n);
}
function examplesCurrentSlide(n) {
  examplesShowSlides(examplesSlideIndex = n);
}


function examplesShowSlides(n) {
  let i;
  const slides = document.getElementsByClassName("example");
  if (n > slides.length) {examplesSlideIndex = 1}    
  if (n < 1) {examplesSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[examplesSlideIndex-1].style.display = "flex";  
}



// ВИКТОРИНА

// Список вопросов  
var questions = [
  {
    correctAnswer: 'Кубизм',
    answerOptions: ['Фовизм', 'Кубизм', 'Футуризм'],
    userAnswer: '',
    isQuestionPassed: false
  },
  {
    correctAnswer: 'Фовизм',
    answerOptions: ['Экспрессионизм', 'Фовизм', 'Поп-арт'],
    userAnswer: '',
    isQuestionPassed: false
  },
  {
    correctAnswer: 'Экспрессионизм',
    answerOptions: ['Поп-арт', 'Экспрессионизм', 'Сюрреализм'],
    userAnswer: '',
    isQuestionPassed: false
  },
  {
    correctAnswer: 'Сюрреализма',
    answerOptions: ['Сюрреализма', 'Ар-деко', 'Футуризм'],
    userAnswer: '',
    isQuestionPassed: false
  },
  {
    correctAnswer: 'Пабло Пикассо',
    answerOptions: ['Эдвард Мунк', 'Пабло Пикассо', 'Сальвадор Дали'],
    userAnswer: '',
    isQuestionPassed: false
  },
  {
    correctAnswer: 'Футуризм',
    answerOptions: ['Футуризм', 'Кубизм', 'Фовизм'],
    userAnswer: '',
    isQuestionPassed: false
  },
  {
    correctAnswer: 'Эдуард Мане',
    answerOptions: ['Анри Матисс', 'Джакомо Балла', 'Эдуард Мане'],
    userAnswer: '',
    isQuestionPassed: false
  }
]

// Текущий номер вопроса 
let currentQuestion = 1

const startQuiz = () => {
  document.getElementById('startQuizScreen').style.display = 'none'
  document.getElementById('question1').style.display = 'flex'
}

// Ответить на вопрос и показать правильный / неправильный ответы 
const answerTheQuestion = (questionNumber, answer) => {
  if (questions[questionNumber - 1].isQuestionPassed === false && questions[questionNumber - 1].userAnswer === '') {

    questions[questionNumber - 1].isQuestionPassed = true
    questions[questionNumber - 1].userAnswer = answer

    if (questions[questionNumber - 1].correctAnswer === questions[questionNumber - 1].userAnswer) {
      document.getElementsByName(`${questions[questionNumber - 1].correctAnswer} ${questionNumber}`)[0].classList.add("right")

    } else if (questions[questionNumber - 1].correctAnswer !== questions[questionNumber - 1].userAnswer) {
      document.getElementsByName(`${questions[questionNumber - 1].correctAnswer} ${questionNumber}`)[0].classList.add("right")
      document.getElementsByName(`${questions[questionNumber - 1].correctAnswer} ${questionNumber}`)[0].classList.add("right")
      document.getElementsByName(`${questions[questionNumber - 1].userAnswer} ${questionNumber}`)[0].classList.add("wrong")
      document.getElementsByName(`${questions[questionNumber - 1].userAnswer} ${questionNumber}`)[0].classList.add("wrong")
    } 

    let notSelectedOptions = []
    questions[questionNumber - 1].answerOptions.map((option) => {
      if (option !== questions[questionNumber - 1].correctAnswer && option !== questions[questionNumber - 1].userAnswer) {
        notSelectedOptions = [...notSelectedOptions, option]
      }
    })
    notSelectedOptions.map((option) => {
      document.getElementsByName(`${option} ${questionNumber}`)[0].classList.add("not_selected")
    })

    // Отобразить кнопку "следующий вопрос" / "показать результаты"
    if (questions[questionNumber - 1].isQuestionPassed === true && questionNumber !== questions.length) {
      document.getElementById(`question${questionNumber}-slider__next-btn`).style.display = 'block'
    } else if (questions[questionNumber - 1].isQuestionPassed === true && questionNumber === questions.length) {
      document.getElementById('finishQuiz').style.display = 'block'
    }
  }
}

// Перейти к следующему вопросу 
const showslider__next-btnQuestion = () => {
  currentQuestion += 1

  let i = 1
  while (i <= questions.length) {
    if (currentQuestion === i) {
      document.getElementById(`question${i}`).style.display = 'flex'
    } else {
      document.getElementById(`question${i}`).style.display = 'none'
    }

    i += 1
  }
}

// Закончить викторину и показать результаты
const finishTheQuiz = () => {
  let i = 1
  while (i <= questions.length) {
    document.getElementById(`question${i}`).style.display = 'none'
    i += 1
  }
  document.getElementById('quizResults').style.display = 'flex'

  let finalScore = 0
  questions.map((question) =>{
    if (question.correctAnswer === question.userAnswer) {
      finalScore += 1
    }
  })

  document.getElementById('finalScore').innerHTML = `${finalScore}/7`
}

// Начать викторину заново 
const startTheQuizAgain = () => {
  questions = [
    {
      correctAnswer: 'Кубизм',
      answerOptions: ['Фовизм', 'Кубизм', 'Футуризм'],
      userAnswer: '',
      isQuestionPassed: false
    },
    {
      correctAnswer: 'Фовизм',
      answerOptions: ['Экспрессионизм', 'Фовизм', 'Поп-арт'],
      userAnswer: '',
      isQuestionPassed: false
    },
    {
      correctAnswer: 'Экспрессионизм',
      answerOptions: ['Поп-арт', 'Экспрессионизм', 'Сюрреализм'],
      userAnswer: '',
      isQuestionPassed: false
    },
    {
      correctAnswer: 'Сюрреализма',
      answerOptions: ['Сюрреализма', 'Ар-деко', 'Футуризм'],
      userAnswer: '',
      isQuestionPassed: false
    },
    {
      correctAnswer: 'Пабло Пикассо',
      answerOptions: ['Эдвард Мунк', 'Пабло Пикассо', 'Сальвадор Дали'],
      userAnswer: '',
      isQuestionPassed: false
    },
    {
      correctAnswer: 'Футуризм',
      answerOptions: ['Футуризм', 'Кубизм', 'Фовизм'],
      userAnswer: '',
      isQuestionPassed: false
    },
    {
      correctAnswer: 'Эдуард Мане',
      answerOptions: ['Анри Матисс', 'Джакомо Балла', 'Эдуард Мане'],
      userAnswer: '',
      isQuestionPassed: false
    }
  ]

  currentQuestion = 1

  let i = 0
  while (i < questions.length) {
    for (let j = 0; j < 3; j++) {
      let option = document.getElementsByName(`${questions[i].answerOptions[j]} ${i + 1}`)[0]
      option.classList.remove("wrong")
      option.classList.remove("not_selected")
      option.classList.remove("right")

    }

    if (i + 1 < 7) {
      document.getElementById(`question${i + 1}-slider__next-btn`).style.display = 'none'
    }

    i++
  }


  document.getElementById('finishQuiz').style.display = 'none'
  

  document.getElementById('quizResults').style.display = 'none'
  document.getElementById('question1').style.display = 'flex'
}