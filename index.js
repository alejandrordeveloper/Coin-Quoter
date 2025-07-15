// Selectores
const form = document.querySelector("#coin-form");
const coin = document.querySelector("#coin");
const crypto = document.querySelector("#crypto");
const amount = document.querySelector("#amount");

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(coin.children);
    
})

