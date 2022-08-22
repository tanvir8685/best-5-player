const playerArray = []

function displayPlayer(player) {
    const addedPlayers = document.getElementById('added-players');
    addedPlayers.innerHTML = '';
    for (let i = 0; i < player.length; i++) {

        // console.log(playerArray[i]);
        const playerName = playerArray[i];
        // console.log(playerName)
        const li = document.createElement('li');
        li.innerHTML =
            `${playerName}`;
        addedPlayers.appendChild(li)

    }


}
function addToOl(element) {
    // console.log(element.parentNode.children);
    // console.log(element.parentNode.children[0].innerText)
    const playerName = element.parentNode.children[0].innerText;
    playerArray.push(playerName);

    // console.log(playerArray);
    // console.log(playerArray.length);
    document.getElementById('selected-player-number').innerText = playerArray.length;
    let x = playerArray.length;
    displayPlayer(playerArray);
    
    const perPlayerBudgetCalculate=document.getElementById('per_player_budget_calulate')
    perPlayerBudgetCalculate.addEventListener('click',function(){
       const perPlayerBugetField=document.getElementById('per_player_budget');
       
       const perPlayerBugetValue=perPlayerBugetField.value;
       
       
       const playerBudgetShowElement=document.getElementById('player-budget-show');
       playerBudgetShowElement.innerText=perPlayerBugetValue*parseFloat(x);

       const managerInputField=document.getElementById('manager-input-field');
       const managerInputValue=managerInputField.value;
       console.log(managerInputValue);
     
       const coachInputField=document.getElementById('coach-input-field');
       const coachInputValue=coachInputField.value;
       console.log(coachInputValue);
       
       
   
    })

    }



// addToOl('selected-player-number');
// console.log( document.getElementById('selected-player-number').innerHTML)


function y(value)  {
  ;
}