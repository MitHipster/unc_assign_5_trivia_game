/*jslint esversion: 6, browser: true*/
/*global window, console, $, jQuery, questions, alert*/

const ScorrectId = $('#correct');
const $incorrectId = $('#incorrect');
const $scoreId = $('#score');
const $timeId = $('#time');
const $catContainer = $('.category-container');
const $quesId = $('#question');
const $choicesId = $('#choices');
const $factId = $('#fact');
// Needed to declare as var for window[status] to work in categoryDisplay function
var answered = '#77ab00';
var active = '#437f97';
var unanswered = '#d01217';

//  Variable that holds setInterval that runs timer
let timerId;
//  Variable that hold setTimeout that calls start of next question
let timeOutId;

let game = {
  categories: ["geography", "entertain", "history", "science", "leisure", "sports"],
  qPerCategory: 12, // Number of questions in each category
  activeCat: "", // Hold name of active category
  q: "",
  choices: [],
  a: 99, // Set to value that cannot match when time runs out
  fact: "",
  guess: 99, // Store player's answer
  correct: 0,
  incorrect: 0,
  score: 0,
  timer: 30,
  timerStart: 30, // Start value of timer
  timerRunning: false,
  incorrectMessage: 'Sorry, that answer was incorrect.',
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
      $.each(game.choices, function (i, choice) {
        let li = $('<li>');
        li.attr('data-choice', i)
          .text(choice);
        $choicesId.append(li);
      });
    },
    // Function to change the appearance of the category block based on game play
    categoryDisplay: function (status) {
      // Locate current question's category in the DOM
      let currentCat = $catContainer.find(`[data-cat="${game.activeCat}"]`);
      // Locate current question's not answered img
      let notAnswered = currentCat.find('.not-answered');
      // Change background-color to either active, answered or unanswered
      currentCat.css('background-color', window[status]);
      switch (status) {
        // For active, show question mark icon
        case 'active':
          notAnswered
            .attr('src', 'assets/img/question.svg');
          break;
        // For answerd, hide not answered icon and fade in answered icon
        case 'answered':
          notAnswered
            .css('display', 'none');
          currentCat
            .find('.answered')
            .fadeTo(500, 1);
          break;
        // For unanswerd, show not icon
        default:
          notAnswered
            .attr('src', 'assets/img/not.svg');
          break;
      }
    },
    // Function to add a click event on guess to check for the correct answer
    checkGuess: function () {
      $choicesId.on('click', function (e) {
        // Function to update stats and display a fact about question or message that answer was incorrect
        let guess = function (answer, display, showFact) {
          // Call removeChoices function
          game.fn.removeChoices();
          // Display icon denoting whether answer was correct or incorrect
          $(e.target).append(`<img class="guess" src="assets/img/${answer}.svg" alt="${answer} answer icon">`);
          // Update correct or incorrect counter and stat on site
          game[answer]++;
          $(`#${answer}`).text(game[answer]);
          // Call categoryDisplay function to change category color based on answer
          game.fn.categoryDisplay(display);
          // Display fact if answer was correct or message that guess was incorrect
          if (showFact) {
            $factId.text(game.fact);
          } else {
            $factId.text(game.incorrectMessage);
          }
        };
        // If answer is correct call the guessCorrect function else call the guessIncorrect function
        game.guess = $(e.target).data('choice');
        if (game.guess === game.a) {
          // Remove category from array when question is answered correctly
          let i = game.categories.indexOf(game.activeCat);
          game.categories.splice(i, 1);
          guess('correct', 'answered', true);
        } else {
          guess('incorrect', 'unanswered', false);
        }
      });
    },
    // Functions to remove click event, stop timer and hide unselected choices
    removeChoices: function () {
      $choicesId.off();
      game.fn.timer.stop();
      let $choicesLi = $('#choices li');
      $.each($choicesLi, function (i, choice) {
        if (i !== game.guess) {
          $(choice).fadeTo(500, 0, function () {
            $(choice).css("visibility", "hidden");   
          });
        }
      });
    },
    timer: {
      // Function to start timer and call required functions to setup game container
      start: function () {
        if (!game.timerRunning) {
          // Call reset function
          game.fn.timer.reset();
          // SetInterval to start the counter and set the timer to running (true)
          timerId = setInterval(game.fn.timer.counter, 1000);
          game.timerRunning = true;
          game.fn.selectQues();
          game.fn.addChoices();
          game.fn.checkGuess();
        }
      },
      // Function to stop timer
      stop: function () {
        // Use clearInterval to stop the counter and set the timer to not running.
        clearInterval(timerId);
        game.timerRunning = false;
        // Call start timer and load new question after after a set delay
        timeOutId = setTimeout(game.fn.timer.start, 5000);
      },
      // Function to countdown the timer
      counter: function () {
        game.timer--;
        if (game.timer === 0) {
          // Call timer stop function
          game.fn.timer.stop();
        }
        // Update timer value
        $timeId.text(game.timer);
      },
      // Function to reset game container for next question
      reset: function () {
        // Initialize starting timer
        game.timer = game.timerStart;
        // Clear any existing choices from previous questions
        $choicesId.empty();
        // Clear fact or incorrect message
        $factId.empty();
      }
    }
  },
};

// Function to return a random number to select a category or question
let randomNum = function (num) {
  return Math.floor(Math.random() * num);
};


game.fn.timer.start();