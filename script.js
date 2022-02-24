function guess(){
    var num=document.getElementById('num').value;
    if(num==0 || num==""){
        alert("Please Enter Number..");
    }
    else{
    
    var rd=Math.floor(Math.random() * 3);
    console.log(rd);
   
    if(rd==num){
        document.getElementById('rs').innerHTML="You Guess Correct";
    }
    else{
        document.getElementById('rs').innerHTML="Ohh You Lose the Game!";

    }
}
    
}

