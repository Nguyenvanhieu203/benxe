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

// function login() {
// var name = document.getElementById("name-login").value;
// var password = document.getElementById("password").value;

// if( name =="Admin"  && password =="123456") {
//   document.location.href = "login-admin.html";
// }
// else if( name =="Driver"  && password =="123456") {
//   document.location.href = "login-driver.html";
// }
// else if ( name =="Extra"  && password =="123456") {
//   document.location.href = "login-extra.html";

// }
// else {
//   alert("Tên đăng nhập hoặc mật khẩu không đúng !");
// }
// }

function login() {
  const loginUrl = "https://localhost:44355/api/Account/SignIn";
  const username = document.getElementById("name-login").value;
  const password = document.getElementById("password").value;
  fetch(loginUrl, {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
      email: username,
      password: password,
      }),
  })
  .then((response) => {
      if (!response.ok) {
      throw new Error("Đăng nhập không thành công.");
      }
      return response.json();
  })
  .then((data) => {
      // Xử lý dữ liệu trả về từ API
      //console.log(data);
      const setjson=JSON.stringify(data);
      localStorage.setItem("key",setjson);
      // Thực hiện các hành động khác sau khi đăng nhập thành công
      const namelogin = data.name;
      localStorage.setItem("username",namelogin);
      window.location.href = "login-admin.html"
  })
  .catch((error) => {
      // Xử lý lỗi
      console.error(error);
  });
}

// sign up
function signin() {
  const signinUrl = "https://localhost:44355/api/Account/SignUp";
  const firstname = document.getElementById("first_name").value;
  const lastname = document.getElementById("last_name").value;
  const username = document.getElementById("name-login").value;
  const numberphone = document.getElementById("phone_number").value;
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("confirmPassWord").value;
  fetch(signinUrl, {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName:firstname,
        lastName:lastname,
        email: username,
        phoneNumber: numberphone,
        password: password,
        confirmPassword: confirmpassword
      }),
  })
  .then((response) => {
      if (!response.ok) {
      alert("Đăng ký không thành công.")
      throw new Error("Đăng ký không thành công.");
      }
      return response.json();
  })
  .then((data) => {
      // Xử lý dữ liệu trả về từ API
      console.log(data);
      const setjson=JSON.stringify(data);
      localStorage.setItem("signup",setjson);
      // Thực hiện các hành động khác sau khi đăng nhập thành công
      // const namelogin = data.name;
      // localStorage.setItem("username",namelogin);
      // window.location.href = "login-admin.html"
  })
  .catch((error) => {
      // Xử lý lỗi
      console.error(error);
  });
}




