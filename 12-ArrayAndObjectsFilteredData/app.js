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
/*1-ci*/
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



/*2-ci*/
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

/*3-cu*/
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


/*5-ci*/
function object5(array) {
  let max =0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].name.length>max) {
      max= array[i].name.length;
    }
  }
  for (let j = 0; j < array.length; j++) {
    if (array[j].name.length==max) {
      console.log("5- ", array[j].key);
    }
  }
}
object5(arr);



/*6-ci*/
function object6(array) {
  let max =0;
  let hasil=0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].name.length>max) {
      max= array[i].name.length;
    }
  }
  for (let j = 0; j < array.length; j++) {
    if (array[j].name.length==max) {
      hasil=(array[j].name.length*array[j].name.length);
      console.log("6- ",hasil);
    }
  }
}
object6(arr);



/*7-ci*/
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




// function object9(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[j].length; j++) {
//       if (array[i].name.includes("l")) {
//         console.log("9- ", array[i].name.length);
//       }
//     }
//   }
// }
// object9(arr);

// function object10(array) {
//   count = 0;
//   array.name.split("");
//   for (let i = 0; i < name.length; i++) {
//     if (array.name[i].includes("t")) {
//       count++;
//     } else if (count > 1) {
//       console.log("10- ", array[i].key);
//     }
//   }
// }
// object10(arr);




/*11-ci*/
function object11(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].key > 10 && array[i].name[0] == "l") {
      console.log("11- ", array[i].name, "-", array[i].key);
    }
  }
}
object11(arr);
