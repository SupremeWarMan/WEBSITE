type="text/javascript">
function checkPswd() {
    var confirmPassword = "admin";
    var password = document.getElementById("pswd").value;
    if (password == confirmPassword) {
         window.location="protected.html";
    }
    else{
        alert("Passwords do not match.");
    }
}