// Task 1
const name1 = document.getElementById('name1');
name1.onclick = () => { name1.style.color = name1.style.color === 'red' ? 'blue' : 'red'; };

// Task 2
document.getElementById('btn1_2').onclick = () => alert('Button 1 clicked');
document.getElementById('btn2_2').onclick = () => alert('Button 2 clicked');

// Task 3
document.getElementById('show3').onclick = () => alert(document.getElementById('input3').value);

// Task 4
const hoverDiv = document.getElementById('hoverDiv');
hoverDiv.onmouseenter = () => hoverDiv.style.background = 'lightblue';
hoverDiv.onmouseleave = () => hoverDiv.style.background = '';

// Task 5
document.getElementById('reset5').onclick = () => document.getElementById('form5').reset();

// Task 6
document.getElementById('show6').onclick = () => document.getElementById('img6').style.display = 'block';
document.getElementById('hide6').onclick = () => document.getElementById('img6').style.display = 'none';

// Task 7
document.getElementById('bold7').onclick = () => document.getElementById('para7').style.fontWeight = 'bold';

// Task 8
document.getElementById('list8').style.listStyleType = 'circle';

// Task 9
document.getElementById('charInput9').oninput = function() {
  document.getElementById('charCount9').innerText = this.value.length;
};

// Task 10
document.getElementById('toggleBtn10').onclick = () => {
  const t = document.getElementById('toggle10');
  t.style.display = t.style.display === 'none' ? 'block' : 'none';
};

// Task 11
const borderInput = document.getElementById('borderInput11');
borderInput.onfocus = () => borderInput.style.borderColor = 'red';
borderInput.onblur = () => borderInput.style.borderColor = '';

// Task 12
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
document.getElementById('day12').innerText = 'Today is ' + days[new Date().getDay()];

// Task 13
const check13 = document.getElementById('check13');
const btn13 = document.getElementById('btn13');
check13.onchange = () => btn13.disabled = !check13.checked;

// Task 14
document.getElementById('fontBtn14').onclick = () => {
  document.getElementById('font14').style.fontFamily = 'Courier New';
};

// Task 16
document.getElementById('form16').onsubmit = e => {
  if(!confirm('Are you sure you want to submit?')) e.preventDefault();
};

// Task 17
document.getElementById('num1_17').oninput = function() {
  document.getElementById('num2_17').value = this.value * 2;
};

// Task 18
document.getElementById('clear18').onclick = () => document.getElementById('para18').innerText = '';

// Task 19
document.getElementById('check19').onclick = () => {
  const num = Number(document.getElementById('num19').value);
  alert(num % 2 === 0 ? 'Even' : 'Odd');
};

// Task 20
document.getElementById('bg20').onchange = function() {
  document.body.style.backgroundColor = this.value;
};

// Task 21
document.getElementById('str21').oninput = function() {
  document.getElementById('len21').innerText = this.value.length;
};

// Task 23: Add Multiple CSS Classes via JS
document.getElementById('classBtn23').onclick = () => {
  const para = document.getElementById('para23');
  // Add multiple classes
  para.classList.add('class1', 'class2');
  // Optional: change style immediately for visual feedback
  para.style.color = 'green';
  para.style.fontWeight = 'bold';
};


// Task 25
window.onload = () => {
  document.getElementById('loadMsg25').innerText = 'Page loaded successfully';
};


/* ========== Task 26: Allow Only Numbers ========== */
document.getElementById("num26").addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});

/* ========== Task 27: Remove List Item on Click ========== */
document.querySelectorAll("#list27 li").forEach(li => {
  li.onclick = () => li.remove();
});

/* ========== Task 28: Password Length Validation ========== */
document.getElementById("check28").onclick = () => {
  const pwd = document.getElementById("pwd28").value;
  document.getElementById("msg28").textContent =
    pwd.length < 8 ? "Password must be at least 8 characters" : "Password OK";
};

/* ========== Task 30: Change Multiple Elements Styles ========== */
document.getElementById("style30").onclick = () => {
  document.querySelectorAll(".multi30").forEach(p => {
    p.style.color = "blue";
    p.style.fontWeight = "bold";
  });
};

