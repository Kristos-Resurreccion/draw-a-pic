const canvas = document.querySelector('.canvas')

function drawGrid(dimension) {

    let rows = document.querySelectorAll('.row');
    let pixels = document.querySelectorAll('.pixel')

    for (i = 0; i < dimension; i++) {
        const row = document.createElement('div')
        row.setAttribute('class', 'row')
        row.setAttribute('id', `row-${i}`)
        canvas.append(row)
    }

    rows = document.querySelectorAll('.row');

    rows.forEach(row => {
        for (i = 0; i < dimension; i++) {
            const pixel = document.createElement('div')
            pixel.setAttribute('class', 'pixel')
            pixel.setAttribute('id', `pixel${i}`)
            row.append(pixel)
        }
    })

    pixels = document.querySelectorAll('.pixel')

    for (i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('mouseover', function (e) {
            let randomHex = (Math.random() * 0xfffff * 1000000).toString(16)
            const hexColor = '#' + randomHex.slice(0, 6)
            e.target.style.background = hexColor
            e.target.style.opacity = +e.target.style.opacity + .1
        })
    }
}

drawGrid(16)





const gridSizeBtn = document.querySelector('#grid-size')
gridSizeBtn.addEventListener('click', () => {
    let promptSize = prompt('Type in your grid size. (max 100, must be a number)');
    let promptSizeClean = parseInt(promptSize);
    if (promptSizeClean <= 100) {
        gridSize = promptSizeClean;
    } else {
        gridSize = 100;
    }

    let rows = document.querySelectorAll('.row');
    let pixels = document.querySelectorAll('.pixel')

    rows.forEach(row => {
        row.remove()
    })

    pixels.forEach(pixel => {
        pixel.remove()
    })

    drawGrid(gridSize)
})

