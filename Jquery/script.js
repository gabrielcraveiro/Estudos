function divisors(integer) {
  let i = 2;
  let array = [];
  while (i < integer) {
    if (integer % i == 0 && i) {
      array.push(i);
    }
    i++
  }
  if (array.length === 0) {
    return `${integer} is prime`
  } else {
    return array;
  }
};