const obje ={
    name:{
        myname:{
            fullname:{
                first:"akash",
            }
        }
    }
}
console.log(obje.name.myname.fullname.first);
const obj1={1:"a",2:"b"}                    
const obj2={4:"c",3:"d"}
// const ob3=Object.assign(obj1,obj2) 
// console.log(ob3);
//latest
const ob3={ ...obj1, ...obj2} 
console.log(ob3)
console.log(Object.keys(ob3))
console.log(Object.values(ob3))
console.log(Object.entries(ob3))