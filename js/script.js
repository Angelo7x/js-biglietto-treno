//chiedere numero km
var km = parseInt (prompt ("Inserisci i km da percorrere"));
//chiedere etò passeggero
var age = parseInt (prompt("Inserisci la tua età"));
//Costo biglietto per km
var ticket = 0.21 * km
//Sconto 20%
var ticket20
if (age < 18) {
    ticket20 = ticket - (ticket*20/100)
    alert(ticket20)
} 

if (age > 65) {
    ticket50 = ticket - (ticket*50/100)
    alert(ticket50)
} 

if (18< age < 64 ) {
    alert(ticket)
}


//sconto 40%
// prezzo finale biglietto con eventuale sconto