const url = 'https://api.nbp.pl/api/exchangerates/tables/a/';

const fetchCurrencies = () => {
  const data = fetch(url)
  .then(response => response.json())
  .catch(error => console.log(error));

  return data;
}

export default fetchCurrencies; 