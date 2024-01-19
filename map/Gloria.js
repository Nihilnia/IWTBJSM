function makEmUpper(item) {
  return item.toUpperCase();
}

let exArray = ["a", "b", "c"];

let allUp = exArray.map(makEmUpper);
console.log(allUp);

let allUpTwo = exArray.map(function (f) {
  return f.toUpperCase();
});

console.log(allUpTwo);
