const sum = (a, b) => {
  return a + b;
};

const call = (a, b, callback) => {
  return callback(a, b);
};

console.log(call(2, 2, sum));
