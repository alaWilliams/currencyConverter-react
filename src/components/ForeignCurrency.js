const ForeignCurrency = ({setInputValue, setSelectValue}) => {
  return (
  <>
    <section className="foreign-section">
      <div className="wrapper">
        <form className="form">
          <div className="input">
            <input onInput={(event) => setInputValue(event.target.value)} type="number" className="input-value" placeholder="Enter amount" />
          </div>
          <select onChange={(event) => setSelectValue(event.target.value)} className="currency currencies" id="currency">
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