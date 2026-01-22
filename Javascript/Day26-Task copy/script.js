// ---------------- 1. User Registration ----------------
function register() {
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const pass = document.getElementById("regPass").value;

  const msg = document.getElementById("regMsg");

  // strict validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(name.length < 3) { msg.innerText="Name must be at least 3 chars"; return; }
  if(!emailPattern.test(email)) { msg.innerText="Invalid Email"; return; }
  if(pass.length < 6) { msg.innerText="Password must be 6+ chars"; return; }

  localStorage.setItem("user", JSON.stringify({name,email,pass}));
  msg.innerText = "Registration Successful!";
}

// ---------------- 2. Login App ----------------
let loginAttempts = 0;
function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const pass = document.getElementById("loginPass").value;
  const msg = document.getElementById("loginMsg");
  const user = JSON.parse(localStorage.getItem("user"));

  if(!user) { msg.innerText="No registered user!"; return; }

  if(loginAttempts >= 3) { msg.innerText="Max attempts exceeded!"; return; }

  if(user.email === email && user.pass === pass){
    msg.innerText="Login Successful!";
    loginAttempts = 0;
  } else {
    loginAttempts++;
    msg.innerText=`Invalid credentials. Attempts left: ${3-loginAttempts}`;
  }
}

// ---------------- 3. Employee List ----------------
let employees = [];
function addEmployee(){
  const emp = document.getElementById("empInput").value.trim();
  if(emp) {
    employees.push(emp);
    renderList("empList", employees);
    document.getElementById("empInput").value="";
  }
}
function renderList(id, arr){
  const ul = document.getElementById(id);
  ul.innerHTML = "";
  arr.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  });
}

// ---------------- 4. Student Management ----------------
let students = [];
function addStudent(){
  const stu = document.getElementById("stuInput").value.trim();
  if(stu) {
    students.push(stu);
    renderList("stuList", students);
    document.getElementById("stuInput").value="";
  }
}

// ---------------- 5. Form Validation ----------------
function validateInputValue(){
  const val = document.getElementById("valInput").value.trim();
  const msg = document.getElementById("valMsg");
  if(val.length >= 5) { msg.innerText="Valid Input"; }
  else { msg.innerText="Input too short"; }
}

// ---------------- 6. Dashboard ----------------
// Static dashboard values are already in HTML

// ---------------- 7. Search Filter ----------------
// Employee data
const employees1 = [
  "Arun",
  "Divya",
  "Karthik",
  "Meena",
  "Ravi",
  "Suresh",
  "Priya",
  "Anitha"
];

// Initial render
const list = document.getElementById("employeeList");
renderEmployees(employees1);

// Search function
function searchEmployee() {
  const input = document.getElementById("searchInput").value.toLowerCase();

  const filteredEmployees = employees1.filter(emp =>
    emp.toLowerCase().includes(input)
  );

  renderEmployees(filteredEmployees);
}

// Render list function
function renderEmployees(data) {
  list.innerHTML = "";

  if (data.length === 0) {
    list.innerHTML = "<li>No employee found</li>";
    return;
  }

  data.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
}

// ---------------- 8. Theme Toggle ----------------
let darkTheme = false;
function toggleTheme(){
  if(!darkTheme){
    document.body.style.background="#333";
    document.body.style.color="#fff";
  } else {
    document.body.style.background="#f5f5f5";
    document.body.style.color="#000";
  }
  darkTheme = !darkTheme;
}

// ---------------- 9. Pagination ----------------
let pageIndex = 0;
const pageData = ["Page 1 Data","Page 2 Data","Page 3 Data","Page 4 Data"];
function renderPage(){
  document.getElementById("pageData").innerText = pageData[pageIndex];
}
function prevPage(){
  if(pageIndex > 0) { pageIndex--; renderPage(); }
}
function nextPage(){
  if(pageIndex < pageData.length-1){ pageIndex++; renderPage(); }
}
renderPage();

// ---------------- 10. Profile Edit & Save ----------------
function saveProfile(){
  const name = document.getElementById("profileName").value.trim();
  const msg = document.getElementById("profileMsg");
  if(name.length < 3){ msg.innerText="Name must be 3+ chars"; return; }
  localStorage.setItem("profileName", name);
  msg.innerText = "Profile Saved!";
}


