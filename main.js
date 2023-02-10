// Exercise - 1 (What will be the result and explain why?) -3

// const x = 10;
// const y = "a"
// y === "b" || x >= 10


// ANS


/*const x= 10;
const y="a"
console.log(y==="b" || x>=10);*/
// result true cause logical OR operator returns a true value from any two values




// Exercise - 2 (What will be the result and explain why?)-3
// const x = 3;
// const y = 8;

// !(x == "3" || x === y) && !(y != 8 && x <= y)


// ANS- 

/*const x=3;
const y=8;
console.log(x=="3" || x === y);//result true
console.log(y != 8  && x<= y);//result flase

console.log(!(y != 8 && x <= y));//result-true
console.log(!(x == '3' || x === y));// result-flase
console.log (!(x == '3' || x === y) && !(y != 8 && x <= y)) *///result -false 
// result false cause Nagative and positive together are Negative 



// # Exercise - 3(Check the value ans show output whether it's truthy or falsy ).What are the truthy and falsy value in Javascript -3

// "Hello World" //true

// "" //false

// null //false

// 0 //false

// -1 //true

// NaN //false

//ANS=

/*console.log(Boolean("Hello World")===true);//true
console.log(!!"Hello world");//result true
console.log(!"Hello World");//false 

console.log(Boolean(""));//result false
console.log(!"");// result true

console.log(Boolean(null));//result false
console.log(!null);//result true

console.log(Boolean(0));//result false 
console.log(!0);//result true

console.log(Boolean(-1));//result true
console.log(!-1);//result false

console.log(Boolean(NaN));//result false
console.log(!NaN);//result true*/


// # Exercise - 4 (What will be the result and explain why?) Explain short circuit -4
// const str = "haha!"
// const msg = ""
// const isFunny = "false"

// !(( str || msg ) || isFunny)

//ANS=

const str="haha"
const msg="";
const isFunny= "false"
// console.log(str || msg);//short-circuit
console.log((str || msg) || isFunny);//short - circuit=cause Here,between the two vlues ,the first is returning firs thats why first value is short-circuit 
console.log(!(str || msg) || isFunny);//result false cause the result for EXCLAMATION MARK is reversed


// # Exercise-5: when to use == vs === ?
// ANS 
// Double Equal only checks the value 
// Triple equal value and type checks together 
// tHE main difference between the Double equal and strict equal operator in javascript is that the double equal operators does the type conversion of the operands before comparison And strict operator compares the values as well as the data types of the operands




// # Exercise-6: operands++ vs ++operands //2
// const a = 10
// a++
// ++a
// what are the differences between a++ and ++a

// when using a++ the value is returned first 
// when using ++a the value of a is increment first then returned 



// # Exercise-7: What will be the result? and explain why? //2

// 10 / 2 * 5 
// what to do if I want to get the result of 1 after calculation?

10/2*5
 console.log(10 / (2 * 5));//result-1  the operator type grouping of precedence must be used 




//  # Exercise-8: 
// Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console //2

// 2 == "2"
// 2 === 2
// 10 % 3
// 10 % 3 === 1
// true && false
// false || true
// true || false

2=="2"
console.log(2==2)//true
2===2
console.log(2===2);//true
10%3
console.log(10%3);//remainder 1
10 %3 ==1
console.log(10%3===1);//remainder 1 equal 1 result true
true && false
console.log(true&&false);//logical AND operator will never be false=result false

console.log(false||true);//ether must be true for the logical OR operator
