 // Deep cloning

const person={firstname:'Emma',
car:{
    brand:'bmw',
    color:'blue',
    wheels:4,
}
}
// car is also a inner object 

// const newperson =  {...person};
// const newperson1={...person,car:{...person.car}}// for inner object

// newperson.fname='Mia';
// newperson.car.color='red';//not apply 
// newperson1.car.color='blue';// it apply changes because it also refrence in inner object

// console.log(person.car);
// console.log(newperson.car);
// console.log(newperson1.car);// it apply changes 


// json stringigfy method-- convert in string

const Stringifiedval = JSON.stringify(person);

console.log(Stringifiedval);

// json parse method -->create a object

const newval = JSON.parse(Stringifiedval);
console.log(newval);

const newperson = JSON.parse(JSON.stringify(person))// it converts the object in deep copy 
console.log(newperson);
newperson.firstname="Mia";
newperson.car.color='purple';

console.log(person);
console.log(newperson);