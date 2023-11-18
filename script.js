const body = document.querySelector("body")
const gridSizeButton =  document.createElement('button')
const  gridContainer = document.createElement("div")

gridSizeButton.textContent= "Change Grid Size"
gridContainer.classList.add("grid")

body.appendChild(gridSizeButton)
body.appendChild(gridContainer)

function createGrid(size =16) {
    console.log(size)
    for(let i=0 ; i<size ;i++){
    for(let j=0 ;j<size ; j++){
        const gridItem = document.createElement("div")
        gridItem.style.border='1px solid black';
        gridItem.style.boxSizing='border-box';
        gridItem.style.width = `${768/size}px`;
        gridItem.style.height= `${768/size}px`;

        gridContainer.appendChild(gridItem)
        gridItem.addEventListener('mouseover',(event)=>{
            event.target.classList.add('hover')
        })
    }}}

function askGridSize(){
    return prompt("Enter Grid Size")

}

function changeGrid(){
    gridContainer.innerHTML='';
    let size = askGridSize();
    createGrid(size);
}

gridSizeButton.addEventListener('click',changeGrid);


createGrid()