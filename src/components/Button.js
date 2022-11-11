const Button = ({ onClick }) => {
	return (
		<div className="button-wrapper">
			<button onClick={onClick} className="btn" id="btn">
				Convert
			</button>
		</div>
	);
};

export default Button;
