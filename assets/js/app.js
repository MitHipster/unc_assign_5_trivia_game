/*jslint esversion: 6, browser: true*/
/*global window, console, $, jQuery, questions, alert*/

const $quesId = $('#question');
const $choicesId = $('#choices');

let game = {
  categories: ["geography", "entertain", "history", "science", "leisure", "sports"],
  qPerCategory: 12, // Number of questions in each category
  q: "",
  choices: [],
  a: 0,
  fact: "",
  correct: false,
  fn: {
    // Function to select the next question in the game and add to question container
    selectQues: function () {
      // Store randomly selected category by calling randomNum function and passing the length of the categories array
      let cat = game.categories[randomNum(game.categories.length)];
      // Store randomly selected question index value by calling randomNum function and passing total number of questions per category
      let qIndex = randomNum(game.qPerCategory);
      game.q =  questions[cat][qIndex].q;
      game.choices =  questions[cat][qIndex].choices;
      game.a =  questions[cat][qIndex].a;
      game.fact =  questions[cat][qIndex].fact;
      $quesId.text(game.q);
    },
    addChoices: function () {
      
    }
  }
};

// Function to return a random number to select a category or question
let randomNum = function (num) {
  return Math.floor(Math.random() * num);
};

game.fn.selectQues();