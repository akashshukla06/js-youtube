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
