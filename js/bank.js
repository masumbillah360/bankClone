const dipositAmount = document.getElementById('d-amount');
const widthdrawAmount = document.getElementById('w-amount');
const dipositAmountContainer = document.getElementById('dAmount');
const widthdrawAmountContainer = document.getElementById('wAmount');
const mainBalanceContainer = document.getElementById('mainBalance');

document.getElementById('d-btn').addEventListener('click',()=>{
    const dipositInput = getValue('d-amount');
    const dipositPvalue = getText('dAmount');
    const mainBalance = getText('mainBalance');
    if (isNaN(dipositInput)) {
        alert("Invalied Amount");
    }
    else{
        dipositAmountContainer.innerText = dipositPvalue + dipositInput;
        mainBalanceContainer.innerText = mainBalance + dipositInput;
    }    
    // dipositAmount.value = '';
});

document.getElementById('w-btn').addEventListener('click',()=>{
    const withdrawInput = getValue('w-amount');
    const withdrawContainer = getText('wAmount');
    const mainBalance = getText('mainBalance');
    if (isNaN(withdrawInput)) {
        alert("invalied");
    }
    else{
        if (withdrawInput>mainBalance) {
            alert("baper bank a eto taka nai vai kom kore ne");
            return;
        }else{
            mainBalanceContainer.innerText = mainBalance - withdrawInput; 
        } 
        widthdrawAmountContainer.innerText = withdrawInput + withdrawContainer;
    }
    // widthdrawAmount.value = '';    
});

const getValue = (id) =>{
    const value = document.getElementById(id);
    const getvalue = value.value;
    const newValue = parseFloat(getvalue);
    value.value = '';
    return newValue;
}
const getText = (id) => {
    const value = document.getElementById(id);
    const gettext = value.innerText;
    const newText = parseFloat(gettext)
    value.value = '';
    return newText;
}