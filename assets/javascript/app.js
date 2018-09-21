// print time

// have number
var num = 30;
// have a countdown
var intervalId;

var correct = 0;
var incorrect = 0;

function run() {
  // adding my own timer
  intervalId = setInterval(decrement, 1000);
}

// function to make timer count down
// if timer gets to 0, end game
function decrement() {

  num--;

  $("#time-remaining").html("<h3>" + num + "</h3>");

  if (num === 0) {

    stop();

    // add in game logic to end game and count score
    // writing the number of correct, game over, time's up
    $("form").empty();
    $("#score").text(correct + " correct out of 5");

    
  }
}

// function to stop the timer
function stop() {

  clearInterval(intervalId);
}

function reset(){
  correct = 0;
  num = 30;
  clearInterval(intervalId);
  $("form").empty();
  printQuestions(questionBank);
  run();
}
run ()

var questionBank = [
  {
    question: "Question1",
    choices: [
      "Answer1","Answer2","Answer3","Answer4"
    ],
    answer: "Answer1"
  }, {
    question: "Question2",
    choices: [
      "Answer1","Answer2","Answer3","Answer4"
    ],
    answer: "Answer1"
  },{
    question: "Question3",
    choices: [
      "Answer1","Answer2","Answer3","Answer4"
    ],
    answer: "Answer1"
  },{
    question: "Question4",
    choices: [
      "Answer1","Answer2","Answer3","Answer4"
    ],
    answer: "Answer1"
  },{
    question: "Question5",
    choices: [
      "Answer1","Answer2","Answer3","Answer4"
    ],
    answer: "Answer1"
  }
];

function printQuestions(questionList) {
  console.log(questionList);

  for (var i = 0; i < questionList.length; i++) {
    var questionDiv = $("<div>")
    // print out question
    var questionText = $("<h3>");
    questionText.text(questionList[i].question);

    questionDiv.append(questionText);

    for (var j = 0; j < questionList[i].choices.length; j++) {
      // create radio button
      var radioDiv = $("<div>");
      radioDiv.addClass("form-check form-check-inline");
      // radio button
      var radioInput = $("<input>");
      radioInput.attr({class: "form-check-input", type: "radio", name: i, value: questionList[i].choices[j]})
      var radioLabel = $("<label>");
      radioLabel
        .addClass("form-check-label")
        .text(questionList[i].choices[j]);

      radioDiv.append(radioInput, radioLabel);

      questionDiv.append(radioDiv);
    }

    $("form").append(questionDiv);

  }

}

  printQuestions(questionBank);


$(document).on("change", ".form-check-input", function() {

  // get value and question index from input
  var questionAnsweredIndex = $(this).attr("name");
  var answerPicked = $(this).val();
  if (answerPicked === questionBank[questionAnsweredIndex].answer) {
    correct++;
  }


  console.log(questionAnsweredIndex);
  console.log(answerPicked);

})

$("#reset-game").on("click", reset);
