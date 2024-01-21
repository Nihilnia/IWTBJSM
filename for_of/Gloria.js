let exArray = ["a", "b", "c"];

for (let f of exArray) {
  console.log(f);
}

exArray.forEach((f) => {
  switch (f) {
    case "a":
      console.log("its a");
      break;
    case "b":
      console.log("its b");
      break;
    case "c":
      console.log("its c");
      break;
  }
});
