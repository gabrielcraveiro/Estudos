let name = 'gabriel';

let add = (a,b) => a + b;


let sum = (...numbers) => {
  return numbers.reduce((prev, cur) => {
    return prev + cur;
  });
}