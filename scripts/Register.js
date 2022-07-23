const register = (event) => {
  event.preventDefault();
  let form = document.getElementById("loinform");
  let First = form.UserFirstName.value;
  let Last = form.UserLastName.value;
  let Email = form.UsearEmail.value;
  let Password = form.UserPassword.value;
  let user = {
    First,
    Last,
    Email,
    Password,
  };
  console.log(First, Last, Email, Password);
  if ((First !== "") & (Last !== "") & (Email !== "") & (Password !== "")) {
    let Users = JSON.parse(localStorage.getItem("Users")) || [];
    Users.push(user);
    localStorage.setItem("Users", JSON.stringify(Users));
    window.location.href = "Login.html";
  } else {
    alert("Enter All Information");
  }
};
