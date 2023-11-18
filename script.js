const body = document.querySelector("body")
const  gridContainer = document.createElement("div")

gridContainer.classList.add("grid")
body.appendChild(gridContainer)

function createGrid() {
    for(let i=0 ; i<16 ;i++){
    for(let j=0 ;j<16 ; j++){
        const gridItem = document.createElement("div")
        gridItem.classList.add("grid-item")        
        gridContainer.appendChild(gridItem)
        gridItem.addEventListener('mouseover',(event)=>{
            event.target.classList.add('hover')
        })
    }}}

createGrid()