// 7 primitive data types in js
let a=2
let b="parth"
let c=true
let d=null
let e=undefined
let f=Symbol("i am a nice symbol")
let g=BigInt(234)+BigInt(3)
console.log(a,b,c,d,e,f,g)
console.log(typeof a)
// Non primitive data type-Objects in js
const item={
  parth:true,
  "garg":false,
  "garg1":67,
  "garg2":undefined,
  "garg3":null,
}
console.log(item["parth"])
// Operators in js
let a=10
let b=4
// Arithmetic operators
console.log("a+b=",a+b)
console.log("a-b=",a-b)
console.log("a*b=",a*b)
console.log("a/b=",a/b)
console.log("a**b=",a**b)
console.log("a%b=",a%b)
console.log("a++=",a++)
console.log("a--=",a--)
console.log("++a=",++a)
console.log("--a=",--a)
console.log("a=",a)
//Assignment operators
let c=1
c+=5
console.log("c= ",c)
c-=5
console.log("c=",c)
c*=5
console.log("c=",c)
c/=5
console.log("c=",c)
c**=5
console.log("c=",c)
c%=5
console.log("c=",c)
// comparison operators
let comp1=6
let comp2=6
console.log("com1==comp2",comp1==comp2)
console.log("comp1!=comp2",comp1!=comp2)
console.log("comp1===comp2",comp1===comp2)
console.log("comp1!==comp2",comp1!==comp2)
console.log("comp1>comp2",comp1>comp2)
// Conditional Statements in js
let a=19
if (a < 0) {
  console.log("This is an invalid age");
} else if (a < 6) {
  console.log("You are a kid");
} else {
  console.log("Sorry");
}
console.log((a<18)?"not drive":"drive")
// Switch cases
const c=10
const d=5
const exp="+"
switch(exp){
  case "+": console.log("addition: "+(c+d))
    break
  case "-": console.log("subtraction: "+(c-d))
    break
  default: console.log("invalid")
}
// for loop
let product=1
for(let i=1; i<=10; i++){
  product=product*i
}
console.log(product)
// for in loop
let obj={
  parth:90,
  shubh:85,
shivam:69,
kris:99,
}
for(let a in obj){
  console.log(a)
}
for(let a in obj){
  console.log(obj[a])
}
while loop
let n=10
let i=0
while(i<=n){
  console.log(i)
i++
}

// do while loop
let n=2
let i=0
do{
  console.log(i)
  i++
} while(i<=n)

// Functions
function avg(a,b){
  return (a+b)/2
}
console.log(avg(4,6))

// arrow function
const sum=(a,b)=>{
  return a+b
}
console.log("The sum of a and b is",sum(4,6))
