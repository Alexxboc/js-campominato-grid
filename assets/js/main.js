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

  // Creo una funzione che selezioni TUTTI gli elementi creati
  function selectCells(selector) {
    //   Dichiaro una variabile dove seleziono gli elementi
    const cells = document.querySelectorAll(selector)
    return cells
  }

// Creo una funzione per la classe active 
function activateCell (selector, active_class) {
    // Dichiaro una variabile per la selezione delle celle
    const cells = selectCells(selector)
    // Creo un ciclo for
    for(let i = 0; i < cells.length; i++) {
        // Dichiaro una variabile per le singole celle
        const cell = cells[i]
        // Creo un evento al click
        cell.addEventListener('click', function() {
            console.log(this);
            this.classList.add(active_class)
        })
    }
}

  
  generateGrid(100, '.cells', 'div', 'cell')
  activateCell('.cell', 'selected')
//   fillCells('.cell')
