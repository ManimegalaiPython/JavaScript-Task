/* 1 LOGIN */
function login(){
  if(loginUser.value && loginPass.value){
    localStorage.setItem("user",loginUser.value);
    loginMsg.textContent="Logged In";
  }else{
    loginMsg.textContent="Invalid Login";
  }
}
function logout(){
  localStorage.removeItem("user");
  loginMsg.textContent="Logged Out";
}

/* 2 CRUD */
let users=[];
function addUser(){
  users.push(crudName.value);
  renderUsers();
}
function renderUsers(){
  crudList.innerHTML="";
  users.forEach((u,i)=>{
    crudList.innerHTML+=`<li>${u}
    <button onclick="users.splice(${i},1);renderUsers()">❌</button></li>`;
  });
}

/* 3 TABLE */
const tableData=["Apple","Banana","Orange"];
function renderTable(data){
  tableBody.innerHTML="";
  data.forEach(d=>tableBody.innerHTML+=`<tr><td>${d}</td></tr>`);
}
renderTable(tableData);
function filterTable(v){
  renderTable(tableData.filter(d=>d.toLowerCase().includes(v.toLowerCase())));
}

/* 4 VALIDATION */
function validateForm(){
  formError.textContent=/@/.test(email.value)?"Valid Email":"Invalid Email";
}

/* 5 TODO */
let todos=JSON.parse(localStorage.getItem("todos")||"[]");
function addTodo(){
  todos.push(todoInput.value);
  saveTodos();
}
function saveTodos(){
  localStorage.setItem("todos",JSON.stringify(todos));
  todoList.innerHTML="";
  todos.forEach(t=>todoList.innerHTML+=`<li>${t}</li>`);
}
saveTodos();

/* 6 THEME */
function toggleTheme(){
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",document.body.classList.contains("dark"));
}
if(localStorage.getItem("theme")==="true"){
  document.body.classList.add("dark");
}

/* 7 PAGINATION */
let page=0;
const pageData=[1,2,3,4,5,6];
function renderPage(){
  pageList.innerHTML=`<li>${pageData[page]}</li>`;
}
renderPage();
function nextPage(){ if(page<pageData.length-1){page++;renderPage()} }
function prevPage(){ if(page>0){page--;renderPage()} }

/* 8 MODAL */
function openModal(){ modal.style.display="flex"; }
function closeModal(){ modal.style.display="none"; }

/* 9 MULTI STEP */
let step=1;
function nextStep(){
  step++;
  stepText.textContent="Step "+step;
}

/* 10 DASHBOARD */
function showPanel(id){
  document.querySelectorAll(".panel").forEach(p=>p.style.display="none");
  document.getElementById(id).style.display="block";
}
showPanel("home");



/* 11 SEARCH SUGGESTION */
const items=["Apple","Banana","Orange","Mango","Grapes"];
function showSuggestions(){
  suggestions.innerHTML="";
  items.filter(i=>i.toLowerCase().includes(searchBox.value.toLowerCase()))
       .forEach(i=>suggestions.innerHTML+=`<li>${i}</li>`);
}

/* 12 PASSWORD STRENGTH */
function checkStrength(){
  let val=pwd.value;
  pwdStrength.textContent=
    val.length<6?"Weak":
    /[A-Z]/.test(val)&&/[0-9]/.test(val)?"Strong":"Medium";
}

/* 13 NOTIFICATION */
function showNotification(){
  notification.textContent="This will auto dismiss";
  notification.style.display="block";
  setTimeout(()=>notification.style.display="none",3000);
}

/* 14 AUTO SAVE */
function autoSave(){
  localStorage.setItem("autoName",autoName.value);
}
autoName.value=localStorage.getItem("autoName")||"";

/* 15 PROFILE PREVIEW */
function updateProfile(){
  profilePreview.innerHTML=
    `<b>${profileName.value}</b><br>${profileEmail.value}`;
}

/* 16 SORTABLE TABLE */
let sortDirection = {};

function sortTable(colIndex){
  const table = document.getElementById("dataTable");
  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.rows);

  // Toggle direction
  sortDirection[colIndex] = !sortDirection[colIndex];
  const direction = sortDirection[colIndex] ? 1 : -1;

  rows.sort((a, b) => {
    let valA = a.cells[colIndex].innerText;
    let valB = b.cells[colIndex].innerText;

    // Number sorting
    if(!isNaN(valA) && !isNaN(valB)){
      return direction * (valA - valB);
    }

    // Text sorting
    return direction * valA.localeCompare(valB);
  });

  // Re-render rows
  rows.forEach(row => tbody.appendChild(row));
}


/* 17 NAVBAR */
function toggleNav(){
  navbar.classList.toggle("hidden");
}

/* 18 ROLE BASED UI */
function setRole(role){
  roleText.textContent=
    role==="Admin"?"Admin Access Enabled":"User Access Only";
}

/* 19 CART */
let total=0;
function addToCart(price){
  total+=price;
  cartTotal.textContent="Total: ₹"+total;
}

/* 20 REUSABLE COMPONENT */
function createCard(title,text){
  const div=document.createElement("div");
  div.className="card";
  div.innerHTML=`<h4>${title}</h4><p>${text}</p>`;
  componentArea.appendChild(div);
}


/* 22 CONFIRM */
function confirmDelete(){
  confirmResult.textContent=
    confirm("Are you sure?")?"Deleted":"Cancelled";
}

/* 23 IMAGE */
function previewImg(e){
  imgPreview.src=URL.createObjectURL(e.target.files[0]);
}

