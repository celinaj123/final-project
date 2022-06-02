function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var eventt = document.getElementById("eventt").value;
    var error_message = document.getElementById("error_message");

    
    error_message.style.padding = "10px";
    
    var text;
    

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
      }
    if(name.length < 3){
      text = "Name minimal 3 Characters";
      error_message.innerHTML = text;
      return false;
    }
    
    if(isNaN(phone) || phone.length>14 ||( phone[0]!='0' && phone[1]!='8')){
      text = "Phone Number starts with '08' and max 14 characters";
      error_message.innerHTML = text;
      return false;
    }

    if(eventt == 0){
        text= "Please choose your event";
        error_message.innerHTML = text;
        return false;
    }
   
    alert("Form Submitted Successfully!");
    return true;
  }