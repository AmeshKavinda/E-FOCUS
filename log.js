var lblusername = document.getElementById("lbluser");
var lblpassword = document.getElementById("lblpass");
var txtusername = document.getElementById("username");
var txtpassword = document.getElementById("password");
var btnshow = document.getElementById("show");

lblusername.addEventListener("click", function(){
    lblusername.classList.add("small");
})

lblpassword.addEventListener("click", function(){
    lblpassword.classList.add("small");
})

txtusername.addEventListener("click", function(){
    lblusername.classList.add("small");
})

txtpassword.addEventListener("click", function(){
    lblpassword.classList.add("small");
})

txtusername.addEventListener("blur", function(){
    if (txtusername.value == ''){
    lblusername.classList.remove("small");
    }
});

txtpassword.addEventListener("blur", function(){
    if( txtpassword.value == ''){
    lblpassword.classList.remove("small");
    }
});

btnshow.addEventListener("click", function(){
   if (txtpassword.getAttribute("type") == "password") {
       txtpassword.setAttribute("type", "text");
       btnshow.innerText = "Hide";
   } else {
       txtpassword.setAttribute("type", "password");
       btnshow.innerText = "Show";
   }
});