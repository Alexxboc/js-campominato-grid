/* 

L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:

- con difficoltà 1 => tra 1 e 100
- con difficoltà 2 => tra 1 e 81
- con difficoltà 3 => tra 1 e 49

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

*/

// Creo una funzione che generi le celle
function generateGrid(number_of_cells, selector, element_name, class_name) {
    // Seleziono l'elemento contenitore nella DOM
    const cellsElement = document.querySelector(selector)
    // Genero il numero di celle con un ciclo for
    for (let i = 1; i <= number_of_cells; i++) {
         // Dichiaro una variabile dove creo l'elemento della DOM
      const cell = document.createElement(element_name)
        // Aggiungo la classe all'elemento 
      cell.classList.add(class_name)
        // Appendo l'elemento nella DOM
      cellsElement.append(cell)
    }
  }

  

  generateGrid(100, '.cells', 'div', 'cell')