/*const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        alert(button.id);
    })

})*/



const sketchBox = document.querySelector("#sketch_container")
const pix = document.createElement('div');
pix.style.backgroundColor = 'white'
pix.style.margin = '0px'
pix.style.border = '0px'
pix.classList.add('pixel');

function makePixel(){
    while (sketchBox.firstChild){
        sketchBox.removeChild(sketchBox.firstChild);
    }
    size = parseInt(window.prompt("Please enter grid size (max 20)"))
    if (typeof size !== "number" || size > 20){
        size = 20;
    }
    pix.style.width = Math.floor(400/size) + "px";
    pix.style.height = Math.floor(400/size) + "px";
    for (i=0; i<size*size; i++){
        cln =pix.cloneNode(true);
        sketchBox.appendChild(cln);
    }
    //Figure this out tommrorow
    pixels = document.querySelectorAll('.pixel');
    pixels.forEach((div) =>{
        div.addEventListener('mouseover', () =>{
            div.style.backgroundColor='red';
        })
    })

}

const newButton = document.querySelector('#new')
const resetButton = document.querySelector('#reset')

newButton.addEventListener('click', () =>{
    makePixel();
})
resetButton.addEventListener('click', () =>{
    pixels = document.querySelectorAll('div.pixel');
    pixels.forEach((div) => {
        div.style.backgroundColor='white';
    })
})
