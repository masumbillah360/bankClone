const dipositAmount = document.getElementById('d-amount');
const widthdrawAmount = document.getElementById('w-amount');
const dipositAmountContainer = document.getElementById('dAmount');
const widthdrawAmountContainer = document.getElementById('wAmount');
document.getElementById('d-btn').addEventListener('click',()=>{
    const amountString = dipositAmountContainer.innerText;
    const dAmount = parseFloat(amountString);
    const inputAmountString = dipositAmount.value;
    const inputAmount = parseFloat(inputAmountString);
    const totalAmount = dAmount + inputAmount;
    dipositAmountContainer.innerText= totalAmount; 
    dipositAmount.value = '';

});
document.getElementById('w-btn').addEventListener('click',()=>{
    const amountString = widthdrawAmountContainer.innerText;
    const wAmount = parseFloat(amountString);
    const inputAmountString = widthdrawAmount.value;
    const inputAmount = parseFloat(inputAmountString);
    const totalAmount = wAmount + inputAmount;
    widthdrawAmountContainer.innerText= totalAmount; 
    widthdrawAmount.value = '';
});