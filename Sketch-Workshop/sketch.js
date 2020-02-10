var moving = true
var name = 'Jordan'
var position = 100
let pressed = "pressed the button"
//Creates html5 Canvas to draw on//
function setup() {
    //determines dimensions on html5 canvas//
    createCanvas(400, 200)
}
//Determines movement of small box on canvas//

function draw() {
    //background color//
    background(200)
    //position/movement of small square//
    rect(position, 00, 10, 10)
    //if value is true//
    if (moving) {
        console.log(position, "hellowthrerer")
        position = position + 1
    }

    // console.log(' The position is ' + position)
    text('My name is ' + name, 10, 30)
    // console.log('The box is '+ moving)
}
function mousePressed() {
    moving = !moving
    // console.log("I CLICKED JUST FINE")
    
}

