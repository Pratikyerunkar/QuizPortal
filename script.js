
const quizData = [
  {
    question: "Q1. Which type of JavaScript language is ___",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    correct: "b",
  },
  {
    question: "Q2. The content of the page (such as your pictures, text, links) will show up here.",
    a: "Head",
    b: "Body",
    c: "Style",
    d: "Folder",
    correct: "b",
  },
  {
    question: "Q3. The default link color for hyperlinks:",
    a: "green",
    b: "blue",
    c: "purple",
    d: "red",
    correct: "b",
  },
  {
    question: "Q4. Which tag is used to underline text?",
    a: "<a>",
    b: "<u>",
    c: "<b>",
    d: "<i>",
    correct: "b",
  },
  {
    question: "Q5. Defines a division or a section in an HTML document. Used to group block-elements to format them with CSS",
    a: "<div>",
    b: "<span>",
    c: "<caption>",
    d: "<group>",
    correct: "a",
  },
  {
    question: "Q6. to make a comment in HTML you use",
    a: "<!--  -->",
    b: " //",
    c: "/*",
    d: "#",
    correct: "a",
  },
  {
    question: "Q7. What does CSS stand for?",
    a: "Colorful Style Sheets",
    b: "Creative Style Sheets",
    c: " Cascading Style Sheets",
    d: "Computer Style Sheets",
    correct: "c",
  },
  {
    question: "Q8. Where in an HTML document is the correct place to refer to an external style sheet (such as style.css)?",
    a: "In the <head> section",
    b: "In the <body> section",
    c: "At the end of the document",
    d: " In the <css> section",
    correct: "a",
  },
  {
    question: "Q9. Which is the correct CSS syntax?",
    a: "body:color=black;",
    b: "{body;color:black;}",
    c: "body {color: black;}",
    d: "{body:color=black;}",
    correct: "c",
  },
  {
    question: "Q10. Which property is used to change the background colour?",
    a: "bgcolor",
    b: "background-color",
    c: "bcolor",
    d: "background-colour",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const times = document.getElementById("time");
const answerEls = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const nextBtn  = document.getElementById("next");

let currentQuiz = 0;
let score = 0;
let time = 60;



function loadQuiz() {

  notSelectedQuizData()

  const currentQuizData = quizData[currentQuiz]

  question.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}
loadQuiz()

function notSelectedQuizData() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++
    time = 60;
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      clearInterval(interval)
      quiz.innerHTML = `
      <h2 style="margin: 20px;">Your Score ${score}/${quizData.length}.</h2>
      <button id="reload" type="button" onclick="location.reload()" style="display:block;">Reload</button>
      `
    }
  }
})

nextBtn.addEventListener('click', ()=>{
  answerEls.forEach(answerEl => answerEl.checked = true)
  submitBtn.click()
})

function timer(){
  time = time - 1;
  if (time < 60){
    times.innerHTML = time;
  }
  if (time < 1){
    answerEls.forEach(answerEl => answerEl.checked = true)
    submitBtn.click()
    time = 60;

  }
}
interval = setInterval("timer()", 1000);
