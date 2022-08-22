const playerArray=[];
function addToOl(element){
    // console.log(element.parentNode.children);
    // console.log(element.parentNode.children[0].innerText)
    const playerName=element.parentNode.children[0].innerText;
    playerArray.push(playerName);
    // console.log(playerArray);
    // console.log(playerArray.length);
    document.getElementById('selected-player-number').innerText=playerArray.length;
    
}