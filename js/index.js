const logBtn = document.getElementById('logBtn');
const email = document.getElementById('email');
const password = document.getElementById('password');
const user ={   
    email : ['masum@gmail.com','jui@gmail.com','sanaullah@gmail.com'],
    password : ['masum','jui','sanaullah']
}
logBtn.addEventListener('click',()=>{
    const userEmail = email.value;
    const userPassword = password.value;
    // if (userEmail === 'masum@gmail.com' && userPassword === 'masum') {
    if (user.email.includes(userEmail) && user.password.includes(userPassword)) {
        logBtn.removeAttribute('disabled',true); 
        window.location.href = './bank.html';
    }
    else{
        alert(`Your Password or Email is invalied \n Please try again.`);
    }

})