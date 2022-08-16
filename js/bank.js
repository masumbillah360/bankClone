const dipositAmount = document.getElementById('d-amount');
const widthdrawAmount = document.getElementById('w-amount');
const dipositAmountContainer = document.getElementById('dAmount');
const widthdrawAmountContainer = document.getElementById('wAmount');
const mainBalance = document.getElementById("mainBalance");


document.getElementById('d-btn').addEventListener('click',()=>{
    const totalAmount = dipositHelper(dipositAmountContainer.innerText, dipositAmount.value);
    if (isNaN(totalAmount)) {
        alert("Invalied Amount");
    }
    else{
        dipositAmountContainer.innerText= totalAmount; 
        dipositAmount.value = '';
    }

});
document.getElementById('w-btn').addEventListener('click',()=>{
    const totalAmount = dipositHelper(widthdrawAmountContainer.innerText, widthdrawAmount.value);
    if (isNaN(totalAmount)) {
        alert("invalied");
    }
    else{
        widthdrawAmountContainer.innerText= totalAmount; 
        widthdrawAmount.value = '';
    }
});

    
const dipositHelper = (inputValue, innerText) =>{
    inputValue = parseFloat(inputValue);
    innerText = parseFloat(innerText);
    return inputValue + innerText;
    
};