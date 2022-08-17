// const adder = (a,b) =>{
//     return{
//         a,
//         b
//     }
// }

// // console.log(adder(23,43));
// // const numbers = adder(2,4);
// // console.log(numbers.a);


// const newNumber = () => {
//     let numbers = adder(4,5);
//     console.log(numbers.a); 
// }
// newNumber();

const user ={   
        email : ['masum@gmail.com','jui@gmail.com'],
        password : ['masum','jui']
}
console.log(user.email);
if (user.email.includes('masum@gmail.com')) {
    console.log("first")
}
else{
    console.log("second")
}