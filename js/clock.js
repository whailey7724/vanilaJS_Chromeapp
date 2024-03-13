const clock = document.querySelector("h2#clock");


/*
function sayHello() {
    console.log("hello");
}

// interval : '매번' 일어나야 하는 무언가 ex) 매 2초마다 무슨 일이 일어나게 하고 싶을 때 사용하는 것
// 첫 번째 argument : 실행하고자 하는 function / 두 번째 argument : 호출되는 function 간격을 몇 ms(milliseconds)로 할지
setInterval(sayHello, 5000);

// timeout : 특정 ms 후에 실행하기
// 실행할 함수, 얼마나 기다릴 지 ms단위로 시간 넣어주기
setTimeout(sayHello, 5000);
*/

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");  // getHours는 숫자기 때문에 padStart를 쓸 수 없음 ___padStart는 string에!!! -> 숫자를 string으로 바꿔주기
    const minutes = String(date.getMinutes()).padStart(2,"0");  // 12:12:1 이런식으로 출력되던 것을 12:12:01 로 출력되게끔
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);    // 매 초마다 새로운 Date object 만들기
                                // new Date object는 현재 날짜, 시간, 분, 초에 대한 정보를 가지고 있고 우리는 그런 object를 매 초마다 새로 create하고 있음
}

getClock();     // 웹사이트가 로드되자마자 getClock()을 실행하고 또 다시 매초마다 실행되도록
setInterval(getClock, 1000); 

// padStart(a, b) : string에 쓸 수 있는 function >> string의 길이가 a가 되지 않는다면, 빈 공간을 b로 채워라
