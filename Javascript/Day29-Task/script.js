function evenOdd(){
  let n = document.getElementById("t1").value;
  document.getElementById("r1").innerHTML =
    n % 2 === 0 ? "Even Number" : "Odd Number";
}

function greaterTwo(){
  let a = Number(t2a.value);
  let b = Number(t2b.value);
  document.getElementById("r2").innerHTML =
    a > b ? a + " is greater" : b + " is greater";
}

function highestMark(){
  let max = Math.max(t3a.value, t3b.value, t3c.value);
  document.getElementById("r3").innerHTML = "Highest mark: " + max;
}

function pnz(){
  let n = t4.value;
  document.getElementById("r4").innerHTML =
    n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero";
}

function sumN(){
  let n = Number(t5.value), sum = 0;
  for(let i=1;i<=n;i++) sum += i;
  document.getElementById("r5").innerHTML = "Sum = " + sum;
}

function reverseNumber(){
  document.getElementById("r6").innerHTML =
    t6.value.split('').reverse().join('');
}

function reverseWord(){
  document.getElementById("r7").innerHTML =
    t7.value.split('').reverse().join('');
}

function palindrome(){
  let w = t8.value;
  document.getElementById("r8").innerHTML =
    w === w.split('').reverse().join('')
    ? "Palindrome" : "Not a Palindrome";
}

function vowelCount(){
  let c = 0;
  for(let ch of t9.value.toLowerCase()){
    if("aeiou".includes(ch)) c++;
  }
  document.getElementById("r9").innerHTML = "Vowels: " + c;
}

function factorial(){
  let n = Number(t10.value), f = 1;
  for(let i=1;i<=n;i++) f *= i;
  document.getElementById("r10").innerHTML = "Factorial: " + f;
}


 // Task 11
    function displayFibonacci() {
      const n = Number(document.getElementById("fibN").value);
      let a = 0, b = 1, result = [];
      for(let i=0;i<n;i++){
        result.push(a);
        [a, b] = [b, a + b];
      }
      document.getElementById("fibResult").innerText = result.join(", ");
    }

    // Task 12
    function checkPrime() {
      const num = Number(document.getElementById("primeNum").value);
      if(num < 2){
        document.getElementById("primeResult").innerText = num + " is not prime";
        return;
      }
      for(let i=2;i<=Math.sqrt(num);i++){
        if(num % i === 0){
          document.getElementById("primeResult").innerText = num + " is not prime";
          return;
        }
      }
      document.getElementById("primeResult").innerText = num + " is prime";
    }

    // Task 13
    function countDigits() {
      const num = document.getElementById("digitNum").value;
      document.getElementById("digitResult").innerText = "Total digits: " + num.length;
    }

    // Task 14
    function sumDigits() {
      const num = document.getElementById("sumDigitNum").value;
      let sum = 0;
      for(let char of num) sum += Number(char);
      document.getElementById("sumDigitResult").innerText = "Sum of digits: " + sum;
    }

    // Task 15
    function convertCtoF() {
      const c = Number(document.getElementById("celsius").value);
      const f = (c * 9/5) + 32;
      document.getElementById("fahrenheitResult").innerText = c + "°C = " + f.toFixed(2) + "°F";
    }

    // Task 16
    function calculateAverage() {
      const arr = document.getElementById("avgArray").value.split(",").map(Number);
      const avg = arr.reduce((a,b)=>a+b,0)/arr.length;
      document.getElementById("averageResult").innerText = "Average: " + avg.toFixed(2);
    }

    // Task 17
    function findHighest() {
      const arr = document.getElementById("highArray").value.split(",").map(Number);
      const max = Math.max(...arr);
      document.getElementById("highestResult").innerText = "Highest value: " + max;
    }

    // Task 18
    function findLowest() {
      const arr = document.getElementById("lowArray").value.split(",").map(Number);
      const min = Math.min(...arr);
      document.getElementById("lowestResult").innerText = "Lowest value: " + min;
    }

    // Task 19
    function countEvenNumbers() {
      const arr = document.getElementById("evenArray").value.split(",").map(Number);
      const count = arr.filter(x => x % 2 === 0).length;
      document.getElementById("evenResult").innerText = "Even numbers count: " + count;
    }

    // Task 20
    function displayUnique() {
      const arr = document.getElementById("uniqueArray").value.split(",").map(Number);
      const unique = [...new Set(arr)];
      document.getElementById("uniqueResult").innerText = "Unique values: " + unique.join(", ");
    }


    // TASK 21
function checkLeapYear() {
  const year = Number(document.getElementById("year").value);
  const res = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? "Leap Year" : "Not Leap Year";
  document.getElementById("leapResult").innerText = res;
}

// TASK 22
function sortAscending() {
  const arr = document.getElementById("sortArray").value.split(",").map(Number);
  arr.sort((a,b)=>a-b);
  document.getElementById("sortResult").innerText = arr.join(", ");
}

// TASK 23
function swapNumbers() {
  let a = Number(document.getElementById("swapA").value);
  let b = Number(document.getElementById("swapB").value);
  a = a + b; b = a - b; a = a - b;
  document.getElementById("swapResult").innerText = `After swap: a=${a}, b=${b}`;
}

