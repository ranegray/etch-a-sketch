const gridBtn = document.getElementById('grid-btn');

window.onload = function() {
    let count = 256,
        div,
        grid = document.getElementById('grid');

    for (let i = 0; i < count; i++) { 
            div = document.createElement('div');
            div.classList.add('pixel');
            div.addEventListener('mouseover', changeColor);
            grid.appendChild(div);
        }
};

function changeColor(){
    this.classList.add('hovered');
}

function changeGrid(){
    const perSide = prompt('How many squares per side? ');
    perSide > 100 ? perSide = 100: perSide;

    let count = perSide * perSide,
        div,
        grid = document.getElementById('grid');
        
    grid.innerHTML = '';
    document.documentElement.style.setProperty("--columns-row", perSide)

    for (let i = 0; i < count; i++) { 
            div = document.createElement('div');
            div.classList.add('pixel')
            div.addEventListener('mouseover', changeColor)
            grid.appendChild(div);
        }
};

gridBtn.addEventListener('click', changeGrid); // this should generate whole new grid