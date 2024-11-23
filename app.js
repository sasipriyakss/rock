const choice=["rock" ,"paper", "scissors"];

const player=document.getElementById('player');
const computer=document.getElementById('computer');
const result=document.getElementById('result');

const playerscore=document.getElementById("playerScoreDisplay");
const computerscore=document.getElementById("computerScoreDisplay");
const chancescore=document.getElementById("chancecount");

let pscore=0;
let cscore=0;
let chance=10;


function playgame(playerchoice){
    chance=chance-1;

    const computerchoice=choice[Math.floor(Math.random()*3)];

   let res="";
   if(playerchoice===computerchoice)
   {
    res="It's a tie!"
   }
   else
   {
    switch(playerchoice)
    {
    case "rock":
     res= (computerchoice==="scissors") ? "YOU WIN!" : "YOU LOSE";
     break;
    
    case "paper":
       res=(computerchoice==="rock") ? "YOU WIN!" : "YOU LOSE";
       break;

    case "scissors":

        res=(computerchoice==="paper") ? "YOU WIN!" : "YOU LOSE";
        break;

}
   }
   player.textContent=`PLAYER: ${playerchoice}`;
   computer.textContent=`computer: ${computerchoice}`;
   result.textContent=res;

   result.classList.remove("greentext","redtext");

   if(res=="It's a tie!")
   {
    chance=chance+1;
   }

   switch(res)
   {
    case "YOU WIN!":
        result.classList.add("greentext");
        pscore=pscore+1;
        playerscore.textContent=pscore;
    
        chancescore.textContent=chance;

        break;
    case "YOU LOSE":
        result.classList.add("redtext");
        cscore=cscore+1;
        computerscore.textContent=cscore;
        
        chancescore.textContent=chance;
        break;
   }

   if(chance==0)
   {
    chancescore.textContent=chance;
    if(pscore>cscore)
    {
      
      alert("YOU WIN!!");
      location.reload()
      
    }
    else{
        chancescore.textContent=chance;
        alert("YOU LOSE PLAY ONE MORE TIME");
        location.reload();
    }
   }
}
