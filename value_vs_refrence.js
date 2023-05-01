//   value vs refrence

let x =1;
 let y=x;

 x=2;
  console.log(x);//2
  console.log(y);//1

  let firstper = 'mark';
  let secondper= firstper;
   
  firstper= 'Austin';
  console.log(firstper);//Austin
  console.log(secondper);//mark


  // conplex values 

  const animals = ['dogs','cat'];
  const otheranimals = animals;
  animals.push('llams');

  console.log(animals);// dog cat llams
  console.log(otheranimals);//dog cat

  const person ={
     firstperson:'Aayush',
    lastname:'sahu',
  }; 
// person and other person point to the same location in the memory

  const otherperson=person;
person.firstperson='johny';
console.log(person);
console.log(otherperson); //same results

const person1 = {name:'john'};
const person2={name:'john'};

const person3 = person1;
console.log(person1===person2);//fasle not point the same memory;

console.log(person1===person3);// true both point the same address


//create a clone of object
//1st way: Spread operaator;

const numbers=[1,2,3,4,5,6];

console.log(...numbers);

const newnumber =[ ...numbers ];//shallow clone 

const copiednumber=numbers;

numbers.push(12);

console.log(numbers===copiednumber);// points the same array 
console.log(newnumber===copiednumber);// point diifferent address

console.log(numbers);
console.log(copiednumber);// point numbers 
console.log(newnumber);//point another memory location 


//2nd way :Array slice ()

const number2 = numbers.slice();
console.log(number2);


// ----------object cloning---------------
const person14 = {name:'Aayush',age:20};
const otherperson1 = { ...person14};// copy of person 

person14.age=22;
console.log(person14);
console.log(otherperson1);