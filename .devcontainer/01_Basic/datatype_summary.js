// primitive datatype
// string ,boolean, number,undefinde,null,Symbol,BigInt

 const name ="jayant";
 const isWronf=false;
 let rollno= 234;
 const temp= null;
 const id = Symbol('133');
 const anotherId= Symbol('133');
 console.log(id==anotherId);
  let bignumber= 173773774774744638n;




// non-premitive(refernce) 
// array,object,function

const superHero =["batman","superman","spiderman"];

let myObj={
    name:"jayant",
    age:23,
    isMarried:false,
    hobbies:["cricket","coding","reading"]
};

function myFunction(){
    console.log("this is my function");
};

// ##########

// premtive(stack)& non-premptive (heap);
const name="batman";
changename= name;
console.log(changename);