//primitive copy me change
// string number bigint symbol boolean null undefined

//refrenece(nonprimitive ) original  me chnage
//array function object


let one="akash@"
let two =one
console.log(two)
two ="anuj@" //not change in orignal one
console.log(one)
console.log(two)
 let user1 = {
    email:"akash@",
    age:12
 }
 let user2=user1
 console.log(user2)
 user2.email="anuj@" //change in original user1 also
 console.log(user1)
 console.log(user2)