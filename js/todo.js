const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input"); >> 위에랑 똑같은 코드
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}
// localStorage에는 배열을 저장할 수 없음.. 텍스트만 저장할 수 있음
// JSON.stringify는 JavaScript object나 array 또는 어떤 JS 코드건 간에 그걸 string으로 만들어줌.
// 그전에는 그냥 텍스트로 저장되었지만, JSON.stringify를 이용해서 array처럼 보이게끔 저장하게 됨. ( ["a", "b", "c"] 이런 식으로 )

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