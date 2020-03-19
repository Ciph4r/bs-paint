let square = document.querySelectorAll('.square')
const currentColor = document.querySelector('.current-brush')
const canvas = document.querySelector('.canvas')
// canvas.style.width = '500px'
let gridCount = 11
canvas.style.gridTemplateColumns = 'repeat(10,1fr)'
canvas.style.gridTemplateRows = 'repeat(10,1fr)'
let auto = false
let customColor = false



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
    currentColor.style.backgroundColor = ''
    currentColor.className = "current-brush "+ colorName(event.target.className)
    customColor = false
}

// const squareColor = (event) =>{
// event.target.className = 'square ' + colorName(currentColor.className)

// }


const squareColor = (event) =>{
    if(customColor){
    event.target.style.backgroundColor = currentColor.style.backgroundColor
        event.target.className = 'square'
    }else {
        event.target.className = 'square ' + colorName(currentColor.className)
        event.target.style.backgroundColor = ''
    }
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

// const gridColumns = getComputedStyle(canvas)

// const addMoreSpace = () => {
//  let x = canvas.style.width.split('px')
//  return Number(x[0]) + 50 + 'px'
//  }



 


let canvisSize = 19
const increaseCanv = () => {
    canvisSize += 2
    for (i = 0 ; i < canvisSize ; i++){
        let div = document.createElement('div')
        div.setAttribute('class', "square color-5")
        div.addEventListener(auto ? 'mouseover' : 'click', squareColor) 
        canvas.append(div)
    }
    canvas.style.gridTemplateColumns = `repeat(${gridCount},1fr)`
    canvas.style.gridTemplateRows = `repeat(${gridCount},1fr)`
    gridCount ++
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
let colorCount = 6
const colorButton = document.querySelector('.create')
const paletteColor = document.querySelector('.palette')
const brushColor2 = (event) =>{
    currentColor.style.backgroundColor = event.target.style.backgroundColor
    currentColor.className = "current-brush"
    customColor = true
}




const createColor = () => {
    let div = document.createElement('div')
    const colorValue = document.querySelector('#color').value
        div.setAttribute('class', 'palette-color color-' + colorCount)
        div.style.backgroundColor = colorValue
        div.addEventListener('click' , brushColor2)
        colorCount ++
        paletteColor.append(div)
}

colorButton.addEventListener('click',createColor)



/////paint three square at a time

let threeSqButton = document.querySelector('.threeSq')
let threeSquare = false

const paintThreeSq = (event) =>{
if (threeSquare){
    let x = square.indexOf(event.target)
    square[x-1].style.backgroundColor = currentColor.style.backgroundColor
    square[x+1].style.backgroundColor = currentColor.style.backgroundColor
}
}





const paintThreeToggle = () => {
    if (threeSquare) {
        threeSquare = false  
        threeSqButton.innerHTML = 'Paint Three Squares = OFF' 
    }else{
        threeSquare = true
     threeSqButton.innerHTML = 'Paint Three Squares = ON'
     for (const l of square){
        l.addEventListener('click', paintThreeSq) 
    }
}
}

threeSqButton.addEventListener('click',paintThreeToggle)

