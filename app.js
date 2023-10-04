const questions = [
  {
    que: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "Javascript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "What year was JavaScript launched",
    a: "1996",
    b: "1995",
    c: "1990",
    d: "2000",
    correct: "b",
  },

  {
    que: "What does CSS stands for?",
    a: "Hybertext markup Language",
    b: "Cascading Styles Sheets",
    c: "Jason Object",
    d: "Javascript node",
    correct: "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;

const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll(".options");

const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  queBox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      //   console.log("Yes");
      answer = input.value;
      // console.log(input.value);
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.querySelector(
    ".box"
  ).innerHTML = `<h3>Thank You Your Quiz has been submited</h3>
  <h2>${right}/${total} are correct</h2>`;
};
loadQuestion();
