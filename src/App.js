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
	const handleSetSelectValue = (event) => {
		setSelectValue(event.target.value);
	};
	const handleSetInputValue = (event) => {
		setInputValue(Number(event.target.value));
	};
	useEffect(() => {
		fetchCurrencies().then((data) => {
			const mid = data[0].rates.find(
				(element) => element.code === selectValue
			)?.mid;
			setRate(mid);
		});
	}, [selectValue]);

	const calculate = () => {
		if (Number.isNaN(rate)) {
			alert('Error. Could not calculate rate.');
		}
		if (inputValue <= 0) {
			alert('Number must be higher than zero.');
		} else {
			setResult((rate * inputValue).toFixed(2));
		}
	};

	return (
		<>
			<Header />
			<div className="container">
				<ForeignCurrency
					handleSetInputValue={handleSetInputValue}
					handleSetSelectValue={handleSetSelectValue}
				/>
				<DomesticCurrency result={result} />
			</div>
			<Button onClick={calculate} />
		</>
	);
}

export default App;
