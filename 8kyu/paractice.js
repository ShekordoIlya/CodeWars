//Task 1
function solution(str) {
  const arr = str.split("");

  return arr.reverse().join("");
}
//-----------------------------------

//Task 2
function getSum(a, b) {
  let sum = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    return sum;
  }
  if (a > b) {
    for (let j = a; j >= b; j--) {
      sum += j;
    }
    return sum;
  }
  if (a == b) {
    return a;
  }
}
//-----------------------------------

//Task 3
