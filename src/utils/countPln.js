const countPln = (firstCurrency, secondCurrency) => {
  const count = firstCurrency * secondCurrency;
  return count.toFixed(2) * 1;
}

export default countPln