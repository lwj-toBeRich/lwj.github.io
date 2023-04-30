const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

// 로그인버튼 함수
function onLoginSubmit(event) {
    event.preventDefault();

    const username = loginInput.value;
    localStorage.setItem("username", username);

    paintGreeting(username);
}

// 로그인여부 확인 함수
function chkLoginYn(){
    const getUser = localStorage.getItem("username");
    if (getUser != null) { // 로그인한 상태일때
        paintGreeting(getUser);
    }
}

// 인사말 함수
function paintGreeting(user){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${user}`;
    greeting.classList.add("positionLogin");
}

// 로그인여부 확인
chkLoginYn();
// 로그인버튼 실행
loginForm.addEventListener("submit", onLoginSubmit);