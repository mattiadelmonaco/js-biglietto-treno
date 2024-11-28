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
// 3. In base alle informazioni precedenti calcola il costo totale del biglietto (0.21 € al km)
//          - Mostra messaggio "🎫 Costo biglietto (0.21 € * n km) 🎟"
//      - SE età minore di 18 anni calcola 20% di sconto (-20% su costo totale)
//          - Mostra messaggio "🎫 Costo biglietto ((0.21 € * n km) -20%) anzichè (0.21 € * n km) 🎟 - sconto MINORENNE applicato!"
//      - ALTRIMENTI SE età maggiore o uguale a 65 anni calcola 40% di sconto (-40% su costo totale)
//          - Mostra messaggio "🎫 Costo biglietto ((0.21 € * n km) -40%) anzichè (0.21 € * n km) 🎟 - sconto OVER 65 applicato!"      
// 4. Mostra messaggio "🧳 Buon viaggio!!! 🗺"


// - CODES -

// 1. Chiedi all'utente di inserire il numero di chilometri che vuole percorrere

const distance = Number(prompt ("Inserisci i chilometri che vuoi percorrere!"));
console.log (typeof distance, distance);

// 2. Chiedi all'utente di inserire l'età del passeggero

const passengerAge = Number(prompt ("Inserisci la tua età!"));
console.log (typeof passengerAge, passengerAge);

// 3. In base alle informazioni precedenti calcola il costo totale del biglietto (0.21 € al km)

const ticketPrice = (0.21 * distance);
ticketPrice.toFixed(2);
console.log (typeof ticketPrice, ticketPrice);

//          - Mostra messaggio "🎫 Costo biglietto (0.21 € * n km) 🎟"
//      - SE età minore di 18 anni calcola 20% di sconto (-20% su costo totale)
//          - Mostra messaggio "🎫 Costo biglietto ((0.21 € * n km) -20%) anzichè (0.21 € * n km) 🎟 - sconto MINORENNE applicato!"
//      - ALTRIMENTI SE età maggiore o uguale a 65 anni calcola 40% di sconto (-40% su costo totale)
//          - Mostra messaggio "🎫 Costo biglietto ((0.21 € * n km) -40%) anzichè (0.21 € * n km) 🎟 - sconto OVER 65 applicato!"      
// 4. Mostra messaggio "🧳 Buon viaggio!!! 🗺"