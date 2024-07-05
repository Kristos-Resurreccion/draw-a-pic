const canvas = document.querySelector(".canvas")



for (i = 0; i <= 15; i++) {
    const pixel = document.createElement("div")
    pixel.setAttribute('class', `pixel`)
    pixel.setAttribute('id', `pixel-${i}`)
    canvas.append(pixel)
}