/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA:

I principali dataype in JavaScrypt sono:
- Number: Si intende numeri sia interi che decimali. Si accettano sia numeri positivi che negativi.
- Stringa: Questo tipo di dato è caratterizzato dall'essere racchiuso dalle doppie virgolette "", dagli apici '' o dai backticks ``. 
    Una stringa è una sequenza di caratteri alfanumerici, come "1234" o "sonoUnNumero" etc.
- Boolean: Ha solo 2 stati: True o False. E' paragonabile a un interruttore che può solo essere acceso o spento. Possiamo associare una variabile booleana
a varie azioni, per esempio voglio verificare se l'interruttore è acceso, in caso positivo (true) faccio un'azione, ELSE (caso negativo=false) faccio un'altra azione.
- Undefined: E' uno stato della variabile che si ottiene quando la variabile è dichiarata ma non inizializzata. 
    In pratica abbiamo detto allo script che la variabile esiste ed ha un suo nome, ma senza avergli dato un valore. E' come avere un recipiente di vuoto, 
    senza averlo riempito con qualcosa. Non l'abbiamo svuotato noi, MA non è stato mai riempito per cui non sappiamo l'utilizzo del contenitore.
- Null: in questo caso la variabile è stata dichiarata e inizzializzata e in un secondo momento l'abbiamo svuotata. 
    Nel caso del contenitore abbiamo preso il contenitore e lo abbiamo riempito di una quantità di zucchero. In un secondo momento lo abbiamo svuotato, 
    ma sappiamo che quel contenitore contiene quel tipo di ingrediente, anche se occasionalmente possiamo usarlo anche per contenere altri ingredienti.
- Oggetti: sono strutture complesse di coppie chiave-valore ovvero accoppiamo ad una chiave un valore che può essere string, number, boolean etc. 
    E' come se in un oggetto concatenassimo + variabili, ognuna con un suo valore. Gli oggetti si racchiudono tra le graffe {}.
- BigInt: è un tipo di dato numerico che rappresenta numeri interi molto larghi.
- Array: Sono una lista di dati ordinati per indice che va da 0 (per il primo elemento) ed incrementa di uno ad ogni elemento. 
    L'array può contenere vari tipi di dato, inoltre gli elementi possono essere aggiunti o rimossi da esso. E' come una lista della spesa in cui 
    andiamo ad ordinare gli elementi necessari.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

Gli oggetti sono strutture complesse di coppie chiave-valore ovvero accoppiamo ad una chiave un valore che può essere string, number, boolean etc. 
    E' come se in un oggetto concatenassimo + variabili, ognuna con un suo valore. Gli oggetti si racchiudono tra le graffe {}.
    Gli oggetti raggruppano le proprietà e le funzioni. Possiamo per esempio avere un ogetto "smartphone" e avere delle
    proprietà {brand: "Samsung", deviceName: "Samsung S10+", model: "SM-G975F", isAndroid: true; androidVersion: 12}.
    Per ottenere il valore di una propreità dell'oggetto scriverò smartphone.isAndroid e riceverò "true", oppure smartphone.model e riceverò "SM-G975F". 
    */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA  */

function somma(num1, num2) {
  return num1 + num2;
}

let risultato = somma(12, 20);
console.log(risultato);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Michelangelo";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sottrazione = 4 - x;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "jhon";
let name2 = "Jhon";

if (name1 !== name2) {
  console.log(`${name1} e ${name2} non sono uguali\!`);
}

if (name1.toLowerCase === name2.toLowerCase) {
  console.log(`${name1} e ${name2} sono uguali se usiamo il lowercase\!`);
}
