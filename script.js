// - PROBLEM - 

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// - STEPS -

// 1. Chiedi all'utente di inserire il numero di chilometri che vuole percorrere
// 2. Chiedi all'utente di inserire l'età del passeggero
// 3. In base alle informazioni precedenti calcola il costo totale del biglietto 
//      - 0.21 € al km biglietto prezzo pieno
//      - -20% al prezzo pieno se passeggero minorenne
//      - -40% al prezzo pieno se passeggero over65
// 4. SE età minore di 18 anni mostra messaggio "🎫 Costo biglietto ((0.21 € * n km) -20%) anzichè (0.21 € * n km) 🎟 - sconto MINORENNE applicato!"
//      - ALTRIMENTI SE età maggiore o uguale a 65 anni mostra messaggio "🎫 Costo biglietto ((0.21 € * n km) -40%) anzichè (0.21 € * n km) 🎟 - sconto OVER 65 applicato!"
//      - ALTRIMENTI mostra messaggio "🎫 Costo biglietto (0.21 € * n km) 🎟"
// 5. Mostra messaggio "🧳 Buon viaggio!!! 🗺"


// - CODES -

// 1. Chiedi all'utente di inserire il numero di chilometri che vuole percorrere

const distance = Number(prompt ("Inserisci i chilometri che vuoi percorrere!"));
console.log (typeof distance, distance);

// 2. Chiedi all'utente di inserire l'età del passeggero

const passengerAge = Number(prompt ("Inserisci la tua età!"));
console.log (typeof passengerAge, passengerAge);

// 3. In base alle informazioni precedenti calcola il costo totale del biglietto 
//      - 0.21 € al km biglietto prezzo pieno
//      - -20% al prezzo pieno se passeggero minorenne
//      - -40% al prezzo pieno se passeggero over65

const ticketPrice = (0.21 * distance);
console.log (typeof ticketPrice, Number(ticketPrice.toFixed(2)));

const ticketPriceUnderage = ticketPrice - ticketPrice / 100 * 20;
console.log (typeof ticketPriceUnderage, Number(ticketPriceUnderage.toFixed(2)));

const ticketPriceOver65 = ticketPrice - ticketPrice / 100 * 40;
console.log (typeof ticketPriceOver65, Number(ticketPriceOver65.toFixed(2)));

// 4. SE età minore di 18 anni mostra messaggio "🎫 Costo biglietto ((0.21 € * n km) -20%) anzichè (0.21 € * n km) 🎟 - sconto MINORENNE applicato!"
//      - ALTRIMENTI SE età maggiore o uguale a 65 anni mostra messaggio "🎫 Costo biglietto ((0.21 € * n km) -40%) anzichè (0.21 € * n km) 🎟 - sconto OVER 65 applicato!"
//      - ALTRIMENTI mostra messaggio "🎫 Costo biglietto (0.21 € * n km) 🎟"

if (passengerAge < 18) { 
    alert (`${"🎫 Costo biglietto:"} ${ticketPriceUnderage.toFixed(2) + "€ anzichè"} ${ticketPrice + "€"} ${"🎟 - sconto MINORENNE applicato!"}`) 
} else if (passengerAge >= 65) { 
    alert (`${"🎫 Costo biglietto:"} ${ticketPriceOver65.toFixed(2) + "€ anzichè"} ${ticketPrice + "€"} ${"🎟 - sconto OVER 65 applicato!"}`) 
} else { 
    alert (`${"🎫 Costo biglietto:"} ${ticketPrice.toFixed(2) + "€"} ${"🎟"}`) 
}

// 5. Mostra messaggio "🧳 Buon viaggio!!! 🗺"