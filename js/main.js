//Dichiaro due variabili per l'output dei risultati
const multiTre = "Fizz";
const multiCinque = "Buzz";

//Uso un ciclo for per scansionare i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

  //Eseguo i controlli condizionali per verificare se il numero è solo multiplo di 3
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log(multiTre);
  }
}