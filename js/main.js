// rock paper scissors game
let play = confirm("play a Game ?")
if (play){
let userInput = prompt("Enter Rock Or Paper or Scissors");

let computerInput = ['rock','paper','scissors'];

let computerValue = Math.floor(Math.random()*computerInput.length);

let computer = computerInput[computerValue];

if (userInput){
    let user=userInput.trim().toLowerCase();
    if(user === "rock" ||
        user === "paper" ||
        user === "scissors"
    ){
        let result = user === computer 
        ? "Tie"
        : user ==="rock" && computer=== "paper"
        ? "Computer Wins..."
        : user === "rock" && computer ==="scssiors"
        ? "Player Wins..."
        : user === "paper" && computer ==="rock"
        ? "Player wins..."
        : user === "paper" && computer ==="scissors"
        ? "Computer Wins..."
        : user === "scissors" && computer ==="rock"
        ? "Computer Wins..."
        // : user  ==="scissors" && computer ==="paper"
        :"Player Wins..."
        console.log(result);
        console.log(`Player choice ${user}`);
        console.log(`computer choice ${computer}`);
        play=alert(`Player   = ${user}\nComputer = ${computer}\nResults  = ${result}`)

        let playAgain=confirm("Play Again ?");
            playAgain ? location.reload() : alert("Ok Thanks for played..")
    }
    else{
        alert("Enter Valid name")
        location.reload()
    }
}
else{
    alert("Ok may be Next time....")
}
}
else{
    alert("Ok Bye...")
}

