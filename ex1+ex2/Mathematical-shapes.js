let side = 9;
function diagonal() {
    return (side * Math.sqrt(2))
}
console.log("diagonal is " + diagonal())

let triangle = { side1: 7, side2: 6, side3: 9 }
let s = (triangle.side1 + triangle.side2 + triangle.side3) / 2;
let area = Math.sqrt(s * ((s - triangle.side1) * (s - triangle.side2) * (s - triangle.side3)));
console.log("area of the triangle is " + area);

const PI = 3.14
let circle = { radius: 4 };
circle.circumference = circle.radius * 2 * PI
circle.surface = circle.radius ** 2 * PI
console.log("the surface of the circle is" + circle.surface );
console.log("the circumference of the circle is " + circle.surface );
