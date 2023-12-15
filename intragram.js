

  function showMore() {
    var x = document.getElementById("more");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function register(){
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;

    if(!username || !password || !email || !name){
      alert("Please dont leave anything blank");
    }else{
      localStorage.setItem("username1", username);
      localStorage.setItem("password1", password);

      window.location.href = "login.html";
    }
  }

  function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let validate_user = localStorage.getItem("username1");
    let validate_pass = localStorage.getItem("password1");

    if(!username || !password){
      alert("Please dont leave anything blank");
    }else{
      if(username == validate_user && password == validate_pass){
        localStorage.setItem("logged", "true");
        window.location.href = "intragram.html";
      }else{
        alert("The credentials you entered is not registered")
      }
    }
  }

  function logOut(){
    localStorage.removeItem('username1');
    localStorage.removeItem('password1');
    localStorage.removeItem('logged');

    window.location.href = "login.html";


  }
