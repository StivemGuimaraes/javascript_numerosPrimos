exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
    for (i = 2; i <= limite; i++){       
        if (calculaPrimos(i)) {
            console.log(i);
        }
    }
}

function calculaPrimos(numero) {
    let primo = true;
    for (let divisor = 2; divisor < i; divisor++){
        if (i % divisor === 0) {
           return false;
        }
    }
    return true;
}