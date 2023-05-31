const loginForm = document.getElementById("login-form");

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

const user1 = new User("userExtra", "extra@example.com", "myPass1234");
const user2 = new User("userExtraExtra", "extra.extra@example.com", "myPass1234");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const loginUsername = document.getElementById("login-username").value;
    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;
    let loggedInUser;

    if (loginUsername === user1.username && loginEmail === user1.email && loginPassword === user1.password) {
        loggedInUser = user1;
    } else if (loginUsername === user2.username && loginEmail === user2.email && loginPassword === user2.password) {
        loggedInUser = user2;
    } else {
        alert("User not found");
        return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    window.location.href = "./save-screenshot.html";
})