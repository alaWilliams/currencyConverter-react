const ForeignCurrency = ({ handleSetInputValue, handleSetSelectValue }) => {
	return (
		<section className="foreign-section">
			<div className="form-wrapper">
				<form className="form">
					<div className="input">
						<input
							onInput={handleSetInputValue}
							type="number"
							className="input-value"
							placeholder="Enter amount"
							step="0.01"
							min="0"
						/>
					</div>
					<select
						onChange={handleSetSelectValue}
						className="currency currencies"
						id="currency"
					>
						<option value="">--Currency List--</option>
						<option value="USD">USD</option>
						<option value="EUR">EUR</option>
						<option value="CHF">CHF</option>
					</select>
				</form>
			</div>
		</section>
	);
};

export default ForeignCurrency;
