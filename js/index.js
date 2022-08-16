const logBtn = document.getElementById('logBtn');
const email = document.getElementById('email');
const password = document.getElementById('password');

logBtn.addEventListener('click',()=>{
    const userEmail = email.value;
    const userPassword = password.value;
    if (userEmail === 'masum@gmail.com' && userPassword === 'masum') {
        logBtn.removeAttribute('disabled',true); 
        window.location.href = './bank.html';
    }
    else{
        alert(`Your Password or Email is invalied \n Please try again.`);
    }

})