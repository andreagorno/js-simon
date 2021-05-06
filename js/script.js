// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// creazione alert con 5 numeri
var numbers = [];
var arrUser = [];

for ( var i = 0; i < 5; i++) {
    var randomNumber = createRandom(1, 99);
    
    if (!inArray(randomNumber, numbers)) {
        numbers.push(randomNumber);
    }
}
console.log(numbers);
alert("PRONTO?\nMemorizza i seguenti numeri:\n" + numbers);

// creare timeout di 30 secondi
setTimeout(askNumbers, 30000);

setTimeout(checkWin, 30000);


// --------------FUNZIONI---------------
// funzione per generare un numero
function createRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function askNumbers() {
    for (var i = 0; i < 5; i++) {
        var userNumbers = parseInt(prompt("Inserisci uno alla volta i numeri che ti ricordi"));
        arrUser.push(userNumbers);
    }
    console.log(arrUser);
}

function inArray (element, array) {

    for (var i = 0; i < array.length; i++) {
        // console.log("Iterazione", i);

        if (element == array[i]) {
            return true;
        }

    }
    return false;

}

function checkWin() {
    var result = [];
    for (var i = 0; i < 5; i++) {
        // Se il numero è tra quelli generati
        if (inArray(arrUser[i], numbers)) { 
            // Lo aggiungo a result
            result.push(arrUser[i]);
        }
    }
    // Mostro result e result.length
    console.log("Numeri indovinati ",result, result.length);
    alert("Congratulazioni hai indovinato " + result.length +" numeri:\n" + result);
}