const url = 'https://api.nbp.pl/api/exchangerates/tables/a/';

const fetchCurrencies = () => {
  fetch(url)
  .then(response => response.json())
  .catch(error => console.log(error));
}

export { fetchCurrencies }; 