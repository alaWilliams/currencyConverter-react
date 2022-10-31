import '../reset.css';
import '../index.css'

import ForeignCurrency from "./ForeignCurrency";
import DomesticCurrency from "./DomesticCurrency"
import Button from "./Button"
import { useState } from "react"

const Body = () => {
  const [inputValue, setInputValue] = useState()
  const [selectValue, setSelectValue] = useState()
  const [data, setData] = useState()
  return (
    <>
      <div className="container">
        <div className="grid-container">
          <ForeignCurrency setInputValue={setInputValue}  setSelectValue={setSelectValue}/>
          <DomesticCurrency setData={setData}/>
          <Button />
        </div>
      </div>
    </>
  )
}

export default Body;