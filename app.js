 function popup() {
   alert("Thanks for click");
 }

function salam() {
    alert("HI user")
}

function link(s){
 s.style.color = "Red"
}


function get() {
  var user = document.getElementById("userinput");
console.log(user.value)
}

function chek(){
  var user = document.getElementById("user1");
    console.log(user.value);
  }

  function sami(){
    var user = document.getElementById("usersami");
      console.log(user.value);
    }

    function lelo(){
      var user = document.getElementById("userLine");
        console.log(user.value);
      }


    // Rejistration Form
    function validateForm(event) {
      event.preventDefault();
  
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const qualification = document.getElementById("qualification").value;
      const gender = document.querySelector('input[name="gender"]:checked');
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
  
      
      if (password !== confirmPassword) {
          alert("Passwords do not match");
          return;
      }
  
     
      const formData = {
          firstName,
          lastName,
          username,
          email,
          qualification,
          gender: gender ? gender.value : "",
      };
      console.log(formData);
  
     
  }
   