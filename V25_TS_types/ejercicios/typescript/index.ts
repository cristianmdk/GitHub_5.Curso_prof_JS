// Boolean
let muted: boolean = true;
muted = false;
muted = "noisy"; //error


//numbers
//static analysis of the types
let age = "6"
let dividend: number = 16;
let divisor: number = age; //error
let quotient = dividend/divisor;


//string
let myName : string = "Cristian";
let greeting = `My name is ${myName}`;


//tuples
let peopleName: string[] = ["Cristian", "David", "Angulo", "Lopez"];
peopleName.push("9000");
peopleName.push(9000); //error


//tuples mix
let peopleAge: Array< string | number > = ["Cristian", 29, "Choice", 25];
peopleAge.push(9000);
peopleAge.push("9000");


// Enum = set
enum Colors {
    Red, Yellow, Blue
}
enum ColorName {
    Red="Red", Yellow="Yellow", Blue="Blue" //I have to assign all
}

let colorChoice: Colors = Colors.Blue;
console.log(`My favorite color is ${colorChoice}`); //ans: My favorite color is 2

let colorChoice2: ColorName = ColorName.Blue;
console.log(`My favorite color is ${colorChoice2}`); //ans: My favorite color is Blue


//Object
let someObject: object = { type: 'Wildcard' };


//Any
let joker: any = 'joker';
joker = 3; //number
joker = {   //object
    type: "wildcard"
}


