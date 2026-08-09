const mysym= Symbol("key")
const jsuser={
    name:"akash",
    age:36,
    [mysym]:"aksh",
    email:"akahshsukla"
}
// console.log(jsuser.email)
// console.log(jsuser["email"])
// //isko normal se bhi le sakte tab vo ek string ki tarrah kaam karta isliye 

// console.log(jsuser[mysym])
// jsuser.email="shuklaakash"
// Object.freeze(jsuser)
// jsuser.email="shuklaakash48937"
// console.log(jsuser)
jsuser.fuc = function(){
    console.log("akash");
    
}
jsuser.fuc2 = function(){
    console.log(`my name is,${this.name}`);
    
}
console.log(jsuser.fuc2());




