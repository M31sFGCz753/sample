// const input = window.prompt("文字列を入力してください。", "");
function upper(){
  let x = document.getElementById("msgUpper").value;
  document.getElementById("upperKekka").innerHTML = x.toUpperCase();
}

function lower(){
  let x = document.getElementById("msgLower").value;
  document.getElementById("lowerKekka").innerHTML = x.toLowerCase();
}

function mouseTime(){
  let now = new Date();
  document.getElementById("timeKekka").innerHTML = now.toISOString();
}

function calcSCT(){
  let angle = parseInt(document.getElementById("enterAngleS").value);
  console.log(angle);
  let rad = Math.PI * (angle/180);
  let sin = Math.sin(rad);
  let cos = Math.cos(rad);
  document.getElementById("sinKekka").innerHTML = `sin${angle}° : ${sin}</br>cos${angle}° : ${cos}`;
}

function makeRNG(){
  let max = parseInt(document.getElementById("enterMax").value);
  let min = parseInt(document.getElementById("enterMin").value);
  let rng = Math.floor(Math.random()*(max - min)) + min;
  document.getElementById("rngKekka").innerHTML += rng+",";
}

function cmpare(){
  let num1 = parseInt(document.getElementById("enterNum1").value);
  let num2 = parseInt(document.getElementById("enterNum2").value);
  let max = Math.max(num1,num2);
  let min = Math.min(num1,num2);
  document.getElementById("cmpKekka").innerHTML = `大:${max}, 小:${min}`;
}
