function pole(a,r, Pi = Math.PI) {
  var b = (a/360)*r*r*Pi;
  return b;
}

console.log(pole(30, 5, 3.14));
console.log(pole(30, 5, 22/7));
console.log(pole(30, 5));
