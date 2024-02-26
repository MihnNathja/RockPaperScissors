function getComputerChoice() 
{
    var gameChoice = ["ROCK", "SCISSORS", "PAPER"];
    return gameChoice[Math.floor(Math.random()*100) % 3];
}
const playerSelection = prompt("Enter your selection");
  const computerSelection = getComputerChoice();
function winGame(playerSelection, computerSelection)
{
    if(playerSelection == "ROCK")
    {
        if(computerSelection == "PAPER")
        {
            return "You Lose! Paper beats Rock";
        }
        else
        {
            return "You Win! ROCK beats SCISSORS";
        }
    } 
    if(playerSelection == "SCISSORS")
    {
        if(computerSelection == "ROCK")
        {
            return "You Lose! ROCK beats SCISSORS";
        }
        else
        {
            return "You Win! SCISSORS beats PAPER";
        }
    } 
    if(playerSelection == "PAPER")
    {
        if(computerSelection == "SCISSORS")
        {
            return "You Lose! SCISSORS beats PAPER";
        }
        else
        {
            return "You Win! PAPER beats ROCK";
        }
    } 
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == computerSelection)
    {
        return "Draw! " + playerSelection + " doesn't beat " + computerSelection;
    }
    else
    {
        return winGame(playerSelection, computerSelection);
    }
  }

  
  console.log(playRound(playerSelection, computerSelection));
  