/* ========== Task 31: localStorage Username ========== */
document.getElementById("save31").onclick = () => {
  const user = document.getElementById("user31").value;
  localStorage.setItem("username", user);
  document.getElementById("show31").textContent = user;
};
document.getElementById("show31").textContent =
  localStorage.getItem("username") || "";

/* ========== Task 32: Disable Right Click ========== */
document.addEventListener("contextmenu", e => e.preventDefault());

/* ========== Task 33: Count Vowels ========== */
document.getElementById("vowel33").addEventListener("input", function () {
  const count = this.value.match(/[aeiou]/gi);
  document.getElementById("count33").textContent = count ? count.length : 0;
});

/* ========== Task 34: Modal Box ========== */
const modal = document.getElementById("modal34");
const overlay = document.getElementById("overlay34");

document.getElementById("openModal34").onclick = () => {
  modal.style.display = "block";
  overlay.style.display = "block";
};
document.getElementById("close34").onclick = () => {
  modal.style.display = "none";
  overlay.style.display = "none";
};

/* ========== Task 35: Sort Numbers ========== */
document.getElementById("sort35").onclick = () => {
  const nums = document.getElementById("nums35").value
    .split(",")
    .map(Number)
    .sort((a, b) => a - b);
  document.getElementById("out35").textContent = nums.join(", ");
};

/* ========== Task 36: Change Image Source ========== */
// Task 36: Change Image Source
document.getElementById("img36").addEventListener("change", function () {
  document.getElementById("show36").src = this.value;
});

/* ========== Task 37: Active Menu Highlight ========== */
document.querySelectorAll("#menu37 li").forEach(li => {
  li.onclick = function () {
    document.querySelectorAll("#menu37 li").forEach(i => i.style.color = "black");
    this.style.color = "red";
  };
});

/* ========== Task 38: Match Passwords ========== */
document.getElementById("check38").onclick = () => {
  const p1 = document.getElementById("pw1_38").value;
  const p2 = document.getElementById("pw2_38").value;
  document.getElementById("msg38").textContent =
    p1 === p2 ? "Passwords Match" : "Passwords Do Not Match";
};

/* ========== Task 39: Input Length Warning ========== */
document.getElementById("input39").addEventListener("input", function () {
  document.getElementById("warn39").textContent =
    this.value.length > 10 ? "Input too long!" : "";
});

/* ========== Task 40: Scroll to Section ========== */
document.getElementById("scroll40").onclick = () => {
  document.getElementById("section40").scrollIntoView({ behavior: "smooth" });
};

/* ========== Task 41: Log Form Values ========== */
document.getElementById("form41").onsubmit = e => {
  e.preventDefault();
  const data = new FormData(e.target);
  data.forEach((v, k) => console.log(k + ": " + v));
};

/* ========== Task 42: Toggle Text ========== */
document.getElementById("btn42").onclick = () => {
  const p = document.getElementById("toggle42");
  p.textContent = p.textContent === "Text A" ? "Text B" : "Text A";
};

/* ========== Task 43: FAQ Show / Hide ========== */
document.querySelector(".faq-question").onclick = () => {
  const ans = document.querySelector(".faq-answer");
  ans.style.display = ans.style.display === "none" ? "block" : "none";
};

/* ========== Task 44: Copy Message ========== */
document.addEventListener("copy", () => {
  document.getElementById("msg44").textContent = "Text copied!";
});

/* ========== Task 45: Uppercase Text ========== */
document.getElementById("btn45").onclick = () => {
  document.getElementById("out45").textContent =
    document.getElementById("text45").value.toUpperCase();
};

/* ========== Task 46: Word Count ========== */
document.getElementById("area46").addEventListener("input", function () {
  const words = this.value.trim().split(/\s+/).filter(w => w);
  document.getElementById("count46").textContent = words.length;
});

/* ========== Task 47: Disable All Inputs ========== */
document.getElementById("disable47").onclick = () => {
  document.querySelectorAll("input").forEach(i => i.disabled = true);
};

/* ========== Task 49: Success Message Without Reload ========== */
document.getElementById("form49").onsubmit = e => {
  e.preventDefault();
  document.getElementById("msg49").textContent = "Form submitted successfully!";
};

/* ========== Task 50: Change Page Title ========== */
document.getElementById("btn50").onclick = () => {
  document.title = document.getElementById("title50").value;
};
