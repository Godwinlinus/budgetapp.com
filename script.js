const formEl = document.querySelector('.form');
const inputDescriptionEl = document.querySelector('.input--description');
const inputAmountEl = document.querySelector('.input--amount');
const numberExpensesEl = document.querySelector('.number--expenses')
const numberIncomeEl = document.querySelector('.number--income');
const balanceNumberEl = document.querySelector('.balance--number')


const transactionEl = document.querySelector('.transactions');

transactionEl.addEventListener('click', function() {
    
})
formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    const description = inputDescriptionEl.value;
    const amount = inputAmountEl.value;

    const income = numberIncomeEl.textContent;
    const expenses = numberExpensesEl.textContent;

    const balance = income - expenses;

    balanceNumberEl.textContent = balance;

    console.log(amount, description);
});


