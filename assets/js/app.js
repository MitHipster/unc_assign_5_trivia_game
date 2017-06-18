/*jslint esversion: 6, browser: true*/
/*global window, console, $, jQuery, questions, alert*/

const $quesId = $('#question');
const $choicesId = $('#choices');
const $correctId = $('#correct');
const $incorrectId = $('#incorrect');
const $scoreId = $('#score');
const $timeId = $('#time');

let game = {
  categories: ["geography", "entertain", "history", "science", "leisure", "sports"],
  qPerCategory: 12, // Number of questions in each category
  q: "",
  choices: [],
  a: 0,
  fact: "",
  correct: 0,
  incorrect: 0,
  score: 0,
  fn: {
    // Function to select the next question in the game and add to question container
    selectQues: function () {
      // Store randomly selected category by calling randomNum function and passing the length of the categories array
      let cat = game.categories[randomNum(game.categories.length)];
      // Store randomly selected question index value by calling randomNum function and passing total number of questions per category
      let qIndex = randomNum(game.qPerCategory);
      game.q =  questions[cat][qIndex].q;
      // Store all information pertaining to the current question
      game.choices =  questions[cat][qIndex].choices;
      game.a =  questions[cat][qIndex].a;
      game.fact =  questions[cat][qIndex].fact;
      $quesId.text(game.q);
    },
    // Function to create an ordered list of potential answers
    addChoices: function () {
      $.each(game.choices, function(i, choice) {
        let li = $('<li>');
        li.attr('data-choice', i).text(choice);
        $choicesId.append(li);
      });
    },
    // Function to add a click event on guess to check for the correct answer
    checkGuess: function () {
      $choicesId.on('click', function (e) {
        if ($(e.target).data('choice') === game.a) {
          console.log(true);
          game.correct++;
          $correctId.text(game.correct);
        } else {
          console.log(false);
          game.incorrect++;
          $incorrectId.text(game.incorrect);
        }
      });
    }
  }
};

// Function to return a random number to select a category or question
let randomNum = function (num) {
  return Math.floor(Math.random() * num);
};

game.fn.selectQues();
game.fn.addChoices();
game.fn.checkGuess();