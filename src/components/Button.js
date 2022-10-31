
import { fetchCurrencies } from '../services/fetchCurrencies'

const Button = () => {
  return (
    <div className="button-wrapper">
      <button onClick={fetchCurrencies} className="btn" id="btn">Convert</button>
    </div>
  )
}

export default Button;