document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('input-pin-number').value; 
    console.log(addMoney, pinNumber); 
    if( pinNumber === '1234'){
        console.log('Add Money Successfully.');
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Invalid Pin Number. Please try again later.')
    }
})
