/*
const months =['january','febuary','march','april'];

 console.log(months);
 console.log(months[0]);
 months[2]="october";
 months[4]="may";
 console.log(months.length);
 console.log(months[2]);
 console.log(typeof months);


 for (let i = 0; i < months.length; i++) {
     const element = months[i];
    console.log(element);
    
 }

// Push() addd element at end of array 
// pop() remove element at end of the array 

const name = ['john','aayua','yuy','hell'];

// console.log(name.push('hello'));// it gives length of the array not a new array 

// console.log(name);

// let a = name.pop()
// console.log("the deleted name obj  is ",a);
// console.log(name);

// // shift()it  work same as pop method by in front of array 
// name.shift()
// console.log(name);

// // unshift()it  work same as push method by in front of array 
// name.unshift('hello');
// console.log(name); 


// // Array splice: allows to splice in the new array 
// name.splice(2,1,'subhi','pradeep');
// console.log(name);
// name.splice(1,2);
// console.log(name);

console.log(name) ;
// slice ()
const noonelike =name.slice(1,3);//parts of array
console.log(noonelike) ;


// ARRAY FOR EACH 
const names = ['jon','hello','jenny'];
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(i,element);
}


const  lognames=(value,i)=>{
 console.log(value,i);
}
const val = names.forEach(lognames);// it gives undefined
console.log(val);

//  foreach
// names.forEach((value,index)=>{
//     console.log(index,value);
// })


// use when - you want  to do something with each element of the array

// dont use when - you want stop or break the loop when some condition is true , we use working with async code 

let sum = 0;
const numbers = [12, 43, 4, 5];
numbers.forEach((number) => {
    sum += number;
})

console.log(sum);



// array map 
//  map allocates memory ,it return a new array
//  for each does not allocate memory 

const inventory = [
    { price: 11, name: 'egg' },
    { price: 5, name: 'jam ' },
    { price: 1, name: 'butter' },
    { price: 2, name: 'milk' },
    { price: 9, name: 'bread' }
];

const prices = inventory.map((item) => item.price);
const items = inventory.map((item) => item.name);

console.log(prices);
console.log(items);

const nums = [-1, -3, -4, 0, 10, 3, 2];
nums.filter((number) => {
    return number >= 0;
})
console.log(nums);// no change in previous array;
const positives = nums.filter((number) => {
    return number >= 0;
})

const negatives = nums.filter((number) => {
    return number < 0;
})

console.log(positives);
console.log(negatives);

const employeedata = [
    { name: 'aayush', overtime: 1 },
    { name: 'piyush', overtime: 9 },
    { name: 'pradeep', overtime: 7 },
    { name: 'subham', overtime: 10 },
];

const employee = employeedata.filter((employee)=>employee.overtime>=7);

console.log(employee);

  const names = employee.map((employee)=> employee.name);

  console.log(names);

  names.forEach(name => {
      console.log(`${name} recived a award`);
  });


  // find method
//  it returns the first elelement in matches condition 

const numbers = [1,2,3,4,5,6,7,8,9,0];

const val = (numbers.find((number)=> number>5));

 console.log(val);

 const states=['alaska','callifornia','goa','delhi','jharkhand'];

 const value = states.find((state)=>state.startsWith('c'));

 console.log(value);

 //includes method - check the array a contain the value or not -- case sensetive

 const array1 = [1,2,3,4];
 console.log(array1.includes(7));

 const pets = ['dog','cat','cow'];
 console.log(pets.includes('cat'));

const bookshelfs=["Moby Dick",'Harry Potter','The Great Gatsby','Galvin']

console.log(bookshelfs.includes('harry potter'));// it give false because it case sensetive

if(bookshelfs.includes('Harry Potter')){
    console.log('We have book , here you go.');
}
else{
     console.log('cannot find the book  ,sorry!');
}

//sort 

const names =['Ane','Carl','Bob','Dena']
console.log(names);
names.sort();//change original array 
console.log(names);


const nums =[2,4,1,6,1,5,6,7,15,55,99]
console.log(nums); 
nums.sort();
console.log(nums);// lets see

//Ascending order
nums.sort((a,b)=>a-b);//change original array 
console.log(nums);

//Descending order sort
nums.sort((a,b)=> b-a)
 console.log(nums);//lets see



 //Array some and every method

 const array = [1,2,3,34,5,4];
 console.log(array.some((el)=> el>3));// if at least one element is greater than 3 than it give true

 console.log(array.every((el)=> el>6));//if all element is greater than 3 than it give true
 
*/

// Reduce method 

const grocerylist= [24,65,78,100,123,110];
// let total=0;
// grocerylist.forEach((el)=>{
//     total+=el;
// })
// console.log(total);

 const total = grocerylist.reduce((acc,val)=> acc+val,0);
 console.log(total);

 /*
 acc=0;
 acc+val // 24+0==24
 acc=24 
 acc+val//24+65==89
  acc+val //89+78==167
 and then so on finally value of accumalator is 500
 an its our ans ; 
 
 */
