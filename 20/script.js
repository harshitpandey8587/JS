const uname = document.getElementById("input-user-name");
const button = document.getElementById("clickButton");
const username = document.getElementById("username");



button.addEventListener('click', () => {
    const unameValue = uname.value;
    localStorage.setItem("name" , unameValue);
    location.reload();
})

window.addEventListener("load", () =>{

    const value = localStorage.getItem("name")
    username.innerText = value;
})
