let SearchEngine = function (searchEngines) {
  'use strict';
  /*
   * Creo il nodo <select>
   * e successivamente aggiungo le opzioni dell'oggetto
   * passato come parametro.
   */

  function createSelectInput () {
    let select = document.createElement("select");
    select.setAttribute("name", "engines");
    addEngines(select);
    return form.insertBefore(select, input);
  }

  /*
   * Aggiungo i vari childNode. Se non ci sono
   * opzioni passate come parametro, imposta di default
   * tra le opzioni, google.
   */

  function addEngines (select) {
    let engines = Object.keys(searchEngines);
    let google = document.createElement("option");
    //google.setAttribute("selected", "selected");
    google.text = "google";
    select.appendChild(google);
    if(engines.length != 0) {
      for (let engine of engines) {
        let option = document.createElement("option");
        option.text = engine.toString();
        select.appendChild(option);
      }
    }
  }


  /*
   * Seleziono il form con classe .search
   * nel DOM, il select che contiene
   * tra gli option il motore di ricerca
   * selezionato, e il text input che contiene
   * la query che dobbiamo cercare.
   */

  let form = document.querySelector('form.search');
  let input = document.querySelector('form.search input[name = q]');

  /*
   * Vedo se esiste il tag <select> nel DOM,
   * Se c'è aggiungo, tramite addEngines(select), le varie
   * opzioni contenute come chiave dell'oggetto passato
   * come parametro. Altrimenti, creo il nodo <select>
   */

  let select = document.querySelector("select.engines") ? addEngines(select) : createSelectInput();

  /*
  * Setto il motore di ricerca di default:
  * google.com
  */
  let def = 'https://google.com/search?q='
  
  /*
   * PER MAGGIORI INFO CONSULTARE:
   * ARROW FUNCTIONS: https://developer.mozilla.org/en-
   * US/docs/Web/JavaScript/Reference/Functions/Arrow_functions;
   * ES6 O SUPERIORE, CONTROLLARE COMPATIBILITA' E IN CASO
   * RISCRIVERE LA FUNZIONE PER RENDERLA COMPATIBILE.
   */

  /*
   * Arrow Function: Esegue la ricerca sul motore di ricerca selezionato.
   * @param {url} - Uno dei link conservati in searchEngines;
   * @param {query} - Quello che dobbiamo cercare;
   * @returns redirection - La funzione reindirizza al motore designato per la ricerca.
   */

  let search =  (url, query) => location.href = url+sanitizeQuerySpaces(query);

  /*
   * Arrow Function: Rimuove gli spazi dalla query.
   * @param {query};
   * @returns {query}.
   */

  let sanitizeQuerySpaces = query => query.replace(/\s/g,'%20');

  /*
   * Gestore dell'evento sul submit:
   * Le query processate sono del tipo:
   * Select: wikipedia. Query: "Alan Turing"
   * se trovo il motore di ricerca selezionato
   * tra i motori di ricerca passati nell'oggetto, 
   * eseguo la ricerca,  altrimenti uso google di default.
   * @param {event}.
   */

  form.onsubmit = function (event) {
    let opt = select.options[select.selectedIndex].text;
    event.preventDefault();
    searchEngines.hasOwnProperty(opt) ? search(searchEngines[opt], input.value) :
    search(def, input.value)
  }
};