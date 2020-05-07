//! Closures
//? printColor





console.log('IIFE');
// IIFE : immediately invocate function expression
(function() {
    let color = 'green'; //it wont be global

    function printColor() {
        console.log(color);
    }

    printColor();
})();




console.log('\n\nFunctions which returns function:');
// Funciones que regresan funciones
function makeColorPrinter(color) {
    let colorMessage = `The color is ${color}`;

    return function() {
    console.log(colorMessage);
    };
}

let orangeColorPrinter = makeColorPrinter('orange'); //the function inside remembers the values that the first function used
console.log(orangeColorPrinter()); //bcs the first function (its scope) remember orange, so it is able to print the color
//closure is a features of private variables






console.log('\n\nPrivate variables:');
// variables "privadas"
const counter3 = { //I created this variable but I don't want people can see it
    count: 3,
};
console.log(counter3.count)
//if it is not private anyone can change its value
counter3.count=99
console.log(counter3.count)

//solution:




console.log('\n\nSolution to Private variables:');
function makeCounter (value){
    let count = value;
    return {
        increase: function (){
            count = count + 1
        },
        getCount: function (){
            return count
        }
    }
}

let counter = makeCounter(7)
console.log('The count is: ',counter.getCount())
counter.increase()
counter.increase()
counter.increase()
console.log('The count is: ',counter.getCount())
counter.count=33
console.log('The count is: ',counter.getCount()) // the value is the same bcs the variable can not be modified directly, it has to be through a function which is inside of that object



//! Closure allows to hide these vales and avoid problems
//! it allows to stablish predefine values and create new function to work on these values