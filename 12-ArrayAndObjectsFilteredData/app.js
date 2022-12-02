let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

function object1(array) {
  let newarray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].name[0] == "t") {
      newarray.push(array[i].name);
    }
  }
  console.log("1- ", newarray);
}
object1(arr);

function object2(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].name[0] == "t" &&
      array[i].name[array[i].name.length - 1] == "t"
    ) {
      count++;
    }
  }
  console.log("2- ", count);
}
object2(arr);

function object3(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].name[0] == "t" &&
      array[i].name[array[i].name.length - 1] == "t"
    ) {
      count += array[i].key;
    }
  }
  console.log("3- ", count);
}
object3(arr);



function object7(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].name.length == 4) {
      newArray.push(array[i].name);
    }
  }
  console.log("7- ", newArray);
}
object7(arr);

function object9(array) {
    for (let i = 0; i < array.length; i++) {
        for(let j=0; j<array[j].length; j++){
            if (array[i].name.includes("l")) {
                console.log("9- ", array[i].name.length);
              }
            }
        }
      
  }
  object9(arr);



function object11(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].key > 10 && array[i].name[0] == "l") {
      console.log("11- ", array[i].name, "-", array[i].key);
    }
  }
}
object11(arr);
