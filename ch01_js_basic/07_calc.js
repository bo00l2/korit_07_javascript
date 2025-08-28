/*
  조건문을 활용하고, 숫자 두 개와 사칙연산 기호 하나를 매개변수로 받아서 그에 맞는 계산을 하는 계산기 함수를 정의하도록 하겠습니다.
*/

let calc = function (x, y, operator) {
  // 매개변수의 자료형이나 선언자가 없다는 점이 특이하죠.
  if (operator === "+") {
    return x + y;
  } else if (operator === "-") {
    return x - y;
  } else if (operator === "*") {
    return x * y;
  } else if (operator === "/") {
    return x / y;
  }
};

let plusResult = calc(5, 7, "+");
console.log(plusResult);

// 참고 변수명 minusResult 10 - 7 / multiResut 203 * 3459 / divResult 5943 / 21
// 이제 내일은 웹 페이지 상에서 입력 받으면 계산 결과값이 튀어나오게 할겁니다.
// 내장 객체 설명 후에

let minusResult = calc(10, 7, "-");
console.log(minusResult);
let multiResult = calc(203, 3459, "*");
console.log(multiResult);
let divResult = calc(5943, 21, "/");
console.log(divResult);
