// Task 1
function registerUser() {
  regResult.innerText = `Name: ${regName.value}, Email: ${regEmail.value}`;
}

// Task 2
function loginUser() {
  if (loginName.value && loginPass.value) {
    loginMsg.innerText = "Welcome " + loginName.value;
  } else {
    loginMsg.innerText = "Invalid Login";
  }
}

// Task 3
function checkRequired() {
  reqBtn.disabled = reqInput.value === "";
}

// Task 4
function validateEmail() {
  if (!emailCheck.value.includes("@")) {
    emailError.innerText = " Invalid Email";
  } else {
    emailError.innerText = "";
  }
}

// Task 5
function clearForm() {
  clearField.value = "";
}

// Task 6
let submitCounter = 0;
function countSubmission() {
  submitCounter++;
  submitCount.innerText = submitCounter;
}

// Task 7
function contactSubmit() {
  contactMsg.innerText = "Message Sent Successfully!";
}

// Task 9
function profilePreview(value) {
  profileText.innerText = "Preview: " + value;
}

// Task 10
function checkPassword() {
  passMsg.innerText =
    passOne.value === passTwo.value ? "Password Match" : "Password Not Match";
}

// Task 13 (Date & Time)
setInterval(() => {
  dateTime.innerText = new Date().toLocaleString();
}, 1000);

// Task 14 & 15
function saveSetting() {
  localStorage.setItem("userSetting", settingInput.value);
  settingMsg.innerText = "Setting Saved";
}

window.onload = () => {
  const saved = localStorage.getItem("userSetting");
  if (saved) {
    settingInput.value = saved;
    settingMsg.innerText = "Loaded Saved Setting";
  }
};


// 16
let sum16=0,count16=0;
function addRating16(){
  sum16+=Number(rate16.value);
  count16++;
  avg16.innerText="Average: "+(sum16/count16).toFixed(1);
}

// 17
function count17(){
  document.getElementById("count17").innerText=text17.value.length;
}

// 18
function check18(){
  btn18.disabled=input18.value==="";
}

// 19
function radio19(val){
  res19.innerText="Selected: "+val;
}

// 21
function check21(){
  msg21.innerText=val21.value>10?"High":"Low";
}

// 22
function search22(val){
  res22.innerText="Searching: "+val;
}

// 23
function load23(){
  loadMsg23.innerText="Loading...";
  setTimeout(()=>loadMsg23.innerText="Submitted",2000);
}

// 24
function reset24(){
  input24.value="";
}

// 25
function select25(val){
  res25.innerText="Selected: "+val;
}

// 26
let stepCount26=1;
function next26(){
  stepCount26++;
  step26.innerText="Step "+stepCount26;
}

// 27
function validate27(){
  msg27.innerText=step27.value===""?"Fill field":"Next Step Allowed";
}

// 28
function addRow28(){
  table28.innerHTML+="<tr><td>"+name28.value+"</td></tr>";
}

// 29
function editRow29(){
  let row=document.querySelector("#table28 tr td");
  if(row) row.innerText=edit29.value;
}

// 30
function deleteRow30(){
  if(confirm("Delete row?")){
    let row=document.querySelector("#table28 tr");
    if(row) row.remove();
  }
}

// 31
function filter31(val){
  filter31.innerText = val === 'A' ? 'A A' : 'B B';
}

// 32
total32.innerText="Records: 4";

// 33 & 34
const fields = ["name", "email", "message"];

// Restore saved data on page load (Task 34)
window.onload = () => {
  fields.forEach(id => {
    const value = localStorage.getItem(id);
    if(value){
      document.getElementById(id).value = value;
    }
  });

  notify("Form data restored from localStorage", "info");
};

// Auto-save while typing (Task 33)
fields.forEach(id => {
  document.getElementById(id).addEventListener("input", e => {
    localStorage.setItem(id, e.target.value);
    notify("Form auto-saved", "success");
  });
});

// Clear form and storage
function clearForm(){
  fields.forEach(id => {
    document.getElementById(id).value = "";
    localStorage.removeItem(id);
  });
  notify("Form cleared successfully", "info");
}

// Dashboard Notification System (Task 35)
function notify(message, type){
  const area = document.getElementById("notificationArea");

  const div = document.createElement("div");
  div.className = `notification ${type}`;
  div.innerText = message;

  area.appendChild(div);

  setTimeout(() => div.remove(), 3000);
}


