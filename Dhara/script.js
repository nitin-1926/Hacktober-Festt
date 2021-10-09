const txt = document.querySelector('.quote');
const auth = document.querySelector('.author');
const next = document.querySelector('.next');
const load = document.querySelector('.loader');

const getQuote = async () => {
    load.classList.remove('hide');
    const res = await fetch(`https://type.fit/api/quotes`);
    const quotes = await res.json();
    load.classList.add('hide');
    const num = Math.floor(Math.random()*quotes.length);
    const item = quotes[num];
    const quote = item.text;
    const author = item.author;
    txt.innerText = quote;
    auth.innerText = author;
}

next.addEventListener('click', getQuote);
getQuote();