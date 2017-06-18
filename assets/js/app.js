/*jslint esversion: 6, browser: true*/
/*global window, console, $, jQuery, questions, alert*/

const $correctId = $('#correct');
const $incorrectId = $('#incorrect');
const $scoreId = $('#score');
const $timeId = $('#time');
const $quesId = $('#question');
const $choicesId = $('#choices');
const $factId = $('#fact');
const answered = '#77ab00';
const active = '#ffb924';

let game = {
  categories: ["geography", "entertain", "history", "science", "leisure", "sports"],
  qPerCategory: 12, // Number of questions in each category
  q: "",
  choices: [],
  a: 99, // Set to value that cannot match when time runs out
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
      // Display current question
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
        // If answer is correct call the guessCorrect function else call the guessIncorrect function
        if ($(e.target).data('choice') === game.a) {
          game.fn.guessCorrect();
        } else {
          game.fn.guessIncorrect();
        }
      });
    },
    // Function to update the correct count, score, and display a fact about the question
    guessCorrect: function () {
      game.correct++;
      $correctId.text(game.correct);
      $factId.text(game.fact);
    },
    guessIncorrect: function () {
      // Function to update the incorrect count
      game.incorrect++;
      $incorrectId.text(game.incorrect);
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