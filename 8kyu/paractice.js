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
function getMiddle(s) {
  let symb = "";
  let count = 0;
  let mid = 0;
  let newArr = [];

  const arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    symb += arr[i];
    count++;
  }

  mid = count / 2;

  if (count % 2 == 0) {
    newArr = arr.splice(mid - 1, 2).join("");
  }

  if (count % 2 != 0) {
    newArr = arr.splice(Math.round(mid - 1), 1).join("");
  }

  return newArr;
}

//-----------------------------------
//Task 4
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
