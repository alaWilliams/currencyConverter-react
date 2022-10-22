const ForeignCurrency = () => {
  return (
  <>
    <section className="foreign-section">
      <div className="wrapper">
        <form className="form">
          <div className="input">
            <input type="number" className="input-value" placeholder="Enter amount" />
          </div>
          <select className="currency currencies" id="currency">
            <option value="">--Currency List--</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CHF">CHF</option>
          </select>
        </form>
      </div>
      
    </section>
  </>
  )
}

export default ForeignCurrency