// Task 36: Notification system
function notify(msg, type){
  const area = document.getElementById("notificationArea");
  const div = document.createElement("div");
  div.className = `notification ${type}`;
  div.innerText = msg;
  area.appendChild(div);
  setTimeout(()=>div.remove(), 3000);
}

// Task 37: Conditional fields
function toggleConditional(){
  const val = document.getElementById("roleSelect").value;
  document.getElementById("adminField").classList.toggle("hidden", val!=='admin');
}

// Task 38: Disable button if invalid
function validateAction(){
  const val = document.getElementById("validInput").value;
  document.getElementById("actionBtn").disabled = val.trim()==='';
}

// Task 41: Highlight active menu
function highlightMenu(el){
  document.querySelectorAll(".sidebar li").forEach(li=>li.classList.remove("active"));
  el.classList.add("active");
}

// Task 42: Logout and clear data
function logout(){
  localStorage.clear();
  notify("Logged out successfully","info");
  document.getElementById("lastLogin").innerText="";
}

// Task 43: Last login
window.onload = () => {
  const last = localStorage.getItem("lastLogin");
  if(last) document.getElementById("lastLogin").innerText = "Last Login: "+last;
  localStorage.setItem("lastLogin", new Date().toLocaleString());
};

// Task 44: Profile update
function updateProfile(){
  const name = document.getElementById("profileName").value;
  const email = document.getElementById("profileEmail").value;
  document.getElementById("profilePreview").innerText = `Name: ${name}, Email: ${email}`;
  notify("Profile updated successfully","success");
}

// Task 45 & 46: Table widget + prevent duplicates
let tableEntries = [];
function addTableEntry(){
  const val = document.getElementById("tableInput").value.trim();
  if(val==='' || tableEntries.includes(val)){
    notify("Duplicate or empty entry","error"); return;
  }
  tableEntries.push(val);
  const tbody = document.querySelector("#dataTable tbody");
  const row = tbody.insertRow();
  row.insertCell(0).innerText = tbody.rows.length;
  row.insertCell(1).innerText = val;
  document.getElementById("tableInput").value='';
  updateSummary();
}

// Task 47: Dashboard summary
function updateSummary(){
  document.getElementById("totalEntries").innerText = tableEntries.length;
}

// Task 48: Reset dashboard with confirmation
function resetDashboard(){
  if(confirm("Are you sure you want to reset all dashboard data?")){
    tableEntries = [];
    document.querySelector("#dataTable tbody").innerHTML='';
    updateSummary();
    notify("Dashboard reset","info");
  }
}

// Task 49: Submission history
function submitHistory(){
  const val = document.getElementById("historyInput").value.trim();
  if(val===''){notify("Cannot submit empty value","error"); return;}
  const ul = document.getElementById("submissionHistory");
  const li = document.createElement("li");
  li.innerText = `${new Date().toLocaleString()}: ${val}`;
  ul.appendChild(li);
  document.getElementById("historyInput").value='';
  notify("Form submitted","success");
}

// Task 50: Admin dashboard functionality is combined from above tasks

let userCount = 0;

// Add user
function addUser(e){
  e.preventDefault();

  const name = userName.value;
  const email = userEmail.value;

  userCount++;

  userTable.innerHTML += `
    <tr>
      <td>${userCount}</td>
      <td>${name}</td>
      <td>${email}</td>
      <td>
        <button onclick="deleteRow(this)">Delete</button>
      </td>
    </tr>
  `;

  updateSummary();
  notify.innerText = "User added successfully";

  userName.value = "";
  userEmail.value = "";
}

// Delete row
function deleteRow(btn){
  if(confirm("Delete this user?")){
    btn.closest("tr").remove();
    notify.innerText = "User deleted";
    updateSummary();
  }
}

// Update summary
function updateSummary(){
  const rows = document.querySelectorAll("#userTable tr").length;
  totalUsers.innerText = rows;
  totalRecords.innerText = rows;
}

// Reset dashboard
function resetDashboard(){
  if(confirm("Reset dashboard data?")){
    userTable.innerHTML = "";
    userCount = 0;
    updateSummary();
    notify.innerText = "Dashboard reset";
  }
}

// Logout
function logout(){
  localStorage.clear();
  alert("Logged out");
}
