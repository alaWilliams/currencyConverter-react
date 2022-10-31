import GetCurrencies from '../services/GetCurrencies'

const Button = () => {
  return (
    <div className="button-wrapper">
      <button onClick = {GetCurrencies} className="btn" id="btn">Convert</button>
    </div>
  )
}

export default Button;