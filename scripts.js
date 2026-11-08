/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function(){
const email = document.getElementById("email");
const subscribe = document.querySelector("form")
const message = document.getElementsByClassName("message")[0]

subscribe.addEventListener("submit",function(event){
    event.preventDefault();
    const emailValue= email.value.trim()
    if(!emailValue){
        message.textContent = "Please enter a valid email address.";
    } else{
         message.textContent = `Thank you! Your email address ${emailValue} has been added to our mailing list!`;
    }
   
});



});