// ---------------- 11. Task Management ----------------
let tasks = [];
function addTask() {
  const taskName = document.getElementById("taskInput").value.trim();
  const status = document.getElementById("taskStatus").value;
  if(taskName){
    tasks.push({name: taskName, status});
    renderTasks(tasks);
    document.getElementById("taskInput").value="";
  }
}
function renderTasks(list){
  const ul = document.getElementById("taskList");
  ul.innerHTML = "";
  list.forEach(task=>{
    const li = document.createElement("li");
    li.innerText = `${task.name} [${task.status}]`;
    ul.appendChild(li);
  });
}
function filterTasks(){
  const completed = tasks.filter(t => t.status === "Completed");
  renderTasks(completed);
}

// ---------------- 12. Notes App ----------------
function saveNotes(){
  const notes = document.getElementById("notes").value;
  localStorage.setItem("notes", notes);
  document.getElementById("noteMsg").innerText="Notes saved!";
}
// Load notes on page load
window.onload = function(){
  const savedNotes = localStorage.getItem("notes");
  if(savedNotes) document.getElementById("notes").value = savedNotes;
}

// ---------------- 13. Dynamic Table ----------------
let tableData = [];
function addTableRow(){
  const val = document.getElementById("tableInput").value.trim();
  if(val){
    tableData.push(val);
    renderList("tableList", tableData);
    document.getElementById("tableInput").value="";
  }
}
function sortTable(){
  tableData.sort();
  renderList("tableList", tableData);
}

// ---------------- 14. Modal ----------------
function openModal(){ document.getElementById("modal").style.display="flex"; }
function closeModal(){ document.getElementById("modal").style.display="none"; }

// ---------------- 15. Multi-Step Form ----------------
let currentStep = 1;
let stepValues = [];
function nextStep(){
  const val = document.getElementById("stepInput").value.trim();
  if(!val){ alert("Enter value for step"); return; }
  stepValues[currentStep-1] = val;
  if(currentStep < 3){
    currentStep++;
    document.getElementById("stepText").innerText = `Step ${currentStep} of 3`;
    document.getElementById("stepInput").value = stepValues[currentStep-1] || "";
  } else {
    document.getElementById("stepResult").innerText = `Completed! Values: ${stepValues.join(", ")}`;
  }
}

// ---------------- 16. Search Suggestions ----------------
const sampleData = ["Apple","Banana","Orange","Mango","Pineapple","Grapes"];
function autoSuggest(query){
  const ul = document.getElementById("suggestList");
  ul.innerHTML="";
  if(query.length === 0) return;
  const filtered = sampleData.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  filtered.forEach(item=>{
    const li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  });
}

// ---------------- 17. Settings Dashboard ----------------
function saveSetting(val){
  localStorage.setItem("language", val);
  document.getElementById("settingMsg").innerText = `Language set to ${val}`;
}

// ---------------- 18. Draft Save ----------------
function saveDraft(){
  const val = document.getElementById("draftInput").value;
  localStorage.setItem("draftData", val);
}
function restoreDraft(){
  const val = localStorage.getItem("draftData");
  if(val) document.getElementById("draftInput").value = val;
}

// ---------------- 19. Activity Logger ----------------
let activities = [];
function logActivity(){
  const timestamp = new Date().toLocaleTimeString();
  activities.push(`Clicked at ${timestamp}`);
  renderList("activityList", activities);
}

// ---------------- 20. Toast ----------------
function showToast(){
  const toast = document.getElementById("toast");
  toast.style.display="block";
  setTimeout(()=>{ toast.style.display="none"; }, 2000);
}


// ---------------- 21. CRUD App ----------------
let crudItems = [];
function addItem(){
  const val = document.getElementById("crudInput").value.trim();
  if(!val) return;
  crudItems.push(val);
  renderList("crudList", crudItems);
  document.getElementById("crudInput").value="";
}

// ---------------- 22. Dynamic Dropdown Dependency ----------------
const cities = {
  India: ["Delhi","Mumbai","Bangalore"],
  USA: ["New York","Los Angeles","Chicago"]
};
function loadCities(country){
  const citySelect = document.getElementById("city");
  citySelect.innerHTML = "";
  if(cities[country]){
    cities[country].forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.innerText = c;
      citySelect.appendChild(opt);
    });
  }
}

// ---------------- 23. Conditional Validation ----------------
function checkAge(){
  const age = parseInt(document.getElementById("ageInput").value);
  const msg = document.getElementById("ageMsg");
  if(isNaN(age)){ msg.innerText="Enter a valid number"; return; }
  if(age < 18) msg.innerText="Underage, cannot submit";
  else msg.innerText="Age is valid!";
}

