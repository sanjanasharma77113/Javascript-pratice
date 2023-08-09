 let arr= [1,2,3,4]

arr.forEach(function(sanjana,index,arr){
    console.log(index,sanjana,arr);
})

arr.forEach((sanjana,index,arr) =>{
    console.log("arrow",index,sanjana,arr);


})

const heros =["naagraj", "doga", "sana","mann"]

heros.forEach((el) => {console.log(el.toUpperCase())})



arr.map(function(sanjana,index,arr){
    console.log(sanjana,index,arr);

})

heros.map((h) => console.log(h.toUpperCase()))

//filter
console.log(heros);
const herosWithRaj = heros.filter((h) =>  {
     return h.endsWith ('raj')
})
console.log(herosWithRaj);


// SHOPPING CART

const cartBill = [20,40,60]
const sumOfCartBill = cartBill.reduce((prev,curr) => prev+curr,0)
 console.log(sumOfCartBill); 