// TASK 24
function stringLength() {
  const str = document.getElementById("strLength").value;
  let len = 0;
  while(str[len] !== undefined) len++;
  document.getElementById("strLengthResult").innerText = `Length: ${len}`;
}

// TASK 25
function wordCount() {
  const sentence = document.getElementById("sentenceCount").value.trim();
  const count = sentence === "" ? 0 : sentence.split(/\s+/).length;
  document.getElementById("wordCountResult").innerText = `Total words: ${count}`;
}

// TASK 26
function checkAnagram() {
  const w1 = document.getElementById("ana1").value.toLowerCase().replace(/\s/g,'');
  const w2 = document.getElementById("ana2").value.toLowerCase().replace(/\s/g,'');
  const res = w1.split("").sort().join("") === w2.split("").sort().join("") ? "Anagrams" : "Not Anagrams";
  document.getElementById("anaResult").innerText = res;
}

// TASK 27
function secondLargest() {
  const arr = Array.from(new Set(document.getElementById("secondArray").value.split(",").map(Number)));
  arr.sort((a,b)=>b-a);
  document.getElementById("secondResult").innerText = arr.length < 2 ? "Not enough elements" : arr[1];
}

// TASK 28
function mergeArrays() {
  const a1 = document.getElementById("mergeA").value.split(",");
  const a2 = document.getElementById("mergeB").value.split(",");
  const merged = [...new Set([...a1,...a2])];
  document.getElementById("mergeResult").innerText = merged.join(", ");
}

// TASK 29
function countValues() {
  const arr = document.getElementById("countArray").value.split(",");
  const freq = {};
  arr.forEach(v => freq[v] = (freq[v]||0)+1);
  document.getElementById("countResult").innerText = JSON.stringify(freq);
}

// TASK 30
function firstNonRepeating() {
  const str = document.getElementById("firstUnique").value;
  const freq = {};
  for(let ch of str) freq[ch] = (freq[ch]||0)+1;
  const first = Object.keys(freq).find(k=>freq[k]===1);
  document.getElementById("firstUniqueResult").innerText = first || "No unique character";
}

// TASK 31
function flattenArray() {
  const arr = JSON.parse(document.getElementById("nestedArray").value);
  const flat = arr.flat();
  document.getElementById("flattenResult").innerText = flat.join(", ");
}

// TASK 32
 function truthyValues() {
      // Get input and split by commas
      let arr = document.getElementById("mixedArray").value.split(",");

      // Convert string values to proper types (numbers, booleans, null, undefined)
      arr = arr.map(v => {
        v = v.trim();
        if(v === "true") return true;
        if(v === "false") return false;
        if(v === "null") return null;
        if(v === "undefined") return undefined;
        if(!isNaN(v) && v !== "") return Number(v);
        return v; // keep as string
      });

      // Filter only truthy values
      const truthyArr = arr.filter(v => Boolean(v));

      // Display result
      document.getElementById("truthyResult").innerText = truthyArr.length 
        ? "Truthy values: " + truthyArr.join(", ") 
        : "No truthy values found";
    }

// TASK 33
  function commonValues() {
      // Get values from input fields and split into arrays
      const arr1 = document.getElementById("array1").value.split(",").map(v => v.trim());
      const arr2 = document.getElementById("array2").value.split(",").map(v => v.trim());

      // Find common values
      const common = arr1.filter(value => arr2.includes(value));

      // Remove duplicates in case of repeated values
      const uniqueCommon = [...new Set(common)];

      // Display result
      document.getElementById("commonResult").innerText = uniqueCommon.length
        ? "Common values: " + uniqueCommon.join(", ")
        : "No common values found";
    }
    
 // TASK 34 - Rotate Array by K Positions
    function rotateArray() {
      let arr = document.getElementById("rotateArray").value.split(",").map(v => v.trim());
      let k = Number(document.getElementById("rotateK").value);

      if (arr.length === 0 || isNaN(k)) {
        document.getElementById("rotateResult").innerText = "Please enter valid array and K value.";
        return;
      }

      k = k % arr.length; // handle K greater than array length
      if (k < 0) k = arr.length + k; // handle negative rotation

      const rotated = arr.slice(-k).concat(arr.slice(0, -k));
      document.getElementById("rotateResult").innerText = "Rotated Array: " + rotated.join(", ");
    }

    // TASK 35 - Longest Word in a Sentence
    function longestWord() {
      const sentence = document.getElementById("sentenceInput").value.trim();
      if (!sentence) {
        document.getElementById("longestResult").innerText = "Please enter a sentence.";
        return;
      }

      const words = sentence.split(/\s+/);
      let longest = words[0];

      words.forEach(word => {
        if (word.length > longest.length) longest = word;
      });

      document.getElementById("longestResult").innerText = "Longest word: " + longest;
    }

// TASK 36
function titleCase() {
  const sentence = document.getElementById("titleCaseSentence").value.toLowerCase();
  const title = sentence.split(/\s+/).map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(" ");
  document.getElementById("titleCaseResult").innerText = title;
}

