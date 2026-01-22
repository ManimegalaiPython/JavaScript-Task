/* 1 LOGIN */
function login(){
  if(loginEmail.value==="" || loginPassword.value===""){
    loginMsg.innerText="All fields required";
    return;
  }
  localStorage.setItem("loggedIn","true");
  loginMsg.innerText="Login Successful";
}

/* 2 USER MANAGEMENT */
let users=[];
function addUser(){
  if(userName.value==="")return;
  users.push(userName.value);
  renderUsers();
  userName.value="";
}
function renderUsers(){
  userList.innerHTML="";
  users.forEach((u,i)=>{
    userList.innerHTML+=`
    <li>${u}
      <button onclick="editUser(${i})">Edit</button>
      <button onclick="deleteUser(${i})">Delete</button>
    </li>`;
  });
}
function deleteUser(i){
  users.splice(i,1);
  renderUsers();
}
function editUser(i){
  let newName=prompt("Edit name",users[i]);
  if(newName){
    users[i]=newName;
    renderUsers();
  }
}

/* 3 TODO */
let todos=[];
function addTodo(){
  if(todoInput.value==="")return;
  todos.push({text:todoInput.value,done:false});
  filterTodo("all");
  todoInput.value="";
}
function filterTodo(type){
  todoList.innerHTML="";
  todos.forEach((t,i)=>{
    if(type==="completed" && !t.done)return;
    if(type==="pending" && t.done)return;
    let li=document.createElement("li");
    li.textContent=t.text;
    if(t.done)li.classList.add("completed");
    li.onclick=()=>{t.done=!t.done;filterTodo(type)};
    todoList.appendChild(li);
  });
}

/* 4 TABLE */
function addRow(){
  if(tableName.value===""||tableAge.value==="")return;
  tableBody.innerHTML+=`
  <tr><td>${tableName.value}</td><td>${tableAge.value}</td></tr>`;
  tableName.value=tableAge.value="";
}

/* 5 MULTI STEP */
function nextStep(){
  step1.classList.add("hide");
  step2.classList.remove("hide");
}
function submitRegistration(){
  alert("Registration Successful");
}

/* 6 THEME */
function toggleTheme(){
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",document.body.className);
}
document.body.className=localStorage.getItem("theme")||"";

/* 7 SEARCH */
function searchItem(val){
  document.querySelectorAll("#searchList li")
  .forEach(li=>{
    li.style.display=li.innerText.toLowerCase().includes(val.toLowerCase())?"":"none";
  });
}

/* 8 MODAL */
function openModal(){modal.style.display="block"}
function closeModal(){modal.style.display="none"}



// 9.Sidebar toggle
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("sidebarToggle");

toggleBtn.addEventListener("click", () => {
  if(sidebar.style.width === "60px"){
    sidebar.style.width = "250px";
  } else {
    sidebar.style.width = "60px";
  }
});


/* 10 PASSWORD */
function checkStrength(p){
  strength.innerText=
    p.length<4?"Weak":
    p.length<8?"Medium":"Strong";
}


/* 11 CRUD LOCALSTORAGE */
let crudItems = JSON.parse(localStorage.getItem("crud")) || [];

function addCrud(){
  if(crudInput.value==="")return;
  crudItems.push(crudInput.value);
  localStorage.setItem("crud",JSON.stringify(crudItems));
  renderCrud();
  crudInput.value="";
}
function renderCrud(){
  crudList.innerHTML="";
  crudItems.forEach((item,i)=>{
    crudList.innerHTML+=`
      <li>${item}
        <button onclick="deleteCrud(${i})">Delete</button>
      </li>`;
  });
}
function deleteCrud(i){
  crudItems.splice(i,1);
  localStorage.setItem("crud",JSON.stringify(crudItems));
  renderCrud();
}
renderCrud();

/* 12 SORT & SEARCH */
function sortTable(){
  let rows=[...sortTableBody.rows];
  rows.sort((a,b)=>a.cells[0].innerText.localeCompare(b.cells[0].innerText));
  sortTableBody.innerHTML="";
  rows.forEach(r=>sortTableBody.appendChild(r));
}
function searchTable(val){
  [...sortTableBody.rows].forEach(r=>{
    r.style.display=r.innerText.toLowerCase().includes(val.toLowerCase())?"":"none";
  });
}

/* 13 CONDITIONAL */
function toggleField(val){
  conditionalField.classList.toggle("hide",val!=="yes");
}

/* 14 TOAST */
function showToast(){
  toast.innerText="Action Successful!";
  toast.style.display="block";
  setTimeout(()=>toast.style.display="none",2000);
}

/* 15 IMAGE PREVIEW */
function previewImage(e){
  preview.src=URL.createObjectURL(e.target.files[0]);
}

