let search = document.querySelector("#search");
let addbtn = document.querySelector("#addbtn");
let boxbottom = document.querySelector("#boxbottom");
let deletebtn = document.querySelector("#deletebtn");

addbtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(boxbottom);
  if (search.value == " ") {
    alert("write something");
  } else {
    let divTask = document.createElement("div");
    divTask.className =
      "taskDiv mt-2 p-2 d-flex justify-content-between align-items-center bg-light";

    let custumA = document.createElement("p");
    custumA.className = "custumA mb-0";
    custumA.innerText = search.value;
    search.value = "";

    let divBtn = document.createElement("div");
    divBtn.className = "div";

    let btnEdit = document.createElement("button");
    btnEdit.className = "btnadd btnadd-warning me-2";
    btnEdit.innerText = "Edit";
    divBtn.appendChild(btnEdit);

    let btnDelete = document.createElement("button");
    btnDelete.className = "btndelete btn-danger";
    btnDelete.innerText = "Delete";
    divBtn.appendChild(btnDelete);

    divTask.appendChild(custumA);
    divTask.appendChild(divBtn);
    boxbottom.appendChild(divTask);
  }
});

deletebtn.addEventListener("click", function () {
  setTimeout(() => {
    boxbottom.innerHTML = " ";
  }, 2000);

  setTimeout(() => {
    console.log("abc");
    boxbottom.innerText = "";
  }, 1000);
});
