function name(){
    console.log("a");
}
name()
//withour return
// function sum(number1, number2){
//     console.log(number1 + number2);
// }
// const result=sum(3,5)
// console.log(`result,${result}`);//hane return nahi kiya hai

//return 
function sum(number1, number2){
   return number1 + number2;
}
const result=sum(3,5)
console.log(`result,${result}`);

//
function login(username){
   return `${username}just login `;
}

console.log(login("akash"));

//with if
function login(username){
    if(username==undefined){
        console.log("plz inter")
        return//if we dont use return then agla wala bhi chalega 
    }
   return `${username}just login `;
}

console.log(login());
function cal(...num1){
    
   return num1;
}

console.log(cal(2,3,4));

//funstion with object
const user={
    name:"akash",
    price:38
}
function handel(anyobject){
    console.log(`my name is ${anyobject.name} and i buy a thing which is ${anyobject.price}`);
    
}
 //handel(user)
 handel({
    name:"akash",
    price:56
 })

 //function with array
 const myarray=[2,4,5]
 function second(value){
    return value[1]
 }
 //console.log(second(myarray));
 console.log(second([2,4,5]))
 