# Vue To Do List #
 
--

Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da almeno due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no.

--

- Creo l'istanza *createApp* da Vue.
- La monto nel DOM.
- Creo l'array che conterrà gli oggetti della lista.
- Nel DOM creo una list item dinamica che stamperà un *li* per ogni task.
- Aggiungo una classe dinamica al *li* precedentemente creato che andrà a modificare il testo sbarrandolo quando il valore della chiave done è **true**.
- Aggiungo la chiave *id* agli oggetti dell'array per poterli identificare.
- Metto il ascolto il button usando la sintassi **@click**.
    - Creo la function **deleteTask** che mi servirà per eliminare la task selezionata.
    - Come parametro inserisco l'id dell'oggetto.
    - Utlizzando il metodo **filter** creo una nuova array la quale conterrà gli oggetti dell'array **tasks** che avranno un *id* diverso da quello inserito come parametro.
- Aggiungo al DOM un input text dinamico e un button. 
    - Creo una function *nextId*, che mi tenga traccia del prossimo id.
    - Creo la function **addTask** che aggiunga all'array *tasks* il nuovo oggetto, lo collego al button del DOM.
    - Usando la sintassi *@keyup.enter* richiamiamo la funzione **addTask** per aggiungere la task al click del tasto *Enter*.
                

