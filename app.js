function getPin(){
   const random = Math.random() * 10000;
//    making string
   const pinString = random + ''; 
//    spliting string with '.'
   const pin = (pinString).split('.')[0];
    if(pin.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const pinInput = document.getElementById("otp");
    pinInput.value = getPin();
}
// handle calculator button event
const buttonCalculator = document.getElementById("digit-container");
buttonCalculator.addEventListener("click",function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        if(digit === 'C'){
            const typed = document.getElementById("typed-pin");
            typed.value = '';
        }
    }
    else{
        const typed = document.getElementById("typed-pin");
        typed.value = typed.value + digit;
    }
});
function matchPin(){
    const genOtp = document.getElementById("otp").value;
    const myPin = document.getElementById("typed-pin").value;
    if(genOtp === myPin){
     document.getElementById("correct").style.display = "block";
    }
    else{
        document.getElementById("inCorrect").style.display = "block";
    }
}