const adder = (a,b) =>{
    return{
        a,
        b
    }
}

// console.log(adder(23,43));
// const numbers = adder(2,4);
// console.log(numbers.a);


const newNumber = () => {
    let numbers = adder(4,5);
    console.log(numbers.a); 
}
newNumber();