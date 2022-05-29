
function validate(){
    const email = document.getElementById('email').value
    const nama = document.getElementById('nama').value
    const phone = document.getElementById('phone').value

    
    if (email == "" || nama == ""|| phone ==""){
      alert('form harus terisi penuh!')
    }
     if(nama.length <= 3){
      alert('nama harus lebih dari 3 huruf')
    }
    
    return
    }

    function validatePhoneNumber(input_str) {
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    
        return re.test(input_str);
    }
    
    function validateForm(event) {
        var phone = document.getElementById('phone').value;
        if (!validatePhoneNumber(phone)) {
            document.getElementById('phone_error').classList.remove('hidden');
        } else {
            document.getElementById('phone_error').classList.add('hidden');
            alert("validation success")
        }
        event.preventDefault();
    }
    
    document.getElementById('myform').addEventListener('submit', validateForm);


    
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }