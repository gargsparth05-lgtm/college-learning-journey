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
