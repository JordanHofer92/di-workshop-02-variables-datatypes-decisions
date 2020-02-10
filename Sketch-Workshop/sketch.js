var moving = true
var name = 'Jordan'
var position=100
//Creates html5 Canvas to draw on//
function setup() {
    //determines dimensions on html5 canvas//
    createCanvas(400, 200)
}
//Determines movement of small box on canvas//
function draw() {
    background(200)
    position = position + 1
    rect(position, 0, 10, 10)
    // console.log(' The position is ' + position)
    text('My name is ' + name, 10, 30)
    // console.log('The box is '+ moving)
}
function mousePressed() {
    console.log(pressed)
}

  if (moving) {
    
  }