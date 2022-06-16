function factorial(n) {
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

factorial(0);
factorial(1);
factorial(3);
factorial(5);
