const rs = require('readline-sync');
const chalk = require('chalk');

// track the user score
let score = 0;
const wrongAnswer = chalk.bold.red;
const rightAnswer = chalk.bold.green;
// const warning = chalk.hex('#FFA500');

// top scorers


// Taking the userInput
console.log(chalk.magentaBright('Welcome to the Quiz'));
let userName = rs.question(chalk.whiteBright("Enter your name: "));
console.log(`${chalk.blueBright("Welcome")} ${chalk.bgMagentaBright.bold(userName)} ${chalk.greenBright("to the " + chalk.blue.underline.bold("Cricket Quiz Game."))}`);

// instructions for the game
console.log('\n');
console.log('Rules & Instructions: ');
console.log(`1. ${userName}, There are 10 Questions on India and all are Compulsory.`);
console.log('2. You will get 10 points on each Right Answer.');
console.log('3. 5 points will be deducted if the Answer is Wrong.');
console.log('4. In MCQ based questions you have to type the Serial Number / Index Value.');
console.log('\n');

// Storing questions in the form of objects

let questionOne = {
    question: "1. Who won the first ever Cricket World Cup in 1975? \n A. Australia \n B. England \n C. India \n D. West Indies",
    answer: "D"
}
let questionTwo = {
    question: "2.   Which of the following country has hosted the ICC World Cup most times? \n A.  England  \n B. India \n C. Australia \n D. West Indies",
    answer: "A"
}
let questionThree = {
    question: "3. Which of these countries has never won the Cricket World Cup? \n A. Australia \n B. England \n C. South Africa \n D. West Indies",
    answer: "C"
}
let questionFour = {
    question: "4. Who has taken the highest number of wickets in Test Cricket? \n A. Muttiah Muralitharan \n B. Shane Warne \n C.  Anil Kumble \n D. Shoaib Akhtar",
    answer: "A"
}
let questionFive = {
    question: "5. Which cricket team has won most ICC Cricket World Cup titles? \n A. Australia \n B. England \n C. India \n D. West Indies",
    answer: "A"
}

// Declaring Question array to store the value of objects

let questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

// Let's create a play function through which we can play the quiz game
let play = (ques, ans) => {
    // userInput i.e, connect the userInput inside userAnswer variable. 
    let userAnswer = rs.question(ques);

    if (userAnswer.toUpperCase() === ans.toUpperCase()) {
        console.log(rightAnswer("\n Right Answer"));
        score += 10;
    } else {
        console.log(wrongAnswer("\n Wrong Answer"));
        console.log(chalk.green(`The correct Answer is: ${chalk.yellowBright.bold(ans)}`));
        score -= 5;
    }
    if (score < 0) {
        score = 0;
    } else {
        console.log("Score is: ", score);
    }
    console.log("\n");
    console.log("----------------")
    console.log(chalk.blue(`Your current score is ${chalk.yellow.bold(score)}`));
    console.log("----------------");
    
}

// function highScorers() {
//     if (score >= 45) {
//       console.log("🔥 YAYYYYY!, You broke the record");  
//       console.log(`Congratulate ${chalk.magentaBright(userName)}, please send a screenshot so that I can update the high score list.`)
//     } else if (score >= 35 & score <=45) {
//     console.log(chalk.blueBright("Good try, you can do it better!"));
//     } else {
//       console.log(chalk.hex('#FFA500')("Aww!, better luck next time."));
//     }
//   }


// Loop through the given question array
for (let i = 0; i < questions.length; i++) {
    // use play method to loop through this array
    play(questions[i].question, questions[i].answer); 
}

console.log("High scores are: ");
console.log("------------------")

function example(newScore) {
    let topScorers = [
        {
            name: "Vikrant",
            score: 45
        },
        {
            name: "Harleen",
            score: 40
        }
    ];

    for (let i = 0; i < topScorers.length; i++) {
        let highScorers = topScorers[i].score;
        if (newScore > highScorers) {
            highScorers.splice(i, 0, newScore);
            topScorers.length = Math.min(topScorers.length, 10);
            console.log(highScorers);
        }
    }
    if (topScorers.length < 10) {
        // Adding to the end
        topScorers.push(newScore);
      }
      console.log(highScorers);
}
console.log(example(3));










console.log("\n");

//  highScorers();