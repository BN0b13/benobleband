const question = document.querySelector('#gen-question');
const response = document.querySelector('#gen-response');
const form = document.querySelector('#form');
const subBtn = document.querySelector('#user-submit');

// stores random number outside of function that creates random num
let outsideRanNum;
// stores user's answer
let userAnswer;

loadEventListeners();

function loadEventListeners() {
  questionGen();
  subBtn.addEventListener('click', userSubmit);
}

function userSubmit() {
  checkAnswer()
  responseGen();
}

function questionGen() {
  let questArr = [
    'Do you like dogs?',
    'Do you like ice cream?',
    'Do you like pizza?',
    'Do you like cats?',
    'Do you like soda?'
  ]
  
  let ranNum = Math.floor(Math.random() * questArr.length);
  outsideRanNum = ranNum;
  document.getElementById('gen-question').innerHTML = questArr[ranNum];
}

// cases to determine response based upon user's answer
function responseGen() {
  switch (outsideRanNum) {
    case 0:
      if(userAnswer == 'yes') {
        response.innerHTML = 'Arrrooooo You are great!!';
      } else if(userAnswer == 'no') {
        response.innerHTML = 'Wow, that is rough!';
      } else return
      break;
    case 1:
      if(userAnswer == 'yes') {
        response.innerHTML = 'WE ALL SCREAM FOR ICE SCREAM';
      } else if(userAnswer == 'no') {
        response.innerHTML = 'Ummmmm...what.';
      } else return
      break;
    case 2:
      if(userAnswer == 'yes') {
        response.innerHTML = 'Pizza is my jam!!';
      } else if(userAnswer == 'no') {
        response.innerHTML = 'No pizza! Tacos only!!';
      } else return
      break;
    case 3:
      if(userAnswer == 'yes') {
        response.innerHTML = 'Here kitty, kitty, kitty!';
      } else if(userAnswer == 'no') {
        response.innerHTML = 'Hisssssss!!';
      } else return
      break;
    case 4:
      if(userAnswer == 'yes') {
        response.innerHTML = 'Soda is Sweet!';
      } else if(userAnswer == 'no') {
        response.innerHTML = 'Soda does not do it for me';
      } else return
      break;
    default:
      alert('Response Failed');
      
  }
}

// determine's user's answer, stores it in let userAnswer
function checkAnswer() {
  if(document.querySelector('input[name="answer"]:checked').value == 'yes') {
    userAnswer = 'yes';
  } else if(document.querySelector('input[name="answer"]:checked').value == 'no') {
    userAnswer = 'no';
  }
}

