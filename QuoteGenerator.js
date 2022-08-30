const API_ADVICE_URL = "https://api.adviceslip.com/advice?t=";

async function getQuote(){
    let quoteObject = await (await fetch(API_ADVICE_URL + Math.random())).json();
    document.getElementById("quote").innerHTML = quoteObject["slip"]["advice"];
    document.getElementById("quote-id").innerHTML = "Advice #" + quoteObject["slip"]["id"];
}