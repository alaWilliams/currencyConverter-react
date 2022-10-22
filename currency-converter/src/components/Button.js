

const Button = () => {
  const url = 'https://api.nbp.pl/api/exchangerates/tables/a/'
  const getCurrencies = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => convertValue(data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="button-wrapper">
      <button onClick = {getCurrencies} className="btn" id="btn">Convert</button>
    </div>
  )
}

export default Button;