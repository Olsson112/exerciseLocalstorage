window.addEventListener("load", initSite)
document.getElementById('loginButton').addEventListener("click", login)

const username = "victor"
const password = "123abc"


function initSite() {
    console.log("Sidan är laddad")

    const loggedInUser = sessionStorage.getItem("loggedInUser")

    if(loggedInUser) {
        window.location = "/loginpage.html"
    }
}

function login() {
    const usernameToCheck = document.getElementById("username").value
    const passwordToCheck = document.getElementById("password").value

    if(usernameToCheck == username && passwordToCheck == password) {
        // LOGGA IN
        sessionStorage.setItem("loggedInUser", usernameToCheck)
        window.location = "/loginpage.html"
    } else {
        // FEL UPPGIFTER
        let feedbackContainer = document.getElementById("loginFeedback")
        feedbackContainer.innerHTML = ""
        
        let loginFeedback = document.createElement("h3")
        loginFeedback.innerText = "Fel uppgifter..." 
        
        feedbackContainer.appendChild(loginFeedback)
    }
}