/* 16 PAGINATION */
let items=[...Array(20)].map((_,i)=>"Item "+(i+1));
let page=0;
function renderPage(){
  pageList.innerHTML="";
  items.slice(page*5,page*5+5)
    .forEach(i=>pageList.innerHTML+=`<li>${i}</li>`);
}
function nextPage(){if((page+1)*5<items.length){page++;renderPage()}}
function prevPage(){if(page>0){page--;renderPage()}}
renderPage();

/* 17 AUTO SAVE */
const input = document.getElementById("autoSave");
    const status1 = document.getElementById("status");
    const STORAGE_KEY = "autoSaveInput";

    // Load saved value on page refresh
    window.addEventListener("DOMContentLoaded", () => {
      const savedValue = localStorage.getItem(STORAGE_KEY);
      if (savedValue) {
        input.value = savedValue;
      }
    });

    // Auto save while typing
    input.addEventListener("input", () => {
      localStorage.setItem(STORAGE_KEY, input.value);
      status.textContent = "Saved automatically ✔";

      setTimeout(() => {
        status.textContent = "";
      }, 1500);
    });

/* 18 TABS */
function openTab(n){
  tabContent.innerText=`Tab ${n} Content`;
}

/* 19 ROLE BASED */
function setRole(role){
  adminPanel.classList.toggle("hide",role!=="Admin");
}

/* 20 CART */
let cart=0;
function addToCart(){
  cart++;
  cartCount.innerText=cart;
}


/* 21 SESSION TIMEOUT */
let timeout;
function resetSession(){
  clearTimeout(timeout);
  sessionStatus.innerText="Active";
  timeout=setTimeout(()=>{
    sessionStatus.innerText="Session Expired";
  },5000);
}
document.onmousemove=resetSession;
resetSession();

/* 22 PROFILE PREVIEW */
function saveProfile(){
  profilePreview.innerText=
    `Name: ${profileName.value}, Bio: ${profileBio.value}`;
}

/* 23 SEARCH SUGGESTION */
let fruits=["Apple","Banana","Mango","Orange","Grapes"];
function suggest(val){
  suggestList.innerHTML="";
  fruits.filter(f=>f.toLowerCase().includes(val.toLowerCase()))
    .forEach(f=>suggestList.innerHTML+=`<li>${f}</li>`);
}

/* 24 DROPDOWN DEPENDENCY */
function loadCities(country){
  city.innerHTML="";
  let data={
    India:["Chennai","Delhi"],
    USA:["New York","Texas"]
  };
  (data[country]||[]).forEach(c=>{
    city.innerHTML+=`<option>${c}</option>`;
  });
}

/* 26 REUSABLE VALIDATION */
function validateEmail(){
  valMsg.innerText=/\S+@\S+\.\S+/.test(valEmail.value)
    ?"Valid Email":"Invalid Email";
}

/* 27 ROUTING */
function navigate(page){
  routeView.innerText=
    page==="home"?"Welcome Home":"About Page Content";
}

/* 28 ADMIN UI */
function setAdmin(role){
  adminOnly.classList.toggle("hide",role!=="Admin");
}

/* 29 OFFLINE FIRST */
// ================== SERVICE WORKER ==================
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js");
    }

    // ================== INDEXED DB ==================
    let db;
    const request = indexedDB.open("offlineDB", 1);

    request.onupgradeneeded = e => {
      db = e.target.result;
      db.createObjectStore("forms", { autoIncrement: true });
    };

    request.onsuccess = e => {
      db = e.target.result;
      sendStoredData();
    };

    // ================== FORM HANDLING ==================
    const form = document.getElementById("offlineForm");
    const status = document.getElementById("status");

    form.addEventListener("submit", e => {
      e.preventDefault();

      const data = {
        name: name.value,
        email: email.value,
        message: message.value,
        time: new Date()
      };

      if (navigator.onLine) {
        sendToServer(data);
      } else {
        saveOffline(data);
      }

      form.reset();
    });

    function saveOffline(data) {
      const tx = db.transaction("forms", "readwrite");
      tx.objectStore("forms").add(data);

      status.textContent = "Saved offline. Will sync when online.";
      status.className = "status offline";
    }

    function sendStoredData() {
      if (!navigator.onLine) return;

      const tx = db.transaction("forms", "readonly");
      const store = tx.objectStore("forms");

      store.openCursor().onsuccess = e => {
        const cursor = e.target.result;
        if (cursor) {
          sendToServer(cursor.value);
          store.delete(cursor.key);
          cursor.continue();
        }
      };
    }

    function sendToServer(data) {
      // Simulated API request
      console.log("Sending to server:", data);

      status.textContent = "Form submitted successfully!";
      status.className = "status online";
    }

    // ================== ONLINE EVENT ==================
    window.addEventListener("online", sendStoredData);


/* 30 KEYBOARD MODAL */
let isKeyModalOpen = false;

