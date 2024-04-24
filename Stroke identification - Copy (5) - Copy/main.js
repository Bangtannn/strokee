// Login validation
let score=0
let loginLink = document.getElementById("login-link");
          let regLink = document.getElementById("reg-link");
          let regForm = document.getElementById("register-form");
          let loginForm = document.getElementById("login-form");
          let loginSubmit = document.getElementById("login-submit");
          let Msg = document.getElementById("msg");

          let regform = document.getElementById("reg-form");
          let regSubmit = document.getElementById("reg-submit");
          let reguname = document.getElementById("reg-uname");
          let regpass = document.getElementById("reg-password");
          let repass = document.getElementById("re-password");
          let regcheck = document.getElementById("reg-check");
          let regmsg = document.getElementById("regmsg");

          loginLink.addEventListener("click", () => {
            loginForm.classList.remove("left");
            regForm.classList.add("left");
          });
          regLink.addEventListener("click", () => {
            loginForm.classList.add("left");
            regForm.classList.remove("left");
          });

          let loginuname = document.getElementById("uname");
          let loginpass = document.getElementById("password");
          let logincheck = document.getElementById("Check");
          loginSubmit.addEventListener("click", (e) => {
            e.preventDefault();
            if (
              loginuname.value != "" &&
              loginpass.value != "" &&
              logincheck.checked == true
            ) {
              if (Iscorrectuser()) {
                sessionStorage.setItem("isLogin", true);
                sessionStorage.setItem("loginUser", loginuname.value);
                window.location.href = "home.html";
              } else {
                Msg.innerHTML =
                  '<p class="text-danger bg-danger-subtle px-3 py-2">Username or Password is wrong</p>';
              }
            } else {
              Msg.innerHTML =
                '<p class="text-danger bg-danger-subtle px-3 py-2">Please Fill all fields</p>';
            }
          });
          function Iscorrectuser() {
            let allUser = JSON.parse(localStorage.getItem("UserDetails"));
            let status = false;

            allUser.forEach((e) => {
              console.log(
                e.uname,
                e.password,
                loginuname.value,
                loginpass.value
              );
              if (
                e.uname == loginuname.value &&
                e.password == loginpass.value
              ) {
                status = true;
              }
            });
            return status;
          }

          regSubmit.addEventListener("click", (e) => {
            if (regform.checkValidity()) {
              e.preventDefault();

              if (regpass.value == repass.value) {
                let newData = {
                  uname: reguname.value,
                  password: regpass.value,
                };
                let existData = localStorage.getItem("UserDetails")
                  ? JSON.parse(localStorage.getItem("UserDetails"))
                  : [];
                existData.push(newData);
                localStorage.setItem("UserDetails", JSON.stringify(existData));
                sessionStorage.setItem("isLogin", true);
                sessionStorage.setItem("loginUser", reguname.value);
                window.location.href = "home.html";
              } else {
                regmsg.innerHTML =
                  '<p class="p-2 text-danger bg-danger-subtle">Password and Re-Password not match</p>';
              }
            }
          });

//home tasks after login
let existData1 = localStorage.getItem("UserDetails")
console.log(existData1);
let usernamelogin = document.getElementById('usernameprint');
usernamelogin = existData1.uname;

function QuestionValidate(a,b){
  switch(a){
      case 1 :
        if(b==1){
          score+=1
          console.log(score)
        }      
        break;
      case 2 :
        if(b==1){
          score+=1
        }    
        console.log(score)  
        break;
      case 3 :
        if(b==1){
          score+=1
        }
        console.log(score)
        break;
      case 4 :
        if(b==1){
          score+=1
        }   
        console.log(score)     
        break;
      default:
        break;

}
}


function suggestions(){
 
  score = sessionStorage.getItem('score')
 if(score<=2){
  document.getElementById('stages').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/zpseq7i4_7A?si=tLAdOq6ETyNyUD8B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
 }
 else if(2<score<4){
  document.getElementById('stages').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/oZrQU72dGO0?si=zgkQhJyfHMRS7kaB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
 }
 else{
  document.getElementById('stages').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZKR1nOtCNKU?si=sflSGzH4To2u9bIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
 }
}
document.getElementById('showsuggestions').addEventListener('click', suggestions);

function submitAnswer(){
  sessionStorage.setItem('score',score)
  window.location.assign(`eeg.html?score=${score}`)

}

function showSuggestions(){
  window.location.assign(`suggestions.html?score=${score}`)
}
function printCategory() {
    // Retrieve the score from sessionStorage
    const score = sessionStorage.getItem('score');

    // Determine the category based on the score
    let categoryMessage;

    if (score >= 8) {
        categoryMessage = "Excellent";
    } else if (score >= 6) {
        categoryMessage = "Very good";
    } else if (score >= 3) {
        categoryMessage = "Good, you are making progress";
    } else {
        categoryMessage = "Nah don't give up";
    }

    // Display the category message on the element with id 'displaycategory'
    document.getElementById('displaycategory').innerText = categoryMessage;
}
