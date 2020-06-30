//interfaces: define la forma exacta que debe tener un objeto. No hay propiedades de mas ni de menos


interface rectangle {
    width: number;
    height: number;
}

let rect: rectangle = {
    width: 10,
    height: 4,
}

function areaRectangle (r: rectangle): number {
    return r.height * r.width;
}

const rectArea = areaRectangle(rect);
console.log("1. ", rectArea);


//---------------------------------------------
//
//  Triangle
//
//---------------------------------------------
enum Color{
    red = "Magenta",
    blue = "Cyan",
}

interface triangle {
    base: number;
    height: number;
    color: Color;
}

const trian: triangle = {
    base: 4,
    height: 10,
    color: Color.blue,
}

trian.toString = function(){
    return this.color ? `This is a ${trian.color} triangle` : "This is a triangle";
}
console.log("2. ", trian.toString());


//---------------------------------------------
//
//  Circle, color optional
//
//---------------------------------------------
interface circle {
    radio: number;
    color?: Color;
}

const ball: circle = {
    radio: 8,
    //color: Color.red,
}

ball.toString = function(){
    return this.color ? `This is a ${ball.color} circle` : "This is a circle";
}
console.log("3. ", ball.toString());