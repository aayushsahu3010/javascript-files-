// hoisting in js -- always declare variable in upper of  a block 


//  var age = 100;
// console.log(age);
// var age = 100;

// var hoist ;
//  console.log(hoist);
//  hoist = "aayush the variable has been hosted ";
//  console.log(hoist );

hoist()// try calling FUNCTION  is already hoisting 

 function hoist (){
     let message = "hello buddy ";
      console.log(message);

 } 

 hoist ();

 const age = 100; // const varriable intialize firstly
  console.log(age);

   console.log(a);
   let a =100; // it gives error because let declare firstly

console.log(q);//it gives undefined 
  var q= 12;

