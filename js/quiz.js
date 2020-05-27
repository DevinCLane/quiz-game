/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let correctAnswers = 0

// 2. Store the rank of a player

let rank;

// 3. Select the <main> HTML element

const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const qOne = prompt("What's my favorite food?");
if ( qOne.toUpperCase() === 'BREAD' ) {
  correctAnswers += 1;
}

const qTwo = prompt("Guess my favorite bands across the ages: as a ~5th grade youth, what was my first favorite band?");
if ( qTwo.toUpperCase() === "BACKSTREET BOYS" ){
  correctAnswers +=1;
}

const qThree = prompt("In jr. high, who became my favorite?");
if ( qThree.toUpperCase() === "BLINK 182" ) {
  correctAnswers +=1;
}

const qFour = prompt("In high school, who was my favorite?");
if ( qFour.toUpperCase() === "NIRVANA" ) {
  correctAnswers += 1;
}

const qFive = prompt("And then after that?");
if ( qFive.toUpperCase() === "RADIOHEAD" ) {
  correctAnswers += 1;
}
/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if ( correctAnswers === 5 ) {
  rank = "Gold"
} else if ( correctAnswers >= 3 ) {
  rank = "Silver"
} else if ( correctAnswers >= 1 ) {
  rank = "Bronze"
} else {
  rank = "No crown, sorry :("
}


// 6. Output results to the <main> element

main.innerHTML = `
  <h2>You got ${correctAnswers} correct out of 5.</h2> 
  <p>Your rank is ${rank}</p>
  `;
