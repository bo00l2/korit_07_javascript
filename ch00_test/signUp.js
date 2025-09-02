const nameInput = document.getElementById("userName");
const pwInput = document.getElementById("passWord");
const regBtn = document.getElementById("Reg-Btn");

let regis = JSON.parse(localStorage.getItem("regis")) || [];


function renderregis() {
  nameInput.value = "";
  pwInput.value = "";
}

// 로컬스토리지 불러오기
function saveId() {
  localStorage.getItem("regis", JSON.stringify(regis));
}
// 로컬스토리지 저장
function saveId() {
  localStorage.setItem("regis", JSON.stringify(regis));
}


function addId() {
  const IdText = nameInput.value.trim(); // trim() 공백 제거 method
  const pwText = pwInput.value.trim(); // trim() 공백 제거 method
  if (IdText === "") {
    alert("아이디를 입력하세요 !");
    return;
  }
  if (pwText === "") {
    alert("비밀번호를 입력하세요 !");
    return;
  }

  // input 창에 내용이 있다면 들어갈 JS 객체 선언
  const newUser ={
    IdText: IdText,
    pwText: pwText,
    completed: false,
  }

  // todos에 todo를 추가
  regis.push(newUser);
  renderregis();
  saveId();

  alert("회원가입 성공! 로그인 페이지로 이동합니다.");
  window.location.href = "http://127.0.0.1:5500/ch00_test/signIn.html";
}

regBtn.addEventListener("click", addId);