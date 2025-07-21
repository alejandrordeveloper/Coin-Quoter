// Selectores
const form = document.querySelector("#coin-form");
const coin = document.querySelector("#coin");
const crypto = document.querySelector("#crypto");
const amount = document.querySelector("#amount");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const coinSelected = [...coin.children].find(
    (Option) => Option.selected
  ).value;
  const cryptoSelected = [...crypto.children].find(
    (Option) => Option.selected
  ).value;
  const amountValue = amount.value;
  // el fetch devulve una respuesta
  try {
    const response = await (
      await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelected}&tsyms=${coinSelected}`
      )
    ).json();
    console.log(response.DISPLAY[cryptoSelected][coinSelected]);
  } catch (error) {
    console.log(error);
  }
});
