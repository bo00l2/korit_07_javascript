const nameInput = document.getElementById("userName");
const pwInput = document.getElementById("passWord");

const logInBtn = document.getElementById("login-Btn");

let logins = JSON.parse(localStorage.getItem("regis")) || [];

console.log(logins);

function renderlogins() {
  nameInput.value = "";
  pwInput.value = "";

  logins.forEach((login, index) => {
    if (login.completed) {
      nameInput.classList.add("completed");
      pwInput.classList.add("completed");
    }
  });
}

// 로컬스토리지 저장
function saveId() {
  localStorage.setItem("regis", JSON.stringify(logins));
}

logInBtn.addEventListener("click", () => {
  const IdText = nameInput.value.trim();
  const pwText = pwInput.value.trim();

  // 아이디와 비밀번호 모두 일치하는 회원 찾기
  const user = logins.find(
    (user) => user.IdText === IdText && user.pwText === pwText
  );

  if (user) {
    alert("로그인 성공");
    renderlogins();
    // 로그인 성공 시 추가 동작
  } else {
    alert("로그인 실패");
    // 로그인 실패 시 추가 동작
  }
});

function addId() {
  const IdText = nameInput.value.trim(); // trim() 공백 제거 method
  if (IdText === "") {
    alert("내용을 입력하세요 !");
    return;
  }

  // input 창에 내용이 있다면 들어갈 JS 객체 선언
  const newId = {
    text: IdText,
    completed: false,
  };

  // todos에 todo를 추가
  logins.push(newId);

  nameInput.value = "";
  pwInput.value = "";

  renderlogins();
  saveId();
}
