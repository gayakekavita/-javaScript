let num = Math.floor(Math.random() * 100) + 1;
let score=100;
let chances=0;
let guess;
while(guess!=num)
  {
    guess=window.prompt("Enter the number");
    guess=Number.parseInt(guess);
    if(guess>num)
    {
      window.alert("Your guess is greater than the number");
    }
    else if(guess<num) {
      window.alert("Your guess is smaller than the number");
    }
    chances++;
  }

window.alert("You gussed it right  "+guess + " Your score is "+ (score-chances));
