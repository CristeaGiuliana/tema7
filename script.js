function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    fill("white");
    ellipse(200, 200, 300, 300);
    fill("yellow");
    triangle(180, 150, 220, 150, 200, 100);
    triangle(150, 220, 150, 180, 100, 200);
    triangle(180, 250, 220, 250, 200, 300);
    triangle(250, 180, 250, 220, 300, 200);
    ellipse(200, 200, 80, 80);
    fill("pink");
    ellipse(50, 200, 40, 40);
}