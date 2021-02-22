// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    N: 400,
    Method: 0,
    Download_Image: () => save(),
}
gui.add(params, "N", 0, 1000, 1)
gui.add(params, "Method", 0, 2, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    randomSeed(0)
    background(0)
    translate(width/2, height/2)
    noFill()
    stroke('white')
    strokeWeight(10)
    beginShape()
    for (let i = 0; i < params.N; ++i) {
        const angle = i / params.N * TWO_PI
        const radius = 0.35 * height
        let x, y
        if (params.Method === 0) {
            x = radius * cos(angle)
            y = radius * sin(angle)
            x += 10 * random(-1, 1)
            y += 10 * random(-1, 1)
        }
        else if (params.Method === 1) {
            x = (radius + sin(10 * angle) * 50) * cos(angle)
            y = (radius + sin(10 * angle) * 50) * sin(angle)
        }
        else if (params.Method === 2) {
            x = (radius + noise(10 + 10 * cos(angle), 10 + 10 * sin(angle)) * 100) * cos(angle)
            y = (radius + noise(10 + 10 * cos(angle), 10 + 10 * sin(angle)) * 100) * sin(angle)
        }
        vertex(x , y)
    }
    endShape(CLOSE)
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}