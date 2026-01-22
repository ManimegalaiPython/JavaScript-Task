// Task 1
function showAlert() {
  alert("Button clicked!");
}

// Task 2
function showName() {
  nameResult.innerText = nameInput.value;
}

// Task 3
function changeBg() {
  document.body.style.background = "#cceeff";
}

// Task 4
function togglePara() {
  para.style.display = para.style.display === "none" ? "block" : "none";
}

// Task 5
let c = 0;
function inc() { count.innerText = ++c; }
function dec() { count.innerText = --c; }

// Task 6
date.innerText = new Date().toDateString();

// Task 8
function showImage() {
  image.style.display = "block";
}

// Task 9
function login() {
  loginMsg.innerText = (user.value && pass.value) ? "Login Success" : "Fields required";
}

// Task 10
function welcome() {
  welcomeMsg.innerText = "Welcome " + welcomeInput.value;
}

// Task 11
function showOption(val) {
  dropdownResult.innerText = val;
}

// Task 12
function checkStatus() {
  checkResult.innerText = check.checked ? "Checked" : "Not Checked";
}

// Task 13
function changeTextContent() {
  document.getElementById("textPara").innerText = "Text Changed!";
}


// Task 14
function addRow() {
  table.insertRow().insertCell(0).innerText = "New User";
}

// Task 15
setTimeout(function () {
  document.getElementById("hideText").style.display = "none";
}, 5000);


// Task 16
function countChar(e) {
  charCount.innerText = e.value.length;
}

// Task 17
function disableButton() {
  document.getElementById("disableBtn").disabled = true;
}

// Task 18
function resetForm() {
  resetInput.value = "";
}

// Task 19
function togglePwd() {
  pwd.type = pwd.type === "password" ? "text" : "password";
}

// Task 20
setInterval(() => {
  time.innerText = new Date().toLocaleTimeString();
}, 1000);



// Task 21: Image Gallery
const images = [
      "about2.png",
      "biscut1.png",
      "image1.webp",
    ];

    let currentIndex = 0;

    const galleryImage = document.getElementById("galleryImage");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    // Show first image
    galleryImage.src = images[currentIndex];

    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % images.length;
      galleryImage.src = images[currentIndex];
    });

    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      galleryImage.src = images[currentIndex];
    });


// Task 22: Font Size
let fontSize = 16;
function incFont() {
  fontSize += 2;
  document.getElementById("fontText").style.fontSize = fontSize + "px";
}
function decFont() {
  fontSize -= 2;
  document.getElementById("fontText").style.fontSize = fontSize + "px";
}

// Task 23: Input length validation
function checkLength() {
  const val = lenInput.value;
  lenMsg.innerText = val.length < 5 ? "Minimum 5 characters required" : "";
}

// Task 24: Search filter
function filterList(value) {
  const items = document.querySelectorAll("#searchList li");
  items.forEach(li => {
    li.style.display = li.innerText.toLowerCase().includes(value.toLowerCase())
      ? "block"
      : "none";
  });
}

// Task 25: Total items count
document.getElementById("itemCount").innerText =
  "Total items: " + document.querySelectorAll("#searchList li").length;

// Task 26: Calculator
function calc() {
  calcRes.innerText = Number(n1.value) + Number(n2.value);
}

// Task 27: Loading message
function showLoading() {
  loading.innerText = "Loading...";
  setTimeout(() => loading.innerText = "Done!", 2000);
}

// Task 28: Highlight list item
function highlight(el) {
  document.querySelectorAll("#hlList li").forEach(li => li.classList.remove("highlight"));
  el.classList.add("highlight");
}

// Task 29: Tab switcher
function openTab(num) {
  tabContent.innerText = num === 1 ? "This is Tab 1" : "This is Tab 2";
}

// Task 30: Modal
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}

// Task 31: Prevent empty submit
function validateForm() {
  formMsg.innerText = formInput.value === "" ? "Field cannot be empty" : "Submitted!";
}

// Task 32: Theme toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

 // TASK 33: Save input to localStorage
    function saveData() {
      const value = document.getElementById("storageInput").value;
      localStorage.setItem("savedValue", value);
      displayStoredValue();
    }

    // TASK 34: Retrieve value on page load
    function displayStoredValue() {
      const saved = localStorage.getItem("savedValue");
      if (saved) {
        document.getElementById("storedOutput").innerText =
          "Stored Value: " + saved;
      }
    }

    // Call on page load
    displayStoredValue();

    // TASK 35: To-Do List (Add only)
    function addTodo() {
      const todoText = document.getElementById("todoInput").value;
      if (todoText === "") return;

      const li = document.createElement("li");
      li.innerText = todoText;

      document.getElementById("todoList").appendChild(li);
      document.getElementById("todoInput").value = "";
    }

// Task 36: Remove item
function removeItem(btn) {
  btn.parentElement.remove();
}

// Task 37: Button click count
let clicks = 0;
function countClick() {
  clickCount.innerText = ++clicks;
}

// Task 38: Confirm before clear
function confirmClear() {
  if (confirm("Are you sure?")) {
    confirmMsg.innerText = "Data cleared";
  }
}

// Task 39: Radio message
function radioMsg(val) {
  radioResult.innerText = "Selected: " + val;
}

// Task 40: Progress indicator
let progressVal = 0;
function progress() {
  progressVal = 0;
  const interval = setInterval(() => {
    progressVal += 10;
    progressText.innerText = progressVal + "%";
    if (progressVal === 100) clearInterval(interval);
  }, 500);
}


// 41
function toggleSubmit() {
  submitBtn.disabled = !agree.checked;
}

// 42
function showSuccess(e) {
  e.preventDefault();
  successMsg.innerText = "Form submitted successfully!";
}

// 43
function changeImage(img) {
      img.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9ImJsdWUiLz48dGV4dCB4PSIxNTAiIHk9IjEwMCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlIDI8L3RleHQ+PC9zdmc+";
    }

    function resetImage(img) {
      img.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9ImdyZWVuIi8+PHRleHQgeD0iMTUwIiB5PSIxMDAiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZSAxPC90ZXh0Pjwvc3ZnPg==";
    }

// 44
function toggleSidebar() {
  sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
}

// 45
function updateWidth() {
  width.innerText = "Window width: " + window.innerWidth + "px";
}
updateWidth();
window.onresize = updateWidth;

// 46
function validateEmail() {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  emailMsg.innerText = pattern.test(email.value)
    ? ""
    : "Invalid email format";
}

// 47
window.onload = () => autoFocusInput.focus();

// 48
function showNotification() {
  notification.style.display = "block";
  setTimeout(() => notification.style.display = "none", 3000);
}

// 49
function setActive(el) {
  document.querySelectorAll("#menu li").forEach(li => li.classList.remove("active"));
  el.classList.add("active");
}

// 50
function miniSubmit() {
  miniOutput.innerText = miniInput.value;
}
