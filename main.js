const square = document.querySelectorAll('.square')
const currentColor = document.querySelector('.current-brush')

// const color = document.querySelector('.color-1')
// const color2 = document.querySelector('.color-2')
// const color3 = document.querySelector('.color-3')
// const color4 = document.querySelector('.color-4')
// const color5 = document.querySelector('.color-5')
// const mycolor = getComputedStyle(color).backgroundColor
// const mycolor2 = getComputedStyle(color2).backgroundColor
// const mycolor3 = getComputedStyle(color3).backgroundColor
// const mycolor4 = getComputedStyle(color4).backgroundColor
// const mycolor5 = getComputedStyle(color5).backgroundColor

const colorName = (x) =>{
    return x.split(' ')[1]
    }

const brushColor = (event) =>{
    currentColor.className = "current-brush "+ colorName(event.target.className)
}

const squareColor = (event) =>{
event.target.className = 'square ' + colorName(currentColor.className)

}

const palette = document.querySelectorAll('.palette-color')
for (const l of palette){
    l.addEventListener('click',brushColor)
}

for (const l of square){
    l.addEventListener('click',squareColor)
}










