// Selectores
const form = document.querySelector("#coin-form");
const coin = document.querySelector("#coin");
const crypto = document.querySelector("#crypto");
const amount = document.querySelector("#amount");

form.addEventListener('submit', e => {
    e.preventDefault();
    const coinSelected = [...coin.children].find(Option => Option.selected);
    
})

