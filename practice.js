

const add =(p1,p2,p3)=>p1+p2+p3;

console.log(add(12,8,5))

console.log("=============================================")

const numbers=[12,67,98,45];

for(let i in numbers)
{
    console.log(i,numbers[i])
}

console.log("=============================================")

for(let i of numbers)
{
    console.log(i)
}

console.log("=============================================")

const squares = numbers.map((element,index,array)=>{
console.log(element,index,array)
return element*element
})

console.log(squares)


console.log("=============================================")

const number =[6,3,4]

const cube = number.map((element,index,array)=>{

    console.log(element,index,array)
    return element*element*element

})

console.log(cube)

// map provide new array and forEach not provide new array.
console.log("=============================================")

console.log(numbers.filter((n)=>n>20))

console.log(numbers.filter((n)=>n/7==0))

console.log(numbers.filter((n)=>n<50))

console.log(numbers.filter((n)=>n%2==1))

console.log(numbers.filter((n)=>n%2==0))

//filter can returns array so we can apply map on filter

console.log(numbers.filter(n=>n%2==0).map(n=>"Element"+ n));