/* 24 TRACKER */
let count24=0;
function submitTrack(){
  count24++;
  trackCount.textContent=count24;
}

/* 25 SESSION */
let time=10;
timer25.textContent=time;
setInterval(()=>{
  time--;
  timer25.textContent=time;
  if(time===0) alert("Session Expired");
},1000);

/* 26 SETTINGS */
function saveSetting(cb){
  localStorage.setItem("alerts",cb.checked);
}

/* 27 DROPDOWN */
const cities={
  India:["Delhi","Mumbai"],
  USA:["New York","Texas"]
};
function loadCities(c){
  citySelect.innerHTML="";
  (cities[c]||[]).forEach(city=>{
    citySelect.innerHTML+=`<option>${city}</option>`;
  });
}

/* 28 HIGHLIGHT */
function highlightText(val){
  text28.innerHTML=text28.textContent.replace(
    new RegExp(val,"gi"),
    m=>`<mark>${m}</mark>`
  );
}

/* 29 PROGRESS */
function updateProgress(v){
  bar29.style.width=v+"%";
}

/* 30 VALIDATION LIB */
function validateEmail(){
  valMsg30.textContent=
    /^\S+@\S+\.\S+$/.test(email30.value)
    ?"Valid Email":"Invalid Email";
}

/* 31 ADMIN PANEL */
function addAdmin(){
  adminList31.innerHTML+=`<li>${admin31.value}</li>`;
  admin31.value="";
}

/* 32 ACTIVITY */
function logActivity(act){
  activityLog.innerHTML+=`<li>${act}</li>`;
}

/* 33 OFFLINE */
function saveOffline(){
  localStorage.setItem("offline",offlineInput.value);
  offlineStatus.textContent="Saved Offline";
}

/* 34 CONDITIONAL */
function checkAge(v){
  wizardMsg.textContent=
    v==="minor"?"Parental consent needed":"Access granted";
}

/* 35 NOTIFY */
function addNotify(){
  notifyList.innerHTML+=`<li>New Notification</li>`;
}

/* 37 FEEDBACK */
let ratings=[];
function addFeedback(){
  ratings.push(+rate37.value);
  avg37.textContent=
    "Average: "+(ratings.reduce((a,b)=>a+b,0)/ratings.length).toFixed(1);
}

/* 38 STATE */
let state=0;
function increment(){state++;state38.textContent=state}
function decrement(){state--;state38.textContent=state}

/* 39 TABS */
function openTab(id){
  t1.classList.add("hidden");
  t2.classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

/* 40 SEARCH DASH */
const data40=["User","Order","Invoice","Payment"];
function filterDash(v){
  dashList.innerHTML="";
  data40.filter(d=>d.toLowerCase().includes(v.toLowerCase()))
        .forEach(d=>dashList.innerHTML+=`<li>${d}</li>`);
}
filterDash("");


/* 41 FORM RULES ENGINE */
function checkRules(){
  const age=age41.value;
  ruleResult.textContent=
    age>=18?"Eligible":"Not Eligible (Rule Applied)";
}

/* 42 LOGIN ATTEMPT LIMIT */
let attempts=0;
function login42(){
  attempts++;
  if(attempts>=3){
    attemptMsg.textContent="Account Locked!";
  }else{
    attemptMsg.textContent=`Attempt ${attempts}`;
  }
}

/* 43 DYNAMIC CONTENT LOADER */
function loadContent(page){
  const data={
    about:"This is About Content",
    contact:"Contact us at support@mail.com"
  };
  contentArea.textContent=data[page];
}

/* 44 REPORTING DASHBOARD */
function generateReport(){
  report44.innerHTML="";
  ["Users:120","Sales:45000","Orders:75"]
    .forEach(r=>report44.innerHTML+=`<li>${r}</li>`);
}

/* 45 KEYBOARD ACCESSIBILITY */
function handleKey(e){
  if(e.key==="Enter"||e.key===" "){
    keyMsg.textContent="Keyboard Action Triggered";
  }
}

/* 46 UI ERROR HANDLING */
function divide(){
  try{
    const v=Number(num46.value);
    if(v===0) throw "Cannot divide by zero";
    error46.textContent=100/v;
  }catch(err){
    error46.textContent=err;
  }
}

/* 47 THEME CUSTOMIZER */
function setTheme(theme){
  document.body.className="";
  document.body.classList.add(theme);
  localStorage.setItem("theme",theme);
}
document.body.classList.add(localStorage.getItem("theme")||"");

/* 48 USER ONBOARDING */
function nextOnboard(step){
  document.querySelectorAll("[id^='onboard']")
    .forEach(d=>d.classList.add("hidden"));
  document.getElementById("onboard"+step).classList.remove("hidden");
}

/* 49 CLIENT SIDE ROUTING */
function navigate(route){
  const views={
    home:"Welcome Home",
    profile:"User Profile Page",
    settings:"Settings Page"
  };
  routeView.textContent=views[route];
}

/* 50 COMPLETE MINI APP */
let users50=[];
function addUser50(){
  const name=name50.value;
  const email=email50.value;
  if(!name||!/^\S+@\S+\.\S+$/.test(email)) return alert("Invalid Data");
  users50.push({name,email});
  render50();
}
function render50(){
  userTable50.innerHTML="";
  users50.forEach(u=>{
    userTable50.innerHTML+=
      `<tr><td>${u.name}</td><td>${u.email}</td></tr>`;
  });
  count50.textContent=users50.length;
}
