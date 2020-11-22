var readlineSync = require("readline-sync");
const chalk = require("chalk");

var userName = readlineSync.question(chalk.green("Enter your Name: "));

console.log( chalk.yellow("\nWelcome " + userName.toUpperCase() ) + chalk.blue.bold("!\n\nto Political quiz by Nitesh Narang."));

console.log( chalk.red("\n Note:")+" you have to answer it using a/b/c/d only.\n")
var questions = [{
  question: "Q1) The members of the Rajya Sabha are elected by",
  answer: "c",
  options: [
    "A : the people\n",
    "B : Lok Sabha\n",
    "C : elected members of the legislative assembly\n",
    "D : elected members of the legislative council\n"
  ]
}, {
  question: "Q2) The power to decide an election petition is vested in the",
  answer: "c",
  options: [
    "A : Parliament\n",
    "B : Supreme Court\n",
    "C : High courts\n",
    "D : Election Commission\n"
  ]
}, {
  question: "Q3) The members of Lok Sabha hold office for a term of",
  answer: "b",
  options: [
    "A : 4 years\n",
    "B : 5 years\n",
    "C : 6 years\n",
    "D : 3 years\n",
  ]
}, {
  question: "Q4) The minimum age to qualify for election to the Lok Sabha is",
  answer: "a",
  options: [
    "A : 25 years\n",
    "B : 21 years\n",
    "C : 18 years\n",
    "D : 35 years\n"
  ]
}, {
  question: "Q5) The minimum age of the voter in India is",
  answer: "b",
  options: [
    "A : 15 years\n",
    "B : 18 years\n",
    "C : 21 years\n",
    "D : 25 years\n"
  ]
}, {
  question: "Q6) The members of the Rajya Sabha are elected for a term",
  answer: "a",
  options: [
    "A : of six years\n",
    "B : determined by the state legislative assembly of a state\n",
    "C : of four years\n",
    "D : None of the above\n"
  ]
}, {
  question: "Q7) The president addresses both the Houses of Parliament assembled together",
  answer: "c",
  options: [
    "A : during emergency session summoned for the purpose\n",
    "B : every session\n",
    "C : first session after each general election and an the first session of each year\n",
    "D : any session\n"
  ]
}, {
  question: "Q8) The president can dissolve the Lok Sabha on",
  answer: "a",
  options: [
    "A : advice of the prime minister\n",
    "B : advice of the chief justice of India\n",
    "C : recommendation of Lok Sabha\n",
    "D : recommendation of the Rajya Sabha\n"
  ]
}, {
  question: "Q9) The position of a chief minister is",
  answer: "d",
  options: [
    "A : not constitutional\n",
    "B : identical to that of the president\n",
    "C : a combination of the position of the prime minister and president\n",
    "D : similar to that of the prime minister\n"
  ]
}, {
  question: "Q10) The phrase 'bicameral legislature' means",
  answer: "c",
  options: [
    "A : a single assembly\n",
    "B : an elected legislature\n",
    "C : a legislature consisting of a lower and an upper chamber\n",
    "D : parliamentary system of government\n"
  ]
}, {
  question: "Q11) The members of Lok Sabha are",
  answer: "d",
  options: [
    "A : partly elected and partly nominated\n",
    "B : indirectly elected\n",
    "C : nominated\n",
    "D : directly elected by the people\n"
  ]
}
]
var score = 0 ;
function quiz(question, answer, options) {
  let userAnswer = readlineSync.question("\n\n" + chalk.red(question) + chalk.red("?\n\n") + chalk.cyan(options.join('')) + chalk.green("\nEnter your answer(Enter e to exit):"));
  let lowerUserCase= userAnswer.toLowerCase();
  if (lowerUserCase === answer) {
    console.log(chalk.blue.bold("\nYou are Right."));
    score++;
  }
  else if (lowerUserCase === "e")
    return lowerUserCase;
  else
    console.log(chalk.blue.bold("\nYou are Wrong."));
}

let userAns, i = 0;

var players = [
  {
    name:"Nitesh",
    score: "6"
  },{
    name:"Demo",
    score:"5"
  }
]
function board(name, score){
  console.log(chalk.red("-----------------------------"));
  console.log(chalk.green(name+"\t\t | \t"+score));
  console.log(chalk.red("-----------------------------"));
}

function scoreboard(){
  console.log(chalk.red("\n--------Leader Board---------"));
  console.log(chalk.green("Names\t\t | \tScores"));
  for(let i=0; i<players.length;i++){
    board( players[i].name, players[i].score);
  }
  console.log(chalk.red("-----------------------------"));
  console.log(chalk.yellow("\nPlease send the screenshot of your highest score to update the leader board"));
}

do {
  userAns = quiz(questions[i].question, questions[i].answer , questions[i].options)
  i++;
} while (userAns !== "e" && i < questions.length)

console.log(chalk.yellow.bold("\nYay " + userName.toUpperCase() + "! your total score is " + score+"/"+questions.length));

scoreboard();
