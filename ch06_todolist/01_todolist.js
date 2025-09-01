// DOM 요소 가져오기 위한 변수 선언 및 초기화
const todoInput = document.getElementById("todo-input"); // 메서드 결과값을 변수에 대입
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
// 값이 있으면 true 없으면 false 빈 배열 반환
// 6번 라인의 해석
//  : localStorage.getItem('todos')에 데이터가 잇으면 true이기 때문에 JSON으로 바꿔주고, 아무런 데이터가 없으면 빈 배열을 꺼내라는 의미이다.
console.log(todos); // JS 객체가 아니라 배열이라는 점에 주목할 필요
// 필요 -> 맨 처음에 localStorage르 뒤지면 빈 배열이 저장된다.
// 이후에 배열 내부의 element 들에 객체를 추가했다.

// Todo 리스트를 불러오는 과정이 필요하다.
// 페이지에 처음 들어가게 됐을 때의 로직
function renderTodos() {
  // 기존 todo list를 초기화 -> 추가했을 때 누적 안되게
  // todoList =/= todoJsons 
  todoList.innerHTML = "";

  // todos 배열을 반복 돌려서 목록을 작성
  todos.forEach((todo, index) => {
  // todos 반복을 돌면 내부 element가 있을건데, 그때마다
  // li  태그를 생성한다는 의미
  // 웬만하면 foreach() / map() method에는 두 개 이상의 argument가 요구된다고 알아두면 편하다.
  // 보통은 첫 번째가 반복문 돌 때의 element의 이름을 선언한다.
  // 두 번째가 index 관련이라고 생각하면 된다.

  // 각 todo는 JS 객체에 해당하는 거고, 이걸 페이지 상에서 보여주기 위해서는
  // ul 태그의 자식인 li  태그가 필요하다.

  // 그럼 얘도 지역변수겠다.
  const li = document.createElement("li");
  // li 태그만 만들었지 클래스 이름 안정했으니까
  li.className = "todo-item";
  if (todo.completed) { // localStorage의 'todos' key의 내부를 확인했을 때 배열로 저장되어있고, 거기 내부에 JS 객체가 있는데, 그 객체가 현재 todo라고 이름 붙여져있다. 그 todo들은 text라는 key, completed라는 key를 가지고 있었다.
  // 그 completed는 자료형이 boolean이었고, 걔가 true / false 인지에 따라서 35번 라인의 조건문의 실행 여부가 결정될 거다.
  // .css 파일에서 completed 속성 부분을 적용해주기 위해서 쓴 코드라인이 된다.
  // completed가 true라면 할 일이 완료되었음을 표시해주기 위해서 css 상 차이를 만들었는데, 그걸 적용하기 위한ㄴ거다.
    li.classList.add("completed"); // css 에서 completed 속성을 추가하겠다.
  }
  // .css 36번 라인부터 40번 라인까지의 해석은 JS 객체 상의 Key가 completed인 애의 value가 true라면 li 태그에 completed라는 속성을 추가해주는데, 이게 추가 되면, .css에서 정의된 추가 스타일을 적용하기 위한 것이다.(취소선, 배경색 등)


  // li 태그의 자식 요소로 input checkbox / span / button로 이루어져 있기 때문에 각각을 또 요소를 만들 필요가 있겠다.

  // 체크 박스
  const checkbox = document.createElement("input");
  // 근데 얘는 type이 text가 아니라 checkbox니까
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;  
  // todo.completed는 boolean 자료형
  // checked 자체는 true false와 상관없이 계속 유지가 된다.
  // input의 type이 checkbox라면 checked라고 =""가 없는 애가 있었다. <input type="checkbox" checked> 형태였다.

  // 텍스트 내용 생성 - span 태그
  // div가 아니라 span인 이유 자체도 생각할 필요가 있다.
  // div - 컨텐츠가 있는 가로줄 전체가 영역
  // span - 컨텐츠가 있는 길이만큼의 영역
  const span = document.createElement("span");
  span.className = "todo-text"; // 마찬가지로 css 적용을 위해서
  span.textContent = todo.text; // 내용이 있는거니까 배열내의 element인 js 객체의 text라는 키의 value를 span 태그의 내부에 집어넣어서 페이지 상에 출력

  // 삭제 버튼 - button 태그
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "&times"; // 배수를 뜻하는 기호

  // 요소들을 li 변수에 추가해야 합니다. 왜? li 내부에 체크박스/스팬/버튼
  li.append(checkbox);
  li.append(span);
  li.append(deleteBtn);

  // 그리고 이 li는 <ul> 태그에 추가해야한다.
  todoList.appendChild(li);

  // 이벤트리스너 추가
  // 체크박스 변경 이벤트
  checkbox.addEventListener("change", () => {
  todos[index].completed = checkbox.checked; // checkbox가 type이고, checked는 속성에 해당한다.
  // 완료 상태에 따라 CSS 클래스를 토글
  li.classList.toggle("completed", checkbox.checked);
  saveTodos();
  });

  // 삭제 버튼 클릭 이벤트
  deleteBtn.addEventListener("click", () => {
  // 삭제할 항목의 텍스트를 이용해서 배열 내에서 정확한 인덱스를 찾아낼 겁니다.
  // 보통은 index로 내용을 확인하지만 계속 삭제를 하면 index 넘버가 바뀌겠죠
  // 그래서 input에 입력했던 내용을 근거로 indedx를 역으로 찾아낼 예정이다.
  const itemText = span.textContent; // 얘를 쓰는 이유는 저희가 trim() 쓰는 바람에 공백을 날렸기 때문

  // 배열 내에서의 내용과 span 태그 내에서의 내용이 같은 index를 뽑아내서 itemIndex 변수에 저장
  const itemIndex = todos.findIndex(item => item.text === itemText);
  if(itemIndex !== -1 ){ // 일치하는 인덱스가 없으면 -1이다.
    todos.splice(itemIndex, 1); // itemIndex에 해당하는 거 element 하나를 삭제

    // 주의 : splice() =/= slice()
    li.remove();
    saveTodos();
  }
  });
  });
}

