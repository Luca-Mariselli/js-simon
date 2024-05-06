// # MILESTONE 1
// # Generate 5 numeri casuali. Può tornarvi utile una funzione? Provate a stamparli prima in console e poi in pagina.
// # :warning: Ricordate che questi numeri dovrete ricontrollarli più avanti quindi non "buttateli" ma conservateli da qualche parte


// # MILESTONE 2
// # Impostate un timer a 3 secondi, testatelo con un console.log. Una volta funzionante fate in modo che nasconda i numeri in pagina.


// # MILESTONE 3
// # Sempre nella funzione temporizzata, mostrate un prompt all'utente finchè non vi ritrovate con 5 numeri salvati. Poi stampate tutto l'array dei numeri utente in console.



// # MILESTONE 4
// # Sempre nella funzione temporizzata, ora dovrete confrontare i due array: i numeri estratti e quelli inseriti dall'utente. Da dove partire? Io inizierei a controllare di avere tutto quello che mi serve. Provate con console.log se avete visibilità dei due dati. Poi ragionate su come confrontare gli array e di come generare il risultato, cioè la lista dei numeri indovinati.

// funzione che crea numeri random
function numeriRandom(min, max) {
	let numeroRandom = Math.floor(Math.random() * max + min);
	return numeroRandom;
}

// funzione per nascondere elementi
function nascondi(elemento) {
	elemento.style.display = "none";
}

// funzione per chiedere numeri e salvarli
function askNum(numeriUtente, listaRandom) {
	for (let i = 1; i <= 5; i++) {
		let numeroUtente = parseInt(prompt(`Scrivi qui il numero che ricordi`));
		if (listaRandom.includes(numeroUtente)) {
			numeriUtente.push(numeroUtente);
		}
	}
	if (numeriUtente.length > 0 && numeriUtente.length <= 5) {
		console.log(`Hai indovinato i numeri: ${numeriUtente}`);
		console.log(
			`Complimenti hai indovinato ${numeriUtente.length} numeri su 5`
		);
	} else {
		console.log(`Mi dispiace non hai indovinato nessun numero`);
	}
}

// elemento da nascondere
let elementoDaNascondere = document.getElementById(`text`);

// creo array per numeri utente
let numeriGiusti = [];

// creo array per numeri random
let arrayRandom = [];
// ciclo per creare 5 numeri random e li salvo in array e li stampo in pagina
for (let i = 1; i <= 5; i++) {
	let numero = numeriRandom(1, 100);
	arrayRandom.push(numero);
	document.getElementById(`text`).innerHTML = arrayRandom;
}

// timer 
setTimeout(nascondi, 3000, elementoDaNascondere);

// timer per far apparire i prompt
setTimeout(askNum, 3100, numeriGiusti, arrayRandom);
