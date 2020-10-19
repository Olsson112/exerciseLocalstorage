window.addEventListener("load", initSite)


function initSite() {
    console.log("Sidan är laddad")

    const loggedInUser = sessionStorage.getItem("loggedInUser")
    document.getElementById("userName").innerText = loggedInUser
}