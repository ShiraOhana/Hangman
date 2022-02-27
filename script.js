let words = [
  "Cat",
  "Dog",
  "Donkey",
  "Goat",
  "Horse",
  "Pig",
  "Rabbit",
  "Bee",
  "Alligator",
  "Alpaca",
  "Dolphin",
  "Donkey",
  "Dove",
  "Dragonfly",
  "Dragon",
  "Duck",
  "Ant",
  "Chicken",
  "Butterfly",
  "Baboon",
  "Badger",
  "Deer",
  "Elephant",
  "Fox",
];
let word = words[Math.floor(Math.random() * words.length)];
word = word.toLowerCase();
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "*";
}
let guessArray = [];
let lives = 10;
let remainingLetters = word.length;

console.log("Lets start the game!\n");
while (remainingLetters > 0) {
  console.log(answerArray.join(" "));
  if (lives == 1) {
    console.log("You have 1 life left");
  } else if (lives > 1) {
    console.log("You have " + lives + " lives left");
  }

  let guess = prompt("Guess a letter");
  guess = guess.toLowerCase();
  console.log("\n");
  if (guessArray.includes(guess)) {
    console.log("Already chosen ");
  }
  guessArray.push(guess);
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    console.log("Please enter a single letter ");
    console.log("\n");
  } else if (guess >= 0) {
    console.log("Please enter a valid letter ");
    console.log("\n");
  } else if (!word.includes(guess)) {
    lives--;
    console.log("One life lost. ");
    console.log("\n");
  } else {
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }

  if (lives == 0) {
    break;
  }
}

console.log("\n");
console.log(answerArray.join(" "));
console.log("The answer was " + word + ":)");
if (lives === 0) {
  console.log("Nice try, but not enouge :(");
} else {
  console.log("Good job!");
}
