function makEmUpper(item) {
  return item.toUpperCase();
}

let exArray = ["a", "b", "c"];
console.log(exArray);

let allUp = exArray.map(makEmUpper);
console.log(allUp);

let allUpTwo = exArray.map(function (f) {
  return f.toUpperCase();
});

console.log(allUpTwo);

function getString(f) {
  if (typeof f === typeof "x") {
    return f;
  } else {
    return undefined;
  }
}

let exArrayTwo = ["a", "b", "c", "d", 1, 2, 3, 4, false];

exArrayTwo.forEach((f) => {
  console.log(getString(f));
});

let newArr = exArrayTwo.map(getString);
console.log(newArr);