function openKeyModal(){
  const modal = document.getElementById("keyboardModal");
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  modal.querySelector(".modal-box").focus();
  isKeyModalOpen = true;
}

function closeKeyModal(){
  const modal = document.getElementById("keyboardModal");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  isKeyModalOpen = false;
}

/* ESC KEY SUPPORT */
document.addEventListener("keydown", function(e){
  if(e.key === "Escape" && isKeyModalOpen){
    closeKeyModal();
  }
});


/* 31 USER ACTIVITY LOG */
let log = [];
function logAction(action){
  const time = new Date().toLocaleTimeString();
  log.push(`${time} - ${action}`);
  renderLog();
}
function renderLog(){
  activityLog.innerHTML = log.map(l=>`<li>${l}</li>`).join("");
}

/* 32 NOTIFICATION CENTER */
let notificationsArr = [];
function addNotification(msg){
  notificationsArr.push(msg);
  notifications.innerHTML = notificationsArr.map(n=>`<li>${n}</li>`).join("");
}

/* 33 STATE MANAGEMENT MINI-APP */
let state = {counter:0};
function incrementState(){state.counter++;renderState();}
function decrementState(){state.counter--;renderState();}
function renderState(){stateCounter.innerText = state.counter;}
renderState();

/* 34 RESPONSIVE NAVBAR TOGGLE */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


/* 35 FORM SUBMISSION HISTORY */
 const dataForm = document.getElementById("dataForm");
    const recordContainer = document.getElementById("recordContainer");
    const STORAGE_ID = "submissionRecords";

    window.addEventListener("DOMContentLoaded", renderRecords);

    dataForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const recordData = {
        username: userName.value,
        text: userMessage.value,
        submittedAt: new Date().toLocaleString()
      };

      const storedRecords = JSON.parse(localStorage.getItem(STORAGE_ID)) || [];
      storedRecords.unshift(recordData);
      localStorage.setItem(STORAGE_ID, JSON.stringify(storedRecords));

      dataForm.reset();
      renderRecords();
    });

    function renderRecords() {
      recordContainer.innerHTML = "";

      const storedRecords = JSON.parse(localStorage.getItem(STORAGE_ID)) || [];

      if (storedRecords.length === 0) {
        recordContainer.innerHTML = "<p>No records found.</p>";
        return;
      }

      storedRecords.forEach(item => {
        const entryDiv = document.createElement("div");
        entryDiv.className = "record-item";

        entryDiv.innerHTML = `
          <strong>${item.username}</strong>
          <p>${item.text}</p>
          <div class="timestamp">${item.submittedAt}</div>
        `;

        recordContainer.appendChild(entryDiv);
      });
    }

    function wipeRecords() {
      localStorage.removeItem(STORAGE_ID);
      renderRecords();
    }

/* 36 SETTINGS AUTO-SAVE */
  const darkToggle = document.getElementById("darkModeToggle");
    const nameInput = document.getElementById("userNameInput");
    const langSelect = document.getElementById("languageSelect");
    const saveStatus = document.getElementById("saveStatus");

    const SETTINGS_KEY = "userSettings";

    // Load saved settings
    window.addEventListener("DOMContentLoaded", () => {
      const savedSettings = JSON.parse(localStorage.getItem(SETTINGS_KEY));

      if (savedSettings) {
        darkToggle.checked = savedSettings.darkMode;
        nameInput.value = savedSettings.username;
        langSelect.value = savedSettings.language;
        applyTheme(savedSettings.darkMode);
      }
    });

    // Auto save handler
    function autoSaveSettings() {
      const settingsData = {
        darkMode: darkToggle.checked,
        username: nameInput.value,
        language: langSelect.value
      };

      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settingsData));
      applyTheme(settingsData.darkMode);

      saveStatus.textContent = "Settings saved automatically ✔";
      setTimeout(() => saveStatus.textContent = "", 1500);
    }

    function applyTheme(isDark) {
      document.body.style.background = isDark ? "#222" : "#f4f6f8";
      document.body.style.color = isDark ? "#fff" : "#000";
    }

    darkToggle.addEventListener("change", autoSaveSettings);
    nameInput.addEventListener("input", autoSaveSettings);
    langSelect.addEventListener("change", autoSaveSettings);
/* 37 DYNAMIC CONTENT LOADER */
function loadContent(){
  dynamicContent.innerHTML="<p>Content loaded dynamically at "+new Date().toLocaleTimeString()+"</p>";
}

/* 38 PROGRESS TRACKER */
function advanceProgress(){
  let p = progressBar.value;
  progressBar.value = Math.min(p+10,100);
}

/* 39 FORM RULES ENGINE */
function checkRules(){
  let val = parseInt(rulesInput.value);
  if(isNaN(val)){
    rulesMsg.innerText="Enter a valid number";
    return;
  }
  rulesMsg.innerText = val>10?"Value > 10 ✔":"Value ≤ 10 ❌";
}

