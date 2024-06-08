let
outputScreen=document.getElementById('output-screen');
function display(num){
    outputScreen.value +=num;
}
function calcular(){
    try{
outputScreen.value=eval(outputScreen.value);
}
catch(err){
    alert("invalid")
}
    function ClearDisplay(){
        outputScreen.value = "";
    }
    function back(){
        outputScreen.value = 
        outputScreen.value.slice(0,-1)
    }
}