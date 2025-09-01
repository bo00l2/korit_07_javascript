const userInput = document.getElementById("userId");
const userPW = document.getElementById("userPw");
const submitBtn = document.getElementById("submitBtn")


let logs = JSON.parse(localStorage.getItem("logs")) || [];

console.log(logs);

function renderLogin() {
  userInput.innerHTML = "";
  userPW.innerHTML = "";

  
  logs.forEach((log, index) => {
    
  const div = document.createElement("div");
  div.className = "log-container";
  
  // if(log){ // css에서 속성 작성 
  //   div.classList.add("");
  // }

  const span = document.createElement("userId");
  
  const button = document.createElement("submitBtn");

  submitBtn.addEventListener("click", () => { // 로그인창으로 이동
    window.location.href = "http://127.0.0.1:5500/ch07_review/02_test02.html";
  })

  });

}