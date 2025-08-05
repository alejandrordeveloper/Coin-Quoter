// Selectores
const form = document.querySelector("#coin-form");
const coin = document.querySelector("#coin");
const crypto = document.querySelector("#crypto");
const amount = document.querySelector("#amount");
const coinInfo = document.querySelector("#coin-info");

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
    coinInfo.innerHTML = `<div class="loader"></div>`;
    const response = await (
      await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelected}&tsyms=${coinSelected}`
      )
    ).json();
    const price = (response.DISPLAY[cryptoSelected][coinSelected].PRICE);
    const highPrice = (response.DISPLAY[cryptoSelected][coinSelected].HIGH24HOUR);
    const lowPrice = (response.DISPLAY[cryptoSelected][coinSelected].LOW24HOUR);
    const variation = (response.DISPLAY[cryptoSelected][coinSelected].CHANGEPCT24HOUR);
    console.log(response.RAW[cryptoSelected][coinSelected].PRICE);
    

    if (amountValue !== "" ) {
      const result = Number(amountValue) / response.RAW[cryptoSelected][coinSelected].PRICE;
      coinInfo.innerHTML = `
            <p class="info">El precio es: <span class="price">${price}</span></p>
            <p class="info">El precio mas alto es: <span class="price">${highPrice}</span></p>
            <p class="info">El precio mas bajo es: <span class="price">${lowPrice}</span></p>
            <p class="info">Variacion 24H: <span class="price">${variation}</span></p>
            <p class="info">Puede Comprar: <span class="price">${result.toFixed(4)} ${cryptoSelected}</span></p>`;
      
    } else {
      coinInfo.innerHTML = `
            <p class="info">El precio es: <span class="price">${price}</span></p>
            <p class="info">El precio mas alto es: <span class="price">${highPrice}</span></p>
            <p class="info">El precio mas bajo es: <span class="price">${lowPrice}</span></p>
            <p class="info">Variacion 24H: <span class="price">${variation}</span></p>
           `;
    }
      
  } catch (error) {
    console.log(error);
  }
});
