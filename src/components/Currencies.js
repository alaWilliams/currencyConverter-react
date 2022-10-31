import { useEffect } from "react"; 
import { fetchCurrencies } from '../services'

const Currencies = () => {
  useEffect(() => {
    fetchCurrencies
    .then(data => {
      console.log(data)
    });
  }, []);
  return <div></div>
};

export default Currencies;