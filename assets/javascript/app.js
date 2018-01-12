

var intervalId;
var currentQuestion = 0;
var score = 0;
var countdown =  50;

var questions = [
  {
    question: "What is the tallest mountain in North America?",
    answer1: "Denali",
    answer2: "Mount Rushmore",
    answer3: "King Peak",
    answer4: "Mount Steele",
    correctAnswer: "1"
  },
  {
    question: "What is the only major city located on two continents?",
    answer1: "London",
    answer2: "Istanbul",
    answer3: "Rome",
    answer4: "New Delhi", 
    correctAnswer: "2"
  },
  {
    question: "What is the oldest active volcano on Earth?",
    answer1: "Mount Fuji",
    answer2: "Mount Olympus",
    answer3: "Mount Etna",
    answer4: "Mount Yasur",
    correctAnswer: "3"
  },
  {
    question: "What river runs through Paris?",
    answer1: "Danube",
    answer2: "Elbe",
    answer3: "Thames",
    answer4: "Seine",
    correctAnswer: "4"
  },
  {
    question: "What Hawaiian island is known as 'Bird Island'?",
    answer1: "Hulu",
    answer2: "Nihoa",
    answer3: "Kauhuula",
    answer4: "Pulemoku",
    correctAnswer: "2"
  },
  {
    question: "What is the capital of Pakistan?",
    answer1: "Bahawalpur",
    answer2: "Karachi",
    answer3: "Islamabad",
    answer4: "Lahore",
    correctAnswer: "3"
  },
  {
    question: "What is the most populated country in Africa?",
    answer1: "South Africa",
    answer2: "Nigeria",
    answer3: "Ghana",
    answer4: "Ethiopia",
    correctAnswer: "2"
  },
  {
    question: "What body of water separates Africa from Europe?",
    answer1: "Strait of Hormuz",
    answer2: "Strait of Magellan",
    answer3: "Strait of Malacca",
    answer4: "Strait of Gibraltar",
    correctAnswer: "4"
  },
  {
    question: "What is the smallest country in South America?",
    answer1: "Guyana",
    answer2: "Suriname",
    answer3: "Aruba",
    answer4: "Bolivia",
    correctAnswer: "2"
  },
  {
    question: "Which country is NOT part of the Scandinavian Peninsula?",
    answer1: "Finland",
    answer2: "Denmark",
    answer3: "Sweden",
    answer4: "Norway",
    correctAnswer: "2"
  } 
];

var totalQuestions = questions.length;

// we call the showQuestion function to start and we start the countdown
showQuestion(currentQuestion);
timer();

// this function displays the first question and the choices you have for answers 
function showQuestion(i) {

  var q = questions[i];

  $("#question").html((i + 1) + "." + q.question);

  $("#answer1").html(q.answer1);
  $("#answer2").html(q.answer2);
  $("#answer3").html(q.answer3);
  $("#answer4").html(q.answer4);
};

//this function loads the next question
function loadNextQuestion() {

  var selectedAnswer = document.querySelector("input[type=radio]:checked");
  
  // we make sure an answer is selected
  if(!selectedAnswer) {
    alert("Please select an answer!");
    return;
  }
// we grab the value of the checked radio input
  var answer = selectedAnswer.value;
  
// we compare the value of the correctAnswer with the value of the selectedAnswer
  if(questions[currentQuestion].correctAnswer == answer) {
    score++;
  }
  //we go to the next question after we chaneg checked value to false
  selectedAnswer.checked = false;
  currentQuestion++;

  // if we get to the last-1 question we change the button label to Finish 
  if(currentQuestion == totalQuestions - 1) {
    $("#nextButton").html("Finish");
  }

  //after the last question we display the results and stop the countdown
  if(currentQuestion == totalQuestions) {
    displayResult();
    clearInterval(intervalId);
    return;
  }
  showQuestion(currentQuestion);
}

function decrement() {
  countdown--;
  // we start the countdown and display the remaining time 
  $("#show-time").html("<h2>Time remaining: " + countdown + " seconds </h2>");
  // if time expires we display the results
  if (countdown === 0) {
    alert("Time Up!");
    displayResult();
  }
}

function timer() {
  intervalId = setInterval(decrement, 1000);
}  

function displayResult() {
  $("#container").css("display", "none")
  $("#result").css("display", "");
  $("#result").css("white-space", "pre-line");
  $("#result").html("Correct answers: " + score + "\r\nIncorrect answers: " + (totalQuestions - score)); 
}



  