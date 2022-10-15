const promptBtn = document.getElementById('alert-btn');

function changeColor(){
    this.classList.add('hovered');
}

function changeGrid(){
    const perSide = prompt('How many squares per side? ');

    let count = perSide * perSide,
        div,
        grid = document.getElementById('grid'),
        fragment = document.createDocumentFragment();

    for (let i = 0; i < count; ++i) { 
            div = document.createElement('div');
            div.classList.add('pixel')
            div.addEventListener('mouseover', changeColor)
            fragment.appendChild(div);
        }

    grid.appendChild(fragment);
};

promptBtn.addEventListener('click', changeGrid); // this should generate whole new grid

window.onload = function() {
    let count = 256,
        div,
        grid = document.getElementById('grid'),
        fragment = document.createDocumentFragment();

    for (let i = 1; i < count + 1; ++i) { 
            div = document.createElement('div');
            div.style.cssText('border: 1px solid black; height: 25px; width: 25px');
            div.addEventListener('mouseover', changeColor);
            fragment.appendChild(div);
        }

    grid.appendChild(fragment);
};

