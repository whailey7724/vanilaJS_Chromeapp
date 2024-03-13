const quotes = [
    {
        quote : "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다.",
        author: "사무엘 존슨",
    },
    {
        quote : "피할 수 없으면 즐겨라.",
        author: "로버트 엘리엇",
    },
    {
        quote : "한 번의 실패와 영원한 실패를 혼동하지 마라.",
        author: "F.스콧 핏제랄드",
    },
    {
        quote : "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라. 모든 인생은 실험이다. 더 많이 실험할 수록 더 나아진다.",
        author: "랄프 왈도 에머슨",
    },
    {
        quote : "평생 살 것처럼 꿈을 꾸어라. 그리고 내일 죽을 것처럼 오늘을 살아라.",
        author: "제임스 딘",
    },
    {
        quote : "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
        author: "톨스토이",
    },
    {
        quote : "1퍼센트의 가능성, 그것이 나의 길이다.",
        author: "나폴레옹",
    },
    {
        quote : "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
        author: "L.론허바드",
    },
    {
        quote : "화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아 붓는 사랑의 정도이다.",
        author: "마더 테레사",
    },
    {
        quote : "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author: "괴테",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

/*
Randomness(무작위성)
js에서 제공하는 함수 random() : 0부터 1 사이의 랜덤한 숫자를 제공
>> random() * 10 하면 0부터 10 사이의 숫자들을 얻을 수 있다.!!!!
그러나.. 너무 많은 소숫점....... -> 해결방법 3가지 함수
round() ==> 소숫점 자리 반올림
ceil() ==> 숫자를 천장(ceil)까지 높여주는 것. 소숫점 올림
floor() ==> 숫자를 바닥까지... 소숫점 내림
*/
//console.log(quotes[Math.floor(Math.random() * 10)]);    // 명언이 10개일때만 사용할 수 있음..
const todaysQuote =  quotes[Math.floor(Math.random() * quotes.length)];     // math.floor -> floor함수 적용, math.random -> random함수, quotes.length -> array 길이

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;