function saveTodos() { // 중요함!!!!!!!!!!!!!!!!!!!!
  // localStorage에 저장한다는 의미
  localStorage.setItem("todos", JSON.stringify(todos));
  // 1번 매개변수 - key
  // 2번 매개변수 - 그 키에 들어가는 value
  localStorage.setItem('temp', 안녕); // 6번 라인 때문에 항상 localStorage의 value가 배열이라고 오해살까봐 추가한 코드 -> 여기는 value가 string임.  
}

function addTodo() {
  const todoText = todoInput.value.trim(); // trim() 공백 제거 method
  if (todoText === "") {
  alert("내용을 입력하세요 !");
  return; // 메서드를 종료시키겠다는 의미
}

// input 창에 내용이 있다면 들어갈 JS 객체 선언
const newTodo = {
text: todoText,
completed: false, // 초기 생성시에 무조건 false로 고정
};

// todos에 todo를 추가
todos.push(newTodo);

// 추가한 이후에 input 태그 내의 내용을 비우는 역할
todoInput.value = "";

renderTodos();  // 추가 버튼 누르고 나서 다시 (갱신된) 리슽크 가지고 와야 하니까 renderTodos() 함수 호출
saveTodos();  // 그리고 localStorage에도 저장해줘야 하니까 savaTodos() 함수 호출

// 그러면 이제 의문이 생길 수 있는게 어차피 renderTodos()할 때 savaTodos()가 필수인 것 같은데 함께 묶어서 쓰면 안되는가

// method는 하나 당 기능 하나라고 생각해야한다.
// 모듈화 
}

// '추가' 버튼 클릭 이벤트
addBtn.addEventListener("click", addTodo); // button 태그에 onclick 속성임 -> 두 번째 argument로 addTodo 함수를 넣었는데, addTodo()가 아니라 점에도 주목해야한다.

//엔터 키 입력 이벤트
todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
  addTodo(); // input 태그에 Enter 입력을 감지하면 addTodo(); 함수를 호출할 것.
  }
});
// 새로고침했을 때 renderTodos() 호출되어야 함.
window.onload = renderTodos();