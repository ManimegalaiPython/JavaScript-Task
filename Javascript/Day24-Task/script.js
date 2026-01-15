// 1 Student Registration
function addStudent(){
  if(stuName.value && stuAge.value){
    studentList.innerHTML += `<li>${stuName.value} (${stuAge.value})</li>`;
    stuName.value=""; stuAge.value="";
  }
}

// 2 Login & Logout
function login(){
  localStorage.setItem("user", loginUser.value);
  loginStatus.innerText = "Logged in as " + loginUser.value;
}
function logout(){
  localStorage.removeItem("user");
  loginStatus.innerText = "Logged out";
}
if(localStorage.getItem("user")){
  loginStatus.innerText = "Logged in as " + localStorage.getItem("user");
}

// 3 To-Do Manager
function addTodo(){
  const li = document.createElement("li");
  li.innerText = todoInput.value;
  li.onclick = ()=>li.classList.toggle("done");
  todoList.appendChild(li);
  todoInput.value="";
}

// 4 Notes App
function saveNote(){
  noteList.innerHTML += `<li>${noteText.value}</li>`;
  noteText.value="";
}

// 5 Profile Manager
function updateProfile(){
  profilePreview.innerHTML =
    `<strong>Name:</strong> ${profileName.value}<br>
     <strong>Email:</strong> ${profileEmail.value}`;
}

// 6 Contact Manager
function addContact(){
  contactList.innerHTML += `<li>${contactName.value}</li>`;
  contactName.value="";
}

// 7 Feedback
function submitFeedback(){
  feedbackResult.innerText =
    "Rating: " + rate7.value + " | Comment: " + comment7.value;
}

// 8 Expense Tracker
let income=0, expense=0;
function addExpense(){
  if(type8.value==="income") income+=Number(amount8.value);
  else expense+=Number(amount8.value);
  summary8.innerText =
    `Income: ${income} | Expense: ${expense} | Balance: ${income-expense}`;
}

// 9 Daily Planner
function addTask9(){
  taskList9.innerHTML += `<li>${date9.value}: ${task9.value}</li>`;
  task9.value="";
}

// 10 Password Strength
function checkStrength(){
  const len = pass10.value.length;
  strengthMsg.innerText =
    len<4?"Weak":len<8?"Medium":"Strong";
}



// 11 Form Validation
function validateForm(){
  let valid = true;
  if(!valName.value){
    valNameErr.innerText="Name required"; valid=false;
  } else valNameErr.innerText="";
  const emailRegex = /^\S+@\S+\.\S+$/;
  if(!emailRegex.test(valEmail.value)){
    valEmailErr.innerText="Invalid Email"; valid=false;
  } else valEmailErr.innerText="";
  if(valid) alert("Form submitted successfully!");
}

// 12 Search & Filter
const products12=["Laptop","Phone","Tablet","Monitor","Keyboard"];
function filterProducts(){
  productList12.innerHTML="";
  const search=search12.value.toLowerCase();
  products12.filter(p=>p.toLowerCase().includes(search))
            .forEach(p=>productList12.innerHTML+=`<li>${p}</li>`);
}

// 13 Dashboard Tabs
function showTab(tabId){
  document.querySelectorAll(".tabContent").forEach(t=>t.style.display="none");
  document.getElementById(tabId).style.display="block";
}

// 14 Multi-Step Registration
let step14=1;
function nextStep14(){
  document.getElementById(`step14-${step14}`).style.display="none";
  step14++;
  document.getElementById(`step14-${step14}`).style.display="block";
}
function finishStep14(){
  regResult14.innerText=`Registered: ${regName14.value}, ${regEmail14.value}`;
  step14=1;
  document.getElementById("step14-1").style.display="block";
  document.getElementById("step14-2").style.display="none";
  document.getElementById("step14-3").style.display="none";
}

// 15 Theme Switcher
const themeBtn = document.getElementById("themeBtn");
const themeStatus = document.getElementById("themeStatus");

/* Load saved theme on page load */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeStatus.textContent = "Current Theme: Dark";
} else {
  themeStatus.textContent = "Current Theme: Light";
}

/* Toggle Theme */
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeStatus.textContent = "Current Theme: Dark";
  } else {
    localStorage.setItem("theme", "light");
    themeStatus.textContent = "Current Theme: Light";
  }
});

// 16 Login Attempts
let attempts16Count=0;
function login16(){
  attempts16Count++;
  attempts16.innerText=`Login attempts: ${attempts16Count}`;
}

// 17 Feedback Dashboard
let feedback17=[];
function addFeedback17(){
  feedback17.push(Number(rate17.value));
  const avg=feedback17.reduce((a,b)=>a+b,0)/feedback17.length;
  feedbackStats17.innerText=`Average rating: ${avg.toFixed(1)}, Total feedback: ${feedback17.length}`;
}

// 18 Admin Panel
function addAdmin18(){
  if(adminName18.value){
    adminList18.innerHTML+=`<li>${adminName18.value} <button onclick="this.parentElement.remove()">Delete</button></li>`;
    adminName18.value="";
  }
}

// 19 Form History
function submitForm19(){
  if(form19.value){
    history19.innerHTML+=`<li>${form19.value}</li>`;
    form19.value="";
  }
}

// 20 Notification Center
function addNotification20(){
  notif20.innerHTML+=`<li>New Notification at ${new Date().toLocaleTimeString()}</li>`;
}

// 21 Responsive Menu
function toggleMenu21(){
  menu21.style.display = menu21.style.display==="none"?"block":"none";
}

// 22 Activity Tracker
function trackActivity22(action){
  activity22.innerHTML+=`<li>${action} at ${new Date().toLocaleTimeString()}</li>`;
}

