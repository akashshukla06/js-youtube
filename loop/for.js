const arr =[1,2,3,4]
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);}
for (const num of arr) {
    console.log(num);}
const map=new Map()
map.set('in',"akash")
map.set('eng',"john")
console.log(map)
for (const [key,value] of map) {
    console.log(key,'->',value);}

const obje={
    name:"akash",
    age:34
}//for loop not work
// for (const [key,value] of obje) {
//     console.log(key,'->',value);}
for (const key in obje) {
    console.log(key);
    
    
    
}
