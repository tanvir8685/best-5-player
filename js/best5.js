const playerArray=[];
function displayPlayer(player){
    const addedPlayers=document.getElementById('added-players');
    addedPlayers.innerHTML='';
    for(let i=0;i<player.length;i++){

        // console.log(playerArray[i]);
        const playerName=playerArray[i];
        console.log(playerName)
        const li=document.createElement('li');
        li.innerHTML=
        `${playerName}`;
        addedPlayers.appendChild(li)
        
    }
    

}
function addToOl(element){
    // console.log(element.parentNode.children);
    // console.log(element.parentNode.children[0].innerText)
    const playerName=element.parentNode.children[0].innerText;
    playerArray.push(playerName);
    
    // console.log(playerArray);
    // console.log(playerArray.length);
    document.getElementById('selected-player-number').innerText=playerArray.length;
    displayPlayer(playerArray);
    
    
}
