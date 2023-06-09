const canvas = document.getElementById("my_canvas");
canvas.width = 200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2,canvas.width*0.9);
const car = new Car(road.get_lane_center(1),600,30,50);

animate();

function animate() {
    car.update();
    canvas.height = window.innerHeight;
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate)
}