const playerArray = []


function disable(x){
    x.disabled=true;
    
}

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



//////////////// common function/////////////////////

function getValueFromInputField(idname){
    const InputField=document.getElementById(idname);
        const InputValueString=InputField.value;
        const InputValue=parseFloat(InputValueString);
        return InputValue;
}


function addToOl(element) {
    
    const playerName = element.parentNode.children[0].innerText;
    playerArray.push(playerName);

       
        const selectedPlayerNumber= document.getElementById('selected-player-number').innerText = playerArray.length;
       
        

    

    
    
    
    let x = playerArray.length;
    displayPlayer(playerArray);
    
    const perPlayerBudgetCalculate=document.getElementById('per_player_budget_calulate')
    perPlayerBudgetCalculate.addEventListener('click',function(){
       const perPlayerBugetField=document.getElementById('per_player_budget');
       
       const perPlayerBugetValue=perPlayerBugetField.value;
       
       
       const playerBudgetShowElement=document.getElementById('player-budget-show');
       
        const playerTotalExpense=perPlayerBugetValue*parseFloat(x)
       playerBudgetShowElement.innerText=playerTotalExpense;

       
       

       const totalCalculateBtn=document.getElementById('total-calculate-btn');
        totalCalculateBtn.addEventListener('click',function(){
        
        
        getValueFromInputField('manager-input-field')
        getValueFromInputField('coach-input-field')
        
      
        

        const totalExpense=getValueFromInputField('manager-input-field')+getValueFromInputField('coach-input-field')+playerTotalExpense;
        console.log(totalExpense);
        const totalExpenseShow=document.getElementById('total-expense-show');
        totalExpenseShow.innerText=totalExpense;
     
    })




    
       
       
   
    })
    

    }
    





