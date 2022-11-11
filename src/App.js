import Header from './components/Header';
import Button from './components/Button';
import { useState, useEffect } from 'react';
import ForeignCurrency from './components/ForeignCurrency';
import DomesticCurrency from './components/DomesticCurrency';
import fetchCurrencies from './services/fetchCurrencies';

function App() {
	const [inputValue, setInputValue] = useState(0);
	const [selectValue, setSelectValue] = useState('USD');
	const [rate, setRate] = useState('');
	const [result, setResult] = useState(0);
	useEffect(() => {
		fetchCurrencies().then((data) => {
			const mid = data[0].rates.find(element => element.code === selectValue).mid;
			setRate(mid);
		});
	}, [selectValue]);

	const calculate = () => {
		setResult((rate * inputValue).toFixed(2));
	};

	return (
		<>
			<Header />
			<div className="container">
					<ForeignCurrency
						setInputValue={setInputValue}
						setSelectValue={setSelectValue}
					/>
					<DomesticCurrency result={result} />
				</div>
        <Button onClick={calculate} />
		</>
	);
}

export default App;
