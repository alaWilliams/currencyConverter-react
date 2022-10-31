import countPln from './countPln'


const convertValue = (data) => {
  // const mid = data[0].rates.find(element => element.code === selectValue).mid;
  // const converted = countPln(mid, inputVal);
  const mid = data[0].rates.find(element => element.code).mid;
  const converted = countPln(mid, 2);
  return converted; 
}

export { convertValue };