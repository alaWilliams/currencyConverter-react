import '../reset.css';
import '../index.css'

import ForeignCurrency from "./ForeignCurrency";
import DomesticCurrency from "./DomesticCurrency"
import Button from "./Button"

const Body = () => {
  return (
    <>
      <div className="container">
        <div className="grid-container">
          <ForeignCurrency />
          <DomesticCurrency />
          <Button />
        </div>
      </div>
    </>
  )
}

export default Body;