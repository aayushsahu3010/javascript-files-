

function hello(name){
     console.log(`Hello ,${name} !`);

}

function say(time){
    console.log(`good ${time}`);
}

const a = hello ('aayush');
console.log(a);


const b = say ('morrning');
console.log(b);


const sayhi = (firstname ) =>{
     console.log(`Hi , ${firstname}`);
}

sayhi('aayush');
 

const details =(name , age ) =>{
     console.log(`${name} is ${age}  years old  `);
}

details('Aayush',21);
details("suham");


//defalut paramenter in function  
const val = (name=`jane`,age=0)=>{
    console.log(`${name} is ${age}  years old  `);
}

val();
