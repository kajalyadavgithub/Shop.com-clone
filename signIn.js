var arr = JSON.parse(localStorage.getItem("signupdata")) || [];

function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    var result = [];
   
    result = arr.filter(function(elem){
        if(email == elem.email && password == elem.password){
            return elem;
        }
    });

    console.log(result);
    

    if(result.length==1){
        localStorage.setItem("logindata",JSON.stringify(result));
        window.location.href = 'index.html';
    };
}

