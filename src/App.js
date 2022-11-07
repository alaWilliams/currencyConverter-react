import Header from './components/Header'
import Button from './components/Button';
import { useState, useEffect } from 'react';
import ForeignCurrency from './components/ForeignCurrency'
import DomesticCurrency from './components/DomesticCurrency'
import fetchCurrencies from './services/fetchCurrencies';
import countPln from './utils/countPln'

function App() {
  const [inputValue, setInputValue] = useState(0)
  const [selectValue, setSelectValue] = useState('USD')
  const [rate, setRate] = useState('')

  useEffect(() => {
    fetchCurrencies()
      .then(data => {
        const mid = data[0].rates.find(element => element.code === selectValue).mid;
        const converted = countPln(mid, inputValue);
        setRate(mid);
        console.log(converted);
        console.log(data)
        return converted
      })
  }, [selectValue]
  );

  return (
    <>
      <Header />
      <div className="container">
        <div className="grid-container">
          <ForeignCurrency setInputValue={setInputValue}  setSelectValue={setSelectValue}/>
          <DomesticCurrency setRate={setRate}/>
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;
