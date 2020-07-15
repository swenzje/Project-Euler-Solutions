function fiboEvenSum(n) {
  let a = 1;
  let b = 2;

  let result = b;

  while (n >= b) {
    let a_cached = a;
    a = b;
    b = a_cached + b;

    if (b % 2 === 0) {
      result += b;
    }
  }

  return result;
}

fiboEvenSum(10);