let num =parseInt(prompt("De qulle factorielle veux tu le resultat?"))
function factorial(num) {
    if (num === 0){
        return 1;
    }
    else {
    return num * factorial(num - 1);
    
    }
}
   


console.log(`le resultat est ${factorial(num)}`);