document.getElementById('matchAlert').style.display = "none";
document.getElementById('mismatchAlert').style.display = "none";
document.getElementById('pin-alert').style.display = "none";


//pin generator
const pinGenerate = document.getElementById("pin-generate");
pinGenerate.addEventListener("click", function(){
    let getRandomPin = Math.ceil(Math.random()*9000+1000);

    document.getElementById('number-output').value = getRandomPin;
});


//keypad

function enterPin(id){
    var key = document.getElementById(id);
key.addEventListener('click',function(){
    document.getElementById('display-pin').value += this.innerText;
})
};

enterPin('btn-1');
enterPin('btn-2');
enterPin('btn-3');
enterPin('btn-4');
enterPin('btn-5');
enterPin('btn-6');
enterPin('btn-7');
enterPin('btn-8');
enterPin('btn-9');
enterPin('btn-0');

// backspace Key

var backspaceKey = document.getElementById('backspace');
backspaceKey.addEventListener('click',function(){
    document.getElementById('display-pin').value = document.getElementById('display-pin').value.slice(0,-1);
});

// clear key

var clearKey = document.getElementById('clear');
clearKey.addEventListener('click',function(){
    document.getElementById('display-pin').value ='';
});


//pin matching task
let subBtn = document.getElementById('pin-submit');
subBtn.addEventListener('click',function(){
    if(document.getElementById('number-output').value == document.getElementById('display-pin').value)
    {
        document.getElementById('matchAlert').style.display = "block";
        document.getElementById('mismatchAlert').style.display = "none";
    }

    else
    {
        document.getElementById('mismatchAlert').style.display = "block";
        document.getElementById('matchAlert').style.display = "none";
    }
    
})
