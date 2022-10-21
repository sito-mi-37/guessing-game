let username = prompt("enter username!")


function guess(upperRange, score = 1) {
  const secretNum = Math.ceil(Math.random() * upperRange)
  let newTurn = 0;
  let hasWon = false;
  console.log(`STAGE: ${score}`)

  while (userNum != secretNum && newTurn < 2 && upperRange < 5) {
    newTurn++;
    var userNum = parseInt(prompt(`guess a number from 1 - ${upperRange} `))

    if (userNum == secretNum) {
      console.log('you got it right');
      hasWon = true;
    } else if (secretNum > userNum) {
      console.log(`too low... ${newTurn === 2 ? "" : "TRY AGAIN"} :(`)
    } else if (secretNum < userNum) {
      console.log(`too high... ${newTurn === 2 ? "" : "TRY AGAIN"} :(`)
    } else {
      console.log('that is not a number')
    }
  }

  if (hasWon == true) {
    console.log(`Congratulations ${username} | Total Score: ${score}`)
    if (upperRange < 5) {
      guess(upperRange += 1, score += 1)
    }
  } else if (upperRange === 5) {
    console.log("hurray! you have finished all levels")
  } else if (hasWon == false) {
    console.log(`sorry ${username}, better luck next time!`)
    return;
  }
}
guess(2)