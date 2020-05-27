/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let correctAnswers = 0

// 2. Store the rank of a player

let rank = ("No crown");

// 3. Select the <main> HTML element

const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const qOne = prompt("What's my favorite food?");
if (qOne.toUpperCase() === "BREAD") {
  correctAnswers += 1;
}

const qTwo = prompt("What was my first favorite band?");
if (qTwo.toUpperCase() === "BACKSTREET BOYS"){
  correctAnswers +=1;
}

const qThree = prompt("What was my second favorite band?");
if (qThree.toUpperCase() === "BLINK 182") {
  correctAnswers +=1;
}

const qFour = prompt("What was my third favorite band?");
if (qFour.toUpperCase() === "NIRVANA") {
  correctAnswers += 1;
}

const qFive = prompt("What was my fourth favorite band?");
if (qFive.toUpperCase() === "RADIOHEAD") {
  correctAnswers += 1;
}
/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (correctAnswers === 5) {
  rank = "Gold"
} else if (correctAnswers === 3 || correctAnswers === 4) {
  rank = "Silver"
} else if (correctAnswers === 1 || correctAnswers === 2) {
  rank = "Bronze"
} else if (correctAnswers === 0) {
  rank = "No crown"
}


// 6. Output results to the <main> element

main.innerHTML = `<h2>You got ${correctAnswers} right. Your rank is ${rank}</h2>`
