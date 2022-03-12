// /*Login form validation*/

document.addEventListener("DOMContentLoaded", (event) => { 
    let username = document.getElementById("username")
    let password = document.getElementById("password")
    let form = document.getElementById("form")
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        loginvalid();
    })
});




function loginvalid(){
    if(username.value.trim() == ""){
        alert("Please fill username");       
        return false;
    }

    else if(password.value.trim() == ""){
        alert("Please fill Password");          
        return false;
    }

    else if(password.value.trim().length < 8){
        alert("Password must contain 8 characters");            
        return false;
    }

    else{
        window.location.href = "/bankpage.html"
    }


}

// let submitbtn = document.getElementById("submit-btn");
// submitbtn.addEventListener("click", loginvalid());