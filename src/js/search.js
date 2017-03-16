let SearchEngine = function (searchEngines) {
  'use strict';

  let def = 'https://google.com/search?q='

  /*
   * Seleziono il form con classe .search
   * nel DOM, e il text input che contiene
   * a query che dobbiamo cercare.
   */

  let form = document.querySelector('form.search');
  let input = document.querySelector('form.search input[name = q]');

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
   * "wikipedia: Alan Turing"
   * se trovo il motore di ricerca eseguo ricerca, altrimenti,
   * uso google di default.
   *
   * @param {event}.
   */

  form.onsubmit = function (event) {
    event.preventDefault();
    for (let engine in searchEngines) {
      if(!input.value.indexOf(engine)) {
        search(searchEngines[engine], input.value.replace(engine+': ', ''));
        break;
        }
      search(def, input.value);
    }
  }
};