// TASK 37
function allUnique() {
  const str = document.getElementById("uniqueStr").value;
  const set = new Set(str);
  const res = set.size === str.length ? "All unique" : "Not unique";
  document.getElementById("uniqueStrResult").innerText = res;
}

// TASK 38
function groupByType() {
  const arr = document.getElementById("groupArray").value.split(",").map(v=>{
    if(!isNaN(v) && v !== "") return Number(v);
    else if(v==="true") return true;
    else if(v==="false") return false;
    else return v;
  });
  const grouped = {};
  arr.forEach(v=>{
    const type = typeof v;
    if(!grouped[type]) grouped[type]=[];
    grouped[type].push(v);
  });
  document.getElementById("groupResult").innerText = JSON.stringify(grouped);
}

// TASK 39
function findMissing() {
  const arr = document.getElementById("missingArray").value.split(",").map(Number).sort((a,b)=>a-b);
  const n = arr.length;
  let missing = null;
  for(let i=0;i<n;i++){
    if(arr[i+1]-arr[i] > 1){
      missing = arr[i]+1;
      break;
    }
  }
  document.getElementById("missingResult").innerText = missing===null?"No missing number":missing;
}

// TASK 40
function charFrequency() {
  const str = document.getElementById("freqStr").value;
  const freq = {};
  for(let ch of str) freq[ch] = (freq[ch]||0)+1;
  document.getElementById("freqResult").innerText = JSON.stringify(freq);
}


// TASK 41
function toUpperCaseWords() {
  const arr = document.getElementById("wordsArray").value.split(",");
  const upper = arr.map(w => w.trim().toUpperCase());
  document.getElementById("upperResult").innerText = upper.join(", ");
}

// TASK 42
function isSorted() {
  const arr = document.getElementById("sortedArray").value.split(",").map(Number);
  const sorted = arr.every((v,i,a) => i===0 || a[i]>=a[i-1]);
  document.getElementById("sortedResult").innerText = sorted ? "Array is sorted" : "Array is not sorted";
}

// TASK 43
function splitChunks() {
  const arr = document.getElementById("chunkArray").value.split(",").map(Number);
  const size = Number(document.getElementById("chunkSize").value);
  const chunks = [];
  for(let i=0;i<arr.length;i+=size) chunks.push(arr.slice(i,i+size));
  document.getElementById("chunkResult").innerText = JSON.stringify(chunks);
}

// TASK 44
function removeValue() {
  const arr = document.getElementById("removeArray").value.split(",");
  const val = document.getElementById("removeValue").value;
  const result = arr.filter(v=>v!==val);
  document.getElementById("removeResult").innerText = result.join(", ");
}

// TASK 45
function commonMultiple() {
  const a1 = document.getElementById("multiArray1").value.split(",");
  const a2 = document.getElementById("multiArray2").value.split(",");
  const a3 = document.getElementById("multiArray3").value.trim() ? document.getElementById("multiArray3").value.split(",") : null;
  let common = a1.filter(v => a2.includes(v));
  if(a3) common = common.filter(v => a3.includes(v));
  document.getElementById("commonMultipleResult").innerText = common.join(", ");
}

// TASK 46
function randomInRange() {
  const min = Number(document.getElementById("randMin").value);
  const max = Number(document.getElementById("randMax").value);
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("randomResult").innerText = rand;
}

// TASK 47
function validateEmail() {
  const email = document.getElementById("emailInput").value;
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  document.getElementById("emailResult").innerText = valid ? "Valid Email" : "Invalid Email";
}

// TASK 48
function totalAverage() {
  const arr = document.getElementById("marksArray").value.split(",").map(Number);
  const total = arr.reduce((a,b)=>a+b,0);
  const avg = total/arr.length;
  document.getElementById("marksResult").innerText = `Total: ${total}, Average: ${avg.toFixed(2)}`;
}

// TASK 49
 function sortObjects() {
      const input = document.getElementById("objectsArray").value.trim();
      const prop = document.getElementById("sortProp").value.trim();

      if (!input || !prop) {
        document.getElementById("objectsResult").innerText = "Please enter both JSON array and property name.";
        return;
      }

      let arr;
      try {
        arr = JSON.parse(input);
        if (!Array.isArray(arr)) throw new Error();
      } catch (e) {
        document.getElementById("objectsResult").innerText = "Invalid JSON array!";
        return;
      }

      // Sort the array based on the given property
      arr.sort((a, b) => {
        if(a[prop] === undefined || b[prop] === undefined) return 0;
        if (typeof a[prop] === "number" && typeof b[prop] === "number") {
          return a[prop] - b[prop];
        } else {
          return String(a[prop]).localeCompare(String(b[prop]));
        }
      });

      document.getElementById("objectsResult").innerText = JSON.stringify(arr, null, 2);
    }

// TASK 50
function copyArray() {
  const arr = document.getElementById("copyArray").value.split(",");
  const copy = [...arr];
  document.getElementById("copyResult").innerText = `Original: ${arr.join(", ")}, Copy: ${copy.join(", ")}`;
}
