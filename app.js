let randomNumber=Math.floor((Math.random()*10)+1);
console.log(randomNumber);



function checkGuess(){
    let Inpnum=document.getElementById('numTxt');
    let guessedNumber = parseInt(Inpnum.value);
    if(randomNumber==guessedNumber){
        setMessage("You Won...");
    }else if(randomNumber>guessedNumber){
        setMessage("Try a bigger Number...");
    }else{
        setMessage("Try a Smaller Number...");
    }
    numTxt.value="";
}

function setMessage(message){
    document.getElementById('msgTxt').textContent=message;
}