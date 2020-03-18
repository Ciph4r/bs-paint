let square = document.querySelectorAll('.square')
const currentColor = document.querySelector('.current-brush')
const canvas = document.querySelector('.canvas')
 canvas.style.width = '500px'
let auto = false

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
    l.addEventListener('click' , squareColor)
}




// extra goal stuff


// MORE SPACE
const increase = document.querySelector('.increase')

const gridColumns = getComputedStyle(canvas)

const addMoreSpace = () => {
 let x = canvas.style.width.split('px')
 return Number(x[0]) + 50 + 'px'
 }


let canvisSize = 19
const increaseCanv = () => {
    canvisSize += 2
    for (i = 0 ; i < canvisSize ; i++){
        let div = document.createElement('div')
        div.setAttribute('class', "square color-new")
        div.addEventListener('click',squareColor)
        canvas.append(div)
    }
    canvas.style.width  = addMoreSpace()
}

increase.addEventListener('click',increaseCanv)


//////////////////////////////////////

//AUTO MODE
const toggleMode = () => {
    let square = document.querySelectorAll('.square')
    canvas.style.border = '1px solid black'
    if (auto){
        auto = false
        
        autoMode.innerHTML = 'mouse over mode = OFF'
     } else {
        auto = true
        autoMode.innerHTML = 'mouse over mode = ON'
    }
    for (const l of square){
        l.removeEventListener(auto ?'click' : 'mouseover', squareColor)
    }
    for (const l of square){
        l.addEventListener(auto ? 'mouseover' : 'click', squareColor)       
}
}

const autoMode = document.querySelector('.auto')

autoMode.addEventListener('click',toggleMode)

/////// add color


const color = document.querySelector('.color-1')

color.style.backgroundColor = 'blue'

