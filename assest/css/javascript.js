function search() {
  document.getElementById("search-sub").style.display = "block";
}
function hidden_search() {
  document.getElementById("search-sub").style.display = "none";
}

function checkLogin() {
  var name = document.getElementById("name-login").value;
  var password = document.getElementById("password").value;
  if(name == "") {
    alert("Vui lòng nhập Email !");
  }
  if(password == "") {
      alert("VUi lòng nhập mật khẩu");
  }
}

function login() {
var name = document.getElementById("name-login").value;
var password = document.getElementById("password").value;

if( name =="Admin"  && password =="123456") {
  document.location.href = "login-admin.html";
}
else if( name =="Driver"  && password =="123456") {
  document.location.href = "login-driver.html";
}
else if ( name =="Extra"  && password =="123456") {
  document.location.href = "login-extra.html";

}
else {
  alert("Tên đăng nhập hoặc mật khẩu không đúng !");
}
}




