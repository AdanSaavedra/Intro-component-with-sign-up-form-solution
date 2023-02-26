const errorName = document.querySelector('.errorName')
const errorLastName = document.querySelector('.errorLastname')
const errorEmail = document.querySelector('.errorEmail')
const errorPass = document.querySelector('.errorPass')
const form = document.querySelector(".registerForm")
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const icon1 = document.querySelector(".icon1")
const icon2 = document.querySelector(".icon2")
const icon3 = document.querySelector(".icon3")
const icon4 = document.querySelector(".icon4")
const div1 = document.querySelector(".div1")
const div2 = document.querySelector(".div2")
const div3 = document.querySelector(".div3")
const div4 = document.querySelector(".div4")
const div5 = document.querySelector(".div5")


btn.onclick=function(){
    form.style.height='510px'
    
    firstName.oninvalid=function(){
        this.setCustomValidity(' ');
        firstName.style.border='2px solid var(--Red)';
        errorName.style.display='block'
        firstName.placeholder=""
        icon1.style.display='block'
        div1.style.height='90px'
        div1.style.margin='10px 0 0 0'
    }
    lastName.oninvalid=function(){
        this.setCustomValidity(' ');
        lastName.style.border='2px solid var(--Red)';
        errorLastName.style.display='block'
        lastName.placeholder=""
        icon2.style.display='block'
        div2.style.height='90px'
    }
    email.oninvalid=function(){
        this.setCustomValidity(' ');
        email.style.border='2px solid var(--Red)';
        email.placeholder='email@example/com'
        errorEmail.style.display='block'
        email.classList.add('redd')
        icon3.style.display='block'
        div3.style.height='90px'
    }
    password.oninvalid=function(){
        this.setCustomValidity(' ');
        password.style.border='2px solid var(--Red)';
        errorPass.style.display='block'
        password.placeholder=""
        icon4.style.display='block'
        div4.style.height='90px'
        
    }
    div5.style.margin='30px 0 0 0'
}



