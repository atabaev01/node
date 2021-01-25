const persons = [
    {
        name: "asan",
        age: 21
    },
    {
        name: 'uson',
        age: 19
    },
    {
        name: 'askat',
        age: 34

    },
    {
        name: 'uson',
        age: 17
    },
]

const filterF = (item) =>{
    if (item.name==='uson' && item.age === 17){
        return true
    }else{
        return false
    }
}


const index = persons.findIndex(filterF)
console.log(index);