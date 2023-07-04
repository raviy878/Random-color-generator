const ComputerChoiceDisplay= document.getElementById('computer-choice')
const userChoiceDisplay= document.getElementById('user-choice')
const resultDisplay= document.getElementById('result')
const possibleChoices=document.querySelectorAll('button')

let userChoice

possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userChoiceDisplay.innerHtml=userChoice
    // generateComputerChoice()
}))

// function generateComputerChoice (){
//     const randomNumber= math.floor(math.random()*possibleChoices.length)
//     console.log(randomNumber);
// }
