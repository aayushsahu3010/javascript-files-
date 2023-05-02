const single = "this iss ";
const bAACK = "this is a ball  ";
const singe = `this is a paragraph`;//dynamic   execute js code as well as evaluated


 const c = `${4+3}`;
 console.log(single);
 console.log(bAACK);
 console.log(singe);
console.log(c);

const sum =(a,b)=> a+b;
let b = (sum(3,5));
 
console.log(c===b);
let str = 'hello bachhao . I\'m msd how are you';

console.log(str);
const greeting = `hello bachhao . I'm msd how are you`;// it allows to another type marks 

console.log(greeting);


const p = 3;
 const i = `3`;
 console.log(p===i);// false 


 const name = ` aayush  buddy are you free ?`;
 console.log(name.length);//gives length
 console.log(name[2]);//random searching
 console.log(name[name.length-1]);

 //case cahnging

 let mix = `Hello How Are You ?`;
 mix.toLocaleLowerCase(); //method 
 mix.length;//property
 console.log(mix);// give same as mix 
 console.log(mix.toLocaleUpperCase()); 
 console.log(mix.length);
 
 
 /* searching for sub-string 
  Indexof() => it give values of first matching index 
   
 */

  let hobby = `i love coding specially html css and java script and c++`;

  console.log(hobby.indexOf('and'));
  console.log(hobby.indexOf('and',34));
  console.log(hobby.lastIndexOf('and'));
    console.log(hobby.indexOf('react'));

    // includes() 
    let string = hobby.includes('java');
    console.log(string);

    //  starswith()

     console.log(hobby.startsWith('i love'));

     //endsWith()
     console.log(hobby.endsWith('c++')); 


  // get for a substring 
  const example = "hello";
  //slice()
 let d= example.slice(2,5);
 console.log(d);


 //reverse a string 
 const string1 = "ayush"  ;
 const reverseString = string1.split("").reverse().join("");// split - split in to array reverse reverse the entire array join - it join the array ';
 console.log(reverseString); 

// repeat ()

const dogsays= "bark";
  console.log(dogsays.repeat(4));

  //trim()

  const exstring = "   Hello , World!    " ;
  console.log(exstring);
  console.log(exstring.trim());

  // exercise -revise methods
    const guestlist= `our guests are : aayu, komi, pradeep, subham`;

    let length = guestlist.length;
    console.log(length); 

    let uppercase= guestlist.toUpperCase();
    console.log(uppercase);

    let an = uppercase.includes('SUBHAM');
    console.log(an);

    let q = uppercase.indexOf('AAYU');
 let substring = uppercase.slice(q,uppercase.length);
 console.log(substring);

 let array = substring.split(",");
 console.log(array);
 console.log(array[0]);

 
