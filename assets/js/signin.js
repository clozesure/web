const evalid = localStorage.getItem('o1Email');
const email = document.getElementById('email');
const password = document.getElementById('password');
const signin = document.getElementById('signin');

signin.onclick = function() {
    if (email.value == evalid && password.value !=='') {
        window.document.location = './profile.html';
    } else {
        alert("You do not currently have an account with us.  Please go to the ClozeSure homepage to apply")
    }
}


