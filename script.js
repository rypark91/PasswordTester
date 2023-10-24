var password = document.querySelector("#passwordBox");
var strengthResult = document.querySelector("#strengthResult");

password.addEventListener('keypress',function(e){
    if(e.key === ' ' || e.key === "space"){
        e.preventDefault();
    }
});


password.addEventListener('keyup',function(){
    if(this.value.length === 0){
        strengthResult.textContent = "";
    }
    else if(this.value.length < 8){
        strengthResult.textContent = "Weak";
    }
    else{
        var noDupe = String(this.value).split('');
        var realNoDupe = new Set(noDupe);
        var numCount = 0;
        var upperCount = 0;
        var lowerCount = 0;
        var specialCount = 0;
        var finalNoDupe = Array.from(realNoDupe);
        for(var i = 0; i< finalNoDupe.length; i++){
            if(!isNaN(finalNoDupe[i] * 1)){
                numCount++;
            }
            else if(finalNoDupe[i] = finalNoDupe[i].toUpperCase()){
                upperCount++;
            }
            else if(finalNoDupe[i] = finalNoDupe[i].toLowerCase()){
                lowerCount++;
            }
            else{
                specialCount++;
            }
        }
        var uniqueCharacterCount = numCount + upperCount + lowerCount + specialCount;
        if(uniqueCharacterCount >= 1 && uniqueCharacterCount <= 4){
            strengthResult.textContent = "Still too weak";
        }
        else if(uniqueCharacterCount == 5 || uniqueCharacterCount == 6){
            strengthResult.textContent = "ok";
        }
        else if(uniqueCharacterCount == 7 || uniqueCharacterCount == 8){
            strengthResult.textContent = "Strong";
        }
        else if(uniqueCharacterCount >= 9){
            strengthResult.textContent = "Very Strong";
        }
    }
})