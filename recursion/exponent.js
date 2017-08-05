function exponent(base, expo) {
  if (expo === 0) {
    return 1;
  } else {
    return base * exponent(base, expo - 1);
  }
};
