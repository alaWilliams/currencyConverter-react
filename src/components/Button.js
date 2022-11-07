const Button = () => {

  const calculate = () => {
    console.log(2)
  }
  return (
    <div className="button-wrapper">
      <button onClick={calculate} className="btn" id="btn">Convert</button>
    </div>
  )
}

export default Button;