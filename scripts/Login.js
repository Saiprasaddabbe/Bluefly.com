var log = false;
const login = (event) => {
  
  event.preventDefault();
  let form = document.getElementById("loinform");
  let Email = form.UsearEmail.value;
  let Password = form.UserPassword.value;
  let Users = JSON.parse(localStorage.getItem("Users")) || [];
  // console.log(Users);

  for (let i = 0; i < Users.length; i++) {
    // console.log(Users);
    if (Users[i].Email == Email && Users[i].Password == Password) {
      alert("login Successful!");
      localStorage.setItem("User", JSON.stringify(Users[i]));
      log = true;
      break;
    }
  }
  if (log == false) {
    alert("login failed!");
  }
};

const movetoregister=()=>{
window.location.href="Register.html"
}

document.getElementById("submit").addEventListener("click",movetoregister)

