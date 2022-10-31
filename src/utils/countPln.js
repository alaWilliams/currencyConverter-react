const countPln = (foreignCurrency, domesticCurrency) => {
  const count = countPln(foreignCurrency * domesticCurrency);
  return count.toFixed(2) * 1;
}

export default countPln