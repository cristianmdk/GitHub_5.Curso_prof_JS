//Functions

function add (a:number, b:number){
    return a+b;
}

const totalAdd = add (3,4);
console.log("1. ", totalAdd);



function addFour (a: number): (number) => number  { //(number) => number  indicates that the return value is a function
    return function (b: number = 4) {
        return b + a;
    };
}

const AddFunction = addFour (10);
console.log("2. ", AddFunction);

var FourAddDefault = AddFunction (10);
console.log("3. ", FourAddDefault);

FourAddDefault = AddFunction();
console.log("4. ", FourAddDefault);






function fullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}
const Cristian = fullName('Cristian', 'Angulo');
console.log("5. ", Cristian);


function fullNameOptional(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}
const Choice = fullNameOptional('Choice'); //Choice Undefined
console.log("6. ", Choice);


function fullNameDefault(firstName: string, lastName: string = 'Kiatyanyong'): string {
    return `${firstName} ${lastName}`;
}
const Chanyaporn = fullNameDefault('Chanyaporn');
console.log("7. ", Chanyaporn);
