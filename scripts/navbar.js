// Login popup page
let login = document
  .getElementById("login")
  .addEventListener("click", function () {
    document.querySelector("#popup").style.display = "block";
  });

function crossfunc() {
  document.querySelector("#popup").style.display = "none";
}
function crossfunct() {
  document.querySelector("#final").style.display = "none";
}

// OTP section

function OTPInput() {
  const inputs = document.querySelectorAll("#otp > *[id]");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keydown", function (event) {
      if (event.key === "Backspace") {
        inputs[i].value = "";
        if (i !== 0) inputs[i - 1].focus();
      } else {
        if (i === inputs.length - 1 && inputs[i].value !== "") {
          return true;
        } else if (event.keyCode > 47 && event.keyCode < 58) {
          inputs[i].value = event.key;
          if (i !== inputs.length - 1) inputs[i + 1].focus();
          event.preventDefault();
        } else if (event.keyCode > 64 && event.keyCode < 91) {
          inputs[i].value = String.fromCharCode(event.keyCode);
          if (i !== inputs.length - 1) inputs[i + 1].focus();
          event.preventDefault();
        }
      }
    });
  }
}
OTPInput();

var val = Math.floor(1000 + Math.random() * 9000);
function reqOTP() {
  alert("Your OTP is " + val);
  localStorage.setItem("value", val);
}

function verifyOTP() {
  let value = localStorage.getItem("value");

  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;
  let third = document.getElementById("third").value;
  let fourth = document.getElementById("fourth").value;
  let flag;
  let otp = value.toString();
  console.log(first + " " + second + " " + third + " " + fourth);
  // console.log(typeof otp);
  // console.log(otp);
  for (let i = 0; i < otp.length; i++) {
    flag = false;
    if (i == 0) {
      if (otp[i] == first) {
        flag = true;
      } else {
        break;
      }
    } else if (i == 1) {
      if (otp[i] == second) {
        flag = true;
      } else {
        break;
      }
    } else if (i == 2) {
      if (otp[i] == third) {
        flag = true;
      } else {
        break;
      }
    } else if (i == 3) {
      if (otp[i] == fourth) {
        flag = true;
      } else {
        break;
      }
    }
  }
  if (flag == true) {
    alert("Signup Successful");
    document.querySelector("#popup").style.display = "none";
    document.querySelector("#final").style.display = "block";
  } else {
    alert("OTP invalid. Try again");
  }
}

function ok() {
  let name = document.getElementById("firstName").value;
  localStorage.setItem("user_name", JSON.stringify(name));
  document.querySelector("#final").style.display = "none";
  document.querySelector(".changerName").innerHTML = JSON.parse(
    localStorage.getItem("user_name")
  );
}

document.getElementById("logo").addEventListener("click", () => {
  window.location.href = "../html/index.html";
});

$(document).ready(function () {
  document.querySelector(".changerName").innerHTML = "Login/Register";
  let name = JSON.parse(localStorage.getItem("user_name")) || [];
  if (name == null || name == "") {
    document.querySelector(".changerName").innerHTML = "Login/Register";
  } else {
    document.querySelector(".changerName").innerHTML = name;
  }
});
