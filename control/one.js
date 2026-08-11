if(2=="2"){
    console.log("exectued");
    
}
//=== me vo type bhi check karta ek number hai ek string hai
if(2==="2"){
    console.log("exectued");
    
}
//falsy values
// "",0,-0,false,null,undefined,NAN
//truth values
//"0","false"," ",[],function(){},{}

//nullish coalesing operator(??):null undefined
let val1=10??5
console.log(val1);
let val2=null??5
console.log(val2);
let val3=undefined??5
console.log(val3);
//ternory operator
// condition ? true : false
let ice=5
ice>2?console.log("yes"):console.log("no");


