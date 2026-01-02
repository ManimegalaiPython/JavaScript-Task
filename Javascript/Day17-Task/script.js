document.addEventListener("DOMContentLoaded", () => {

  // 1
  document.getElementById("welcome").innerText = "Welcome to the page!";

  // 4
  document.getElementById("year").innerText = new Date().getFullYear();

  // 16
  const d = new Date();
  document.getElementById("date16").innerText =
    `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
});

// 2
function changeColor() {
  document.getElementById("p2").style.color = "red";
}

// 3
function clearInput() {
  document.getElementById("input3").value = "";
}

// 5
function hidePara() {
  document.getElementById("para5").style.display = "none";
}

// 6
function increaseWidth() {
  document.getElementById("box6").style.width = "200px";
}

// 7
function countChars() {
  document.getElementById("count7").innerText =
    document.getElementById("text7").value.length;
}

// 8
function printForm() {
  console.log(
    document.getElementById("name8").value,
    document.getElementById("email8").value
  );
}

// 9
function changeBg(cb) {
  document.body.style.backgroundColor = cb.checked ? "#eee" : "white";
}

// 10
function alignText() {
  document.getElementById("para10").style.textAlign = "center";
}

// 12
function showLength() {
  alert(document.getElementById("input12").value.length);
}

// 13
function checkPassword() {
  const pwd = document.getElementById("pwd13").value;
  document.getElementById("msg13").innerText =
    pwd === "" ? "Password is empty" : "Password entered";
}

// 14
function enableInput() {
  document.getElementById("input14").disabled = false;
}

// 15
function changeFontSize() {
  document.querySelectorAll(".font15").forEach(el => {
    el.style.fontSize = "20px";
  });
}

// 17
function toggleBg() {
  const box = document.getElementById("box17");
  box.style.backgroundColor =
    box.style.backgroundColor === "red" ? "blue" : "red";
}

// 18
function showValue(val) {
  document.getElementById("para18").innerText = val;
}

// 20
function mouseLeave() {
  alert("Mouse left the div");
}

// 21
function beforeSubmit() {
  alert("Form will be submitted");
}

// 22
function underlineText() {
  document.getElementById("para22").style.textDecoration = "underline";
}

// 23
function countWords() {
  const text = document.getElementById("text23").value.trim();
  document.getElementById("words23").innerText =
    text === "" ? 0 : text.split(/\s+/).length;
}

// 24
function hideAllParas() {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.display = "none";
  });
}

// 25
function keyPressed() {
  document.getElementById("msg25").innerText =
    "You pressed a key!";
}


// 26
function checkLength() {
  m26.innerText = t26.value.length < 5 ? "Minimum 5 characters" : "Valid";
}

// 27
function resetInputs() {
  document.querySelectorAll("input").forEach(i => i.value = "");
}

// 28
function styleButtons() {
  document.querySelectorAll("button").forEach(b => {
    b.style.background = "black";
    b.style.color = "white";
  });
}

// 29
function showValue(val) {
  m29.innerText = val;
}

// 30
document.addEventListener("contextmenu", e => {
  e.preventDefault();
  alert("Right click disabled");
});

// 31
function saveAge() {
  localStorage.setItem("age", age31.value);
  m31.innerText = age31.value;
}
m31.innerText = localStorage.getItem("age");

// 32
function onlyLetters(el) {
  el.value = el.value.replace(/[^a-zA-Z]/g, "");
}

// 33
function toggleImg() {
  const img = document.getElementById("img33");
  if(img.src.includes("login.png")) {
    img.src = "logout.png";
  } else {
    img.src = "login.png";
  }
}


// 34
function activeMenu(el) {
  document.querySelectorAll(".menu a").forEach(a => a.classList.remove("active"));
  el.classList.add("active");
}

// 36
function sum() {
  m36.innerText = Number(n1.value) + Number(n2.value);
}

// 37
function changeFont() {
  // Change the entire page font family
  document.body.style.fontFamily = "Courier New, monospace";
  
  // Optional: alert to show font changed
  alert("Font family changed to Courier New!");
}

// 38
function checkEmail() {
  m38.innerText = email38.value === "" ? "Email required" : "OK";
}

// 39
function scrollTopPage() {
  window.scrollTo(0, 0);
}

// 40
setInterval(() => {
  clock.innerText = new Date().toLocaleTimeString();
}, 1000);

// 41
function validateForm() {
  if (f41.value === "") {
    alert("Field empty");
    return false;
  }
  return true;
}

// 42
function toggleTable() {
  tbl42.style.display = tbl42.style.display === "none" ? "table" : "none";
}

// 43
// Task 43: Display a message when the window is resized
window.onresize = function() {
  const msg = document.getElementById("m43");
  msg.innerText = "The window has been resized!";
};


// 45
function changeHeight() {
  box45.style.height = "80px";
}

// 46
// Task 46: Count all input fields on the page
function countInputs() {
  // Select all input elements
  const inputs = document.querySelectorAll("input");
  
  // Display the total count in the paragraph
  document.getElementById("m46").innerText = `Total input fields: ${inputs.length}`;
}

// 47
function textSelected() {
  m47.innerText = "Text selected";
}

// 49
function success() {
  m49.innerText = "Form validated successfully";
}

// 50
// Task 50: Change Favicon
let toggle = true;

function toggleFavicon() {
  const favicon = document.getElementById("favicon");
  
  if(toggle) {
    favicon.href = "https://via.placeholder.com/16/ff0000"; // red
  } else {
    favicon.href = "https://via.placeholder.com/16/0000ff"; // blue
  }
  
  toggle = !toggle; // switch for next click
}


