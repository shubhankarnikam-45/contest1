/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let brr = [
  { id: 5, name: "abc", age: "22", profession: "developer" },
  { id: 6, name: "pqr", age: "33", profession: "developer" },
  { id: 7, name: "mno", age: "44", profession: "admin" },
];
function PrintDeveloperswithMap() {
  console.log(arr[0]);
  console.log(arr[1]);
}

function PrintDeveloperbyForEach() {
  console.log(arr[0]);
  console.log(arr[1]);
}

function addData() {
  let employee ={id:4,
    name:"susan",
    age:"20",
    profession:"intern"
  }
  arr.push(employee);
  console.log(arr);
}

function removeAdmin() {
  arr.splice(2,1);
  console.log(arr);
}

function concatenateArray() {
  array1 = arr.concat(brr);
  console.log(array1);
}
