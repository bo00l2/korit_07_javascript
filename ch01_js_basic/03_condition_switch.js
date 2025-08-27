let date = new Date(); // Java에서의 객체 생성 방식과 같죠.
let day = date.getDay(); // 객체명.메서드명()의 결과값을 Day에 대입
let dayName = "";
/*
  일요일 = 0, 월요일 = 1, ... 토요일 = 6  리턴합니다.
  return 자료형은 number
*/
switch(day){
  case 0:
    datName = '일요일';
    break;
  case 1:
    datName = '월요일';
    break;
  case 2:
    datName = '화요일';
    break;
  case 3:
    datName = '수요일';
    break;
  case 4:
    datName = '목요일';
    break;
  case 5:
    datName = '금요일';
    break;
  case 6:
    datName = '토요일';
    break;
  default:
    datName = '잘못된 결과값입니다.';
    break;
}
console.log('오늘은 ' + datName + '입니다. 잠온다' );