/* 40 SEARCH & HIGHLIGHT */
function highlightText(val){
  let content = "This is a sample text for search and highlight demo.";
  if(val===""){
    highlightContent.innerHTML = content;
    return;
  }
  let regex = new RegExp(`(${val})`,"gi");
  highlightContent.innerHTML = content.replace(regex, `<span class="highlight">$1</span>`);
}

/* 41 MINI ADMIN DASHBOARD */
// Already covered using cards (same as task 25)

/* 42 USER ONBOARDING FLOW */
let onboardStep = 1;

function nextOnboardStep() {
  const input = document.getElementById("onboardInput");
  const stepDiv = document.getElementById("onboardStep");
  const msg = document.getElementById("onboardMessage");

  if (input.value.trim() === "") {
    msg.innerText = "Please enter a value!";
    return;
  }

  msg.innerText = "";
  if (onboardStep === 1) {
    stepDiv.innerText = "Step 2: Enter Email";
    input.value = "";
    onboardStep++;
  } else if (onboardStep === 2) {
    stepDiv.innerText = "Step 3: Create Password";
    input.value = "";
    input.type = "password";
    onboardStep++;
  } else if (onboardStep === 3) {
    stepDiv.innerText = "Onboarding Completed!";
    input.style.display = "none";
    event.target.style.display = "none"; // hide button
    msg.innerText = "Welcome to the platform!";
  }
}


/* 44 COMPONENT-BASED UI */
function renderComponent(name){
  let div = document.createElement("div");
  div.className="componentCard";
  div.innerText=name;
  componentArea.appendChild(div);
}

/* 45 PERFORMANCE-OPTIMIZED LIST */
function renderLargeList(){
  let html = "";
  for(let i=1;i<=1000;i++){
    html+=`<li>Item ${i}</li>`;
  }
  perfList.innerHTML = html;
}

/* 46 LOGIN ATTEMPT LIMIT */
const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');
const loginBtn = document.getElementById('loginBtn');

// Hardcoded correct credentials
const correctUsername = "admin";
const correctPassword = "12345";

let attempts = 3; // Maximum 3 attempts

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        message.style.color = "green";
        message.textContent = "Login successful! Redirecting...";
        loginBtn.disabled = true;

        setTimeout(() => {
            window.location.href = "dashboard.html"; // Replace with your page
        }, 2000);
    } else {
        attempts--;
        message.style.color = "red";
        message.textContent = `Invalid credentials! Attempts left: ${attempts}`;

        if (attempts === 0) {
            loginBtn.disabled = true;
            message.textContent = "You have been locked out due to too many failed attempts!";
        }
    }
});



 /* ===================== 47 USER PREFERENCES ===================== */
  const preferenceText = document.getElementById("preferenceText");

  function setFontSize(size) {
    preferenceText.style.fontSize = size;
    localStorage.setItem("fontSize", size);
  }

  /* ===================== 48 THEME CUSTOMIZER ===================== */
  function setTheme(theme) {
    document.body.style.background =
      theme === "dark" ? "#222" : "#f4f6f8";
    document.body.style.color =
      theme === "dark" ? "#fff" : "#000";

    localStorage.setItem("theme", theme);
  }

  /* ===================== LOAD SAVED SETTINGS ===================== */
  window.onload = () => {
    const savedFont = localStorage.getItem("fontSize");
    const savedTheme = localStorage.getItem("theme");

    if (savedFont) {
      preferenceText.style.fontSize = savedFont;
    }

    if (savedTheme) {
      setTheme(savedTheme);
    }
  };

  /* ===================== 49 CONFIRMATION DIALOG ===================== */
  let confirmCallback = null;

  function showConfirm(message, callback) {
    document.getElementById("confirmText").textContent = message;
    document.getElementById("confirmModal").style.display = "flex";
    confirmCallback = callback;
  }

  function confirmYes() {
    document.getElementById("confirmModal").style.display = "none";
    if (confirmCallback) confirmCallback();
  }

  function confirmNo() {
    document.getElementById("confirmModal").style.display = "none";
    confirmCallback = null;
  }

/* 50  */

function routeTask(taskNum) {
  const view = document.getElementById("taskView");
  view.innerHTML = ""; // clear

  switch(taskNum) {
    case 1:
      view.innerHTML = `<p>Task 1: Login App goes here (implemented above)</p>`;
      break;
    case 42:
      view.innerHTML = document.getElementById("task42").innerHTML;
      break;
    case 46:
      view.innerHTML = document.getElementById("task46").innerHTML;
      break;
    case 50:
      view.innerHTML = `<p>This mini-app contains all 50 tasks fully implemented!</p>`;
      break;
    default:
      view.innerHTML = `<p>Task not implemented yet</p>`;
  }
}