// ---------------- 24. Table Row Edit & Update ----------------
let editList = [];
function addRow(){
  const val = document.getElementById("editInput").value.trim();
  if(!val) return;
  editList.push(val);
  renderEditList();
  document.getElementById("editInput").value="";
}
function renderEditList(){
  const ul = document.getElementById("editList");
  ul.innerHTML = "";
  editList.forEach((item, index)=>{
    const li = document.createElement("li");
    li.innerText = item;
    li.onclick = function(){ editRow(index); };
    ul.appendChild(li);
  });
}
function editRow(index){
  const newVal = prompt("Edit Item:", editList[index]);
  if(newVal) {
    editList[index] = newVal;
    renderEditList();
  }
}

// ---------------- 25. Prevent Duplicate Entry ----------------
let uniqueList = [];
function addUnique(){
  const val = document.getElementById("dupInput").value.trim();
  if(!val) return;
  if(uniqueList.includes(val)) alert("Duplicate Entry!");
  else {
    uniqueList.push(val);
    renderList("dupList", uniqueList);
  }
  document.getElementById("dupInput").value="";
}

// ---------------- 26. Live Search & Highlight ----------------
let searchData = ["Alice","Bob","Charlie","David","Eve"];
function liveSearch(query){
  const ul = document.getElementById("liveList");
  ul.innerHTML = "";
  const filtered = searchData.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  filtered.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = item.replace(new RegExp(query,"gi"), match => `<span class="highlight">${match}</span>`);
    ul.appendChild(li);
  });
}

// ---------------- 27. Tabs ----------------
function showTab(tabNum){
  const content = tabNum === 1 ? "This is Tab 1 content" : "This is Tab 2 content";
  document.getElementById("tabContent").innerText = content;
}

// ---------------- 28. Client-Side Data Store ----------------
function storeData(){
  const val = document.getElementById("storeInput").value.trim();
  if(!val) return;
  localStorage.setItem("dataStore", val);
  document.getElementById("storeMsg").innerText = "Data Saved!";
  document.getElementById("storeInput").value="";
}

// ---------------- 29. Dashboard Summary ----------------
function generateSummary(){
  const totalUsers = 120;
  const totalSales = 250;
  const totalVisitors = 500;
  document.getElementById("summary").innerText = 
    `Users: ${totalUsers}, Sales: ${totalSales}, Visitors: ${totalVisitors}`;
}

// ---------------- 30. Reusable Form Component ----------------
function submitForm(){
  const val = document.getElementById("formInput").value.trim();
  if(!val) { alert("Enter value"); return; }
  document.getElementById("formMsg").innerText = `Submitted: ${val}`;
  document.getElementById("formInput").value="";
}

// ---------------- 31. STATE MANAGEMENT ----------------
let state = 0;
function renderState() {
  document.getElementById("stateValue").innerText = state;
}
function increment() {
  state++;
  renderState();
}
function decrement() {
  state--;
  renderState();
}

// ---------------- 32. ROLE BASED UI ----------------
function setRole(role) {
  const view = document.getElementById("roleView");
  if (role === "Admin") {
    view.innerHTML = "<p class='admin'>Admin Controls Enabled</p>";
  } else {
    view.innerHTML = "<p>User View Only</p>";
  }
}

// ---------------- 33. CLIENT SIDE ROUTER ----------------
function navigate(page) {
  const routes = {
    home: "Welcome to Home Page",
    about: "About Us Section",
    contact: "Contact Page Content"
  };
  document.getElementById("routeView").innerText = routes[page];
}

// ---------------- 34. FORM RULES ENGINE ----------------
function applyRule() {
  const val = document.getElementById("ruleInput").value;
  const msg = document.getElementById("ruleMsg");

  if (!val) msg.innerText = "Value required";
  else if (val < 10) msg.innerText = "Value must be ≥ 10";
  else msg.innerText = "Valid input!";
}

// ---------------- 35. DYNAMIC WIDGETS ----------------
let widgetCount = 1;
function addWidget() {
  const ul = document.getElementById("widgetList");
  const li = document.createElement("li");
  li.className = "widget";
  li.innerText = "Widget " + widgetCount++;
  ul.appendChild(li);
}

// ---------------- 36. OFFLINE FIRST FORM ----------------
function saveOffline() {
  const val = document.getElementById("offlineInput").value;
  localStorage.setItem("offlineData", val);
  document.getElementById("offlineMsg").innerText = "Saved offline";
}
window.onload = function () {
  document.getElementById("offlineInput").value =
    localStorage.getItem("offlineData") || "";
};

