let form = document.querySelector(".form-submit");
let allInputs = document.querySelectorAll(".input");
let searchBtn = document.querySelector(".search-btn");

let allUserData = [];

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  allInputs.forEach((element) => {
    element.value === "" && alert("plase, fill all fields!");
  });

  let newUserObj = {
    checkIn: "",
   checkOut: "",
    adults: "",
    kids: "",
    
  };

  newUserObj.checkIn = allInputs[0].value;
  newUserObj.checkOut = allInputs[1].value;
  newUserObj.adults = allInputs[2].value;
  newUserObj.kids = allInputs[3].value;
  allUserData.push(newUserObj);
  
  localStorage.setItem("Rezervation", JSON.stringify(allUserData));
  
});


