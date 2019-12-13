function submit(){

    event.preventDefault();

    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
    var phoneno=document.getElementById("number").value;
    var email=document.getElementById("email").value;

    var Register= {
        name:name,
        password: password,
        phoneno: phoneno,
        email: email
    }
    if(localStorage.getItem('register') == null){

        localStorage.setItem('register',JSON.stringify([]));

        var allRegister=JSON.parse(localStorage.getItem('register'));

         allRegister.push(Register);

        localStorage.setItem('register',JSON.stringify(allRegister));
     }

     else{

        var register=JSON.parse(localStorage.getItem('register'));
        register.push(Register);
        localStorage.setItem('register',JSON.stringify(register));
     }
}

function register(){
    event.preventDefault();
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    var allRegister=JSON.parse(localStorage.getItem('register'));

    for(var i=0;i<allRegister.length;i++)
{
    if(allRegister[i].email == email && allRegister[i].password == password)
    alert("Login Success");
else
    alert("Wrong Username and password");
}
}