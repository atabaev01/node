
//Find
// const persons = [
//     {
//         name: "asan",
//         age: 21
//     },
//     {
//         name: 'uson',
//         age: 19
//     },
//     {
//         name: 'askat',
//         age: 34

//     },
//     {
//         name: 'uson',
//         age: 17
//     },
// ]

// const filterF = (item) =>{
//     if (item.name==='uson' && item.age === 17){
//         return true
//     }else{
//         return false
//     }
// }


// const index = persons.findIndex(filterF)
// console.log(index);




//Filter
// const users = [
//     {username:"asan",age:17},
//     {username:"hasan",age:18},
//     {username:"lasan",age:13},
//     {username:"masan",age:17},
//     {username:"tusan",age:18},
//     {username:"awsan",age:17},
//     {username:"hasdan",age:18},
//     {username:"lawsan",age:17},
//     {username:"madsan",age:17},
//     {username:"tusfan",age:18},
//     {username:"asqan",age:17},
//     {username:"hadsan",age:18},
//     {username:"lafsan",age:13},
//     {username:"maqsan",age:17},
//     {username:"tufsan",age:18},
// ]

// const user = users.filter((item)=> item.age === 17)
// console.log(user);



//Reduce
// const number = [1,2,3,4,5,6,7,8,9]
// console.log(number.reduce((ans, item)=> {
//     return ans+item
// },0))



//practice
const cars = [
    {marks:'bmw', year:2001},
    {marka:'tayota', year:2003},
    {marka:'tayota', year:2003},
    {marka:'tayota', year:2003},
    {marka:'tayota', year:2003},
]

const car = cars.find((item)=> item.marka === 'tayota')
const 
console.log(car.year);

