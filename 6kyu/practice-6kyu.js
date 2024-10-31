// Rank-up
function narcissistic(value) {
  let strFromNumber = value.toString();

  let num = 0;
  let res = 0;

  const arr = strFromNumber.split("");
  let newArr = [];
  arr.forEach((element) => {
    num = Number(element) ** arr.length;
    newArr.push(num);
  });

  newArr
    .map((item) => {
      res += item;
    })
    .join("");

  if (value == res) {
    return true;
  } else {
    return false;
  }
}
console.log(narcissistic(153));
// --------------------------------------

// Task 1
function hasUniqueChars(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) return false;
    obj[str[i]] = 1;
  }
  return true;
}

console.log(hasUniqueChars("  nAa"));
