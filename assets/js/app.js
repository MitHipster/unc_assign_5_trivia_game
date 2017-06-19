/*jslint esversion: 6, browser: true*/
/*global window, console, $, jQuery, questions, alert*/

const $correctId = $('#correct');
const $incorrectId = $('#incorrect');
const $scoreId = $('#score');
const $timeId = $('#time');
const $catContainer = $('.category-container');
const $quesId = $('#question');
const $choicesId = $('#choices');
const $factId = $('#fact');
const answered = '#77ab00';
const active = '#437f97'; // Old color #e8a921
const unanswered = '#d01217';

let game = {
  categories: ["geography", "entertain", "history", "science", "leisure", "sports"],
  activeCat: "", // Hold name of active category
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
      let cIndex = randomNum(game.categories.length);
      let cat = game.categories[cIndex];
      game.activeCat = cat;
      // Call categoryDisplay function to change category to active
      game.fn.categoryDisplay('active');
      // Store randomly selected question index value by calling randomNum function and passing total number of questions per category
      let qIndex = randomNum(game.qPerCategory);
      console.log(qIndex);
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
        li.attr('data-choice', i)
          .text(choice);
        $choicesId.append(li);
      });
    },
    // Function to change the appearance of the category block based on game play
    categoryDisplay: function (status) {
      switch (status) {
        // For active question change background color yellow and show question mark icon
        case 'active':
          $catContainer
            .find(`[data-cat="${game.activeCat}"]`)
            .css('background-color', active)
            .find('.not-answered')
            .attr('src', 'assets/img/question.svg');
          break;
        // For answerd question change background color green, hide not answered icon and fade in answered icon
        case 'answered':
          $catContainer
            .find(`[data-cat="${game.activeCat}"]`)
            .css('background-color', answered)
            .find('.not-answered')
            .css('display', 'none');
          $catContainer
            .find(`[data-cat="${game.activeCat}"]`)
            .find('.answered')
            .css('visibility', 'visible')
            .hide()
            .fadeIn(1000);
          break;
        // For unanswerd question change background color red and show not icon
        default:
          $catContainer
            .find(`[data-cat="${game.activeCat}"]`)
            .css('background-color', unanswered)
            .find('.not-answered')
            .attr('src', 'assets/img/not.svg');
          break;
      }
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
      // Call removeChoices function
      game.fn.removeChoices();
      game.correct++;
      $correctId.text(game.correct);
      $factId.text(game.fact);
      // Call categoryDisplay function to change category to answered
      game.fn.categoryDisplay('answered');
    },
    // Function to update the incorrect count
    guessIncorrect: function () {
      // Call removeChoices function
      game.fn.removeChoices();
      game.incorrect++;
      $incorrectId.text(game.incorrect);
      // Call categoryDisplay function to change category back to unanswered
      game.fn.categoryDisplay('unanswered');
    },
    // Functions to remove click event and hide unselected choices
    removeChoices: function () {
      $choicesId.off();
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