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

let elementoDaNascondere = document.getElementById(`text`);

// timer 
setTimeout(nascondi, 3000, elementoDaNascondere);


