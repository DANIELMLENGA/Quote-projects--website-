const API_KEY = "https://dummyjson.com/quotes/random";

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const button = document.querySelector("#newQuote");


async function getQuotes() {
    button.disabled = true;
    quote.classList.add("fade");

    try{
        const response = await fetch(API_KEY);

      if(!response.ok) throw Error("failed to fetch quote");

      const data = await response.json();

      quote.textContent = `"${data.quote}"`;
      author.textContent = data.author || "unknown";

    } catch{
        console.error(error);

      quote.textContent = `"something went wrong"`;
      author.textContent = " try again ";
    } finally{
      quote.classList.remove("fade");
      button.disabled = false;
    }
}

button.addEventListener("click", getQuotes);

getQuotes();