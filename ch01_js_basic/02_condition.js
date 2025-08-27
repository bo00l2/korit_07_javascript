/*
  7세 이하 : 0원
  8세 이상 13 이하 - 450원
  14세 이상 19세 이하 - 720원
  20세 이상 - 1200원
  70세 이상이 0
  에  해당하는 if문 작성
  실행 예
  12살의 버스 요금은 13해야 합니다.
*/ 

let age = 12; // 변수 선언 및 초기화
let busFare = 0;
// 여기에 조건문 작성
if (age < 8) {
  busFare = 0;
} else if (13 >= age || 8 < age) {
  busFare = 0;
} else if (age < 8) {
  busFare = 0;
} 

console.log(age + " 살의 버스 요금은" + busFare +"원입니다.")
