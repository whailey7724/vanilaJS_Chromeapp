const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input"); >> 위에랑 똑같은 코드
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// localStorage에는 배열을 저장할 수 없음.. 텍스트만 저장할 수 있음
// JSON.stringify는 JavaScript object나 array 또는 어떤 JS 코드건 간에 그걸 string으로 만들어줌.
// 그전에는 그냥 텍스트로 저장되었지만, JSON.stringify를 이용해서 array처럼 보이게끔 저장하게 됨. ( ["a", "b", "c"] 이런 식으로 )
// >> 값을 string으로 저장하고 싶을 때 사용
// 근데 이 string을 살아있는 javascript object로 만들어줄 수 있음 >> JSON.parse로 / JS가 이해할 수 있는 살아있는 array로 만들 수 있음

function deleteToDo(event) {
    // eventlistener을 추가해서 버튼을 클릭한 걸 확인하게 만들었지만 문제가 있음 >> 어떤 버튼을 클릭했는지 모름
    // console.log(event.target.parentElement);    // 목록중에 어떤 버튼을 클릭했는지 확인할 수 있음 / parentElement는 클릭된 element의 부모
    const list = event.target.parentElement;
    list.remove();
}

function paintToDo(newTodo) {
    const list = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    list.appendChild(span);     // span을 li 안에 넣어주기
    list.appendChild(button);
    toDoList.appendChild(list);   // newTodo에 입력한 것들을 todolist에 넣어주기
    // ** append는 맨 끝에 놓여져야 함!!
}

function handleTodoSubmit() {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

/*
function sayHello() {
    console.log("hello");
}
// js에게 parsedToDos가 가지고 있는 각각의 item에 대해 sayHello function을 실행해달라고 말하는 것
*/

const saveToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null) {
    const parsedToDos = JSON.parse(saveToDos);
    //parsedToDos.array.forEach(sayHello);
    parsedToDos.array.forEach((item) => console.log("this is the turn of", item));  // 윗줄이랑 똑같은 코드임
                        // >> 그러나 이게 function을 작성할 때 더 짧게 쓰는 방법임. 함수도 필요없고 이름도 필요 없음..
                        // parsedToDos에 있는 각각의 item에 대해서 console.log를 할 것이라는 것
    // array라서 forEach라는 것을 갖고 있음. forEach는 array의 각 item에 대해 function을 실행하게 해줌
    // 하지만 이건 이 array의 item들에 대해 한 개의 function만 실행할 수 있게 해줌 >> 지금 내가 어떤 item을 사용하고 있는지 모른다면 무용지물임!!
    // >> js는 지금 처리되고 있는 아이템을 그냥 제공해줌
}