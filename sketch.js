let z = (255)
function setup() {
  createCanvas(windowWidth, windowHeight)
  fill(0)
  stroke(255)
  textAlign(CENTER)
 

}

function draw() {
  background(z)
  for (let i = -0.4; i < 2; i += 2) {
    push()
    let x = width / 2 + 50 * sin(frameCount / 2 + i)
    let y = height / 2
    let size = 100
    textSize(size-1)
    translate(x, y)
    text("Nervous", 0, 0)
    pop()
  }
}
function keyReleased(){
  (keyCode === 32); 
    if (z == 255) {
    z = 0;
  } else {
    z = 255
  }
}