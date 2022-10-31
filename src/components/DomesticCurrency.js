import convertValue from "../utils/convertValue"
import Currencies from './Currencies'

const DomesticCurrency = () => {
  return (
    <>
      <section className="domestic-section">
        <div className="wrapper">
          <Currencies />
          <div className="pln-name">PLN</div>
        </div>
      </section>
    </>
  )
}

export default DomesticCurrency