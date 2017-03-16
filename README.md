# Search Script

Search script, è un piccolo tool che ti permette di scegliere su che motore fare la ricerca di una query inserita su di un input
type text.

## Uso:

```html
<!-- Aggiungi questo alla fine del documento prima del tag </body> -->
<script src="js/searchScript.js"> </script>
```

### Configura lo script:
Inserici questo codice all'interno di un tag ```<script></script> ``` o, all'interno di una funzione javascript, o, dove ti pare :smiley: .


```javascript
    new SearchEngine({
    //Alcuni esempi:
      yahoo: 'https://search.yahoo.com/search?q=',
      bing: 'https://www.bing.com/search?q=',
      wikipedia: 'https://it.wikipedia.org/w/index.php?search=',
    })
```