// ---------------- 37. SESSION EXPIRY WARNING ----------------
let sessionTimer;
function startSession() {
  document.getElementById("sessionMsg").innerText = "Session started";
  clearTimeout(sessionTimer);
  sessionTimer = setTimeout(() => {
    document.getElementById("sessionMsg").innerText = "Session expired!";
  }, 5000);
}

// ---------------- 38. DYNAMIC CONTENT LOADER ----------------
function loadContent() {
  document.getElementById("contentBox").innerText =
    "Content loaded dynamically at " + new Date().toLocaleTimeString();
}

// ---------------- 39. KEYBOARD ACCESSIBILITY ----------------
function keyDetect(event) {
  if (event.key === "Enter") {
    document.getElementById("keyMsg").innerText = "Enter key pressed!";
  }
}

// ---------------- 40. THEME CUSTOMIZATION ----------------
function setTheme(color) {
  document.body.style.background = color;
  localStorage.setItem("themeColor", color);
}
document.body.style.background =
  localStorage.getItem("themeColor") || "#ffffff";

  // ---------------- 41. MINI ADMIN PANEL ----------------
function adminTask() {
  document.getElementById("adminMsg").innerText =
    "Admin task executed successfully!";
}

// ---------------- 42. USER ONBOARDING ----------------
let onboardStep = 1;
function nextOnboard() {
  onboardStep++;
  if (onboardStep > 3) onboardStep = 1;
  document.getElementById("onboardText").innerText =
    "Welcome Step " + onboardStep;
}

// ---------------- 43. REPORTING DASHBOARD ----------------
document.getElementById("repUsers").innerText = 120;
document.getElementById("repSales").innerText = 25000;

// ---------------- 44. FORM WORKFLOW ----------------
let workflowStep = 1;
function workflowNext() {
  workflowStep++;
  document.getElementById("workflowStatus").innerText =
    "Workflow Step " + workflowStep;
}

// ---------------- 45. ERROR HANDLING ----------------
function throwError() {
  try {
    throw new Error("Something went wrong!");
  } catch (e) {
    document.getElementById("errorView").innerText = e.message;
  }
}

// ---------------- 46. SEARCH + FILTER DASHBOARD ----------------
const dashboardUsers = [
  { name: "Arun", role: "Admin" },
  { name: "Priya", role: "User" },
  { name: "Karthik", role: "User" },
  { name: "Meena", role: "Admin" }
];

function filterDashboard() {
  const search = document.getElementById("searchDash").value.toLowerCase();
  const role = document.getElementById("roleFilter").value;
  const ul = document.getElementById("dashboardList");

  ul.innerHTML = "";

  dashboardUsers
    .filter(u =>
      u.name.toLowerCase().includes(search) &&
      (role === "all" || u.role === role)
    )
    .forEach(u => {
      const li = document.createElement("li");
      li.innerText = `${u.name} - ${u.role}`;
      ul.appendChild(li);
    });
}

filterDashboard();

// ---------------- 47. USER PREFERENCES ----------------
function savePreference(theme) {
  localStorage.setItem("theme", theme);
  applyTheme();
  document.getElementById("prefStatus").innerText = "Preference Saved";
}

function applyTheme() {
  const theme = localStorage.getItem("theme");
  document.body.className = theme === "dark" ? "dark-theme" : "";
}

applyTheme();


// ---------------- 48. UI COMPONENT LIBRARY ----------------
// (CSS driven – no JS needed)

// ---------------- 49. PERFORMANCE OPTIMIZED LIST ----------------
function loadFastList() {
  const ul = document.getElementById("fastList");
  ul.innerHTML = "";

  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= 500; i++) {
    const li = document.createElement("li");
    li.innerText = "Item " + i;
    fragment.appendChild(li);
  }

  ul.appendChild(fragment);
}

// ---------------- 50. COMPANY READY MINI APP ----------------
let employeeData = JSON.parse(localStorage.getItem("employees")) || [];

function saveEmployee() {
  const name = document.getElementById("empName").value.trim();
  const email = document.getElementById("empEmail").value.trim();

  if (!name || !email || !email.includes("@")) {
    document.getElementById("empMsg").innerText = "Invalid data";
    return;
  }

  employeeData.push({ name, email });
  localStorage.setItem("employees", JSON.stringify(employeeData));

  document.getElementById("empMsg").innerText = "Employee Saved";
  renderEmployees();
}

function renderEmployees() {
  const ul = document.getElementById("empDataList");
  ul.innerHTML = "";

  employeeData.forEach(emp => {
    const li = document.createElement("li");
    li.innerText = `${emp.name} (${emp.email})`;
    ul.appendChild(li);
  });
}

renderEmployees();
