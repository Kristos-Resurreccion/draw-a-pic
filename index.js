const canvas = document.querySelector('.canvas')



for (i = 0; i <= 15; i++) {
    const row = document.createElement('div')
    row.setAttribute('class', 'row')
    row.setAttribute('id', `row-${i}`)
    canvas.append(row)
}

const rows = document.querySelectorAll('.row');

rows.forEach(row => {
    for (i = 0; i <= 15; i++) {
        const pixel = document.createElement('div')
        pixel.setAttribute('class', 'pixel')
        pixel.setAttribute('id', `pixel${i}`)
        row.append(pixel)
    }
})