// 23 Profile Completion Status
function updateProfile23(){
  let filled=0;
  if(name23.value) filled++;
  if(email23.value) filled++;
  status23.innerText=`Profile completion: ${Math.round((filled/2)*100)}%`;
}

// 24 Survey Form
function submitSurvey24(){
  const q=document.querySelector('input[name="q24"]:checked');
  result24.innerText=q?`Selected: ${q.value}`:"Please select an option";
}

// 25 Chat UI
function sendMsg25(){
  if(msg25.value){
    chat25.innerHTML+=`<div>User: ${msg25.value}</div>`;
    msg25.value="";
    chat25.scrollTop = chat25.scrollHeight;
  }
}

// 26 User Settings Auto-save
function saveSetting26(){
  localStorage.setItem("setting26", setting26.value);
  saved26.innerText="Saved!";
}
if(localStorage.getItem("setting26")) setting26.value=localStorage.getItem("setting26");

// 27 Product Management
const products27=["Shoes","Bag","Watch","Shirt"];
function filterProduct27(){
  productList27.innerHTML="";
  const s=product27.value.toLowerCase();
  products27.filter(p=>p.toLowerCase().includes(s)).forEach(p=>productList27.innerHTML+=`<li>${p}</li>`);
}

// 28 Registration Approval
function approveUser28(){
  if(reg28.value){
    regList28.innerHTML+=`<li>${reg28.value} <span>(Pending)</span></li>`;
    reg28.value="";
  }
}

// 29 Form Draft Save
function saveDraft29(){
  localStorage.setItem("draft29", draft29.value);
  draftSaved29.innerText="Draft saved!";
}
if(localStorage.getItem("draft29")) draft29.value=localStorage.getItem("draft29");

// 30 Session Timeout
let timeLeft30=30;
timeout30.innerText=timeLeft30;
const interval30=setInterval(()=>{
  timeLeft30--;
  timeout30.innerText=timeLeft30;
  if(timeLeft30<=0){
    clearInterval(interval30);
    alert("Session expired!");
  }
},1000);



/* 31. Mini CRM */
let customers = [];
let selectedIndex = null;

function addCustomer() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !email || !phone) {
    alert("Please fill all fields");
    return;
  }

  customers.push({ name, email, phone });
  clearForm();
  renderCustomers();
}

function renderCustomers() {
  const list = document.getElementById("customerList");
  list.innerHTML = "";

  customers.forEach((cust, index) => {
    const li = document.createElement("li");
    li.textContent = cust.name;
    li.onclick = () => showDetails(index);

    if (index === selectedIndex) {
      li.classList.add("active");
    }

    list.appendChild(li);
  });
}

function showDetails(index) {
  selectedIndex = index;
  const cust = customers[index];

  document.getElementById("details").innerHTML = `
    <strong>Name:</strong> ${cust.name}<br>
    <strong>Email:</strong> ${cust.email}<br>
    <strong>Phone:</strong> ${cust.phone}
  `;

  renderCustomers();
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}


/* 32. Support Ticket */
function addTicket() {
  const input = document.getElementById("ticketInput");
  if (!input.value) return;
  const li = document.createElement("li");
  li.textContent = input.value;
  document.getElementById("ticketList").appendChild(li);
  input.value = "";
}

/* 33. Attendance */
function markAttendance() {
  document.getElementById("attendanceStatus").textContent = "Present ✔️";
}

/* 35. Form Wizard */
function nextStep() {
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
}
function prevStep() {
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step1").classList.remove("hidden");
}

/* 36. Role Management */
function changeRole() {
  const role = document.getElementById("roleSelect").value;
  document.getElementById("roleResult").textContent = "Role: " + role;
}

/* 37. Polling */
let count = 0;
function vote() {
  count++;
  document.getElementById("votes").textContent = count;
}

/* 38. Image Preview */
function previewImage(e) {
  document.getElementById("preview").src =
    URL.createObjectURL(e.target.files[0]);
}

/* 39. Notification */
function notify() {
  document.getElementById("notifyStatus").textContent =
    "Preferences Updated";
}

/* 40. Login History */
function addLogin() {
  const li = document.createElement("li");
  li.textContent = new Date().toLocaleString();
  document.getElementById("loginHistory").appendChild(li);
}


// 40 Login History
function addLogin(){
  const li = document.createElement("li");
  li.textContent = new Date().toLocaleString();
  loginHistory.appendChild(li);
}

// 41 Courses
const courses = ["HTML", "CSS", "JavaScript"];
courses.forEach(c => {
  courseList.innerHTML += `<li>${c}</li>`;
});

// 42 Progress
function updateProgress(value){
  progressValue.textContent = value;
}

// 43 Validation Rules
function checkRules(){
  const pass = password43.value;
  if(pass.length >= 8){
    ruleResult.textContent = "Valid Password";
  } else {
    ruleResult.textContent = "Minimum 8 characters required";
  }
}

// 44 Deactivation
function deactivateAccount(){
  accountStatus.textContent = "Account Deactivated";
}

// 45 Project Tracker
const projects = ["Website - Done", "App - In Progress"];
projects.forEach(p => {
  projectList.innerHTML += `<li>${p}</li>`;
});

// 47 Report
function generateReport(){
  reportOutput.textContent = "User report generated successfully";
}

// 48 Booking
function submitBooking(){
  bookingStatus.textContent =
    "Booking confirmed for " + bookName.value;
}

// 49 Calculator
function calculate(){
  const result = Number(num1.value) + Number(num2.value);
  calcResult.textContent = "Result: " + result;
}
