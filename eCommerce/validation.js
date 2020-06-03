// function VForm()
// { 
//     var name = document.forms["FormJS"]["Name"];         // name = form element (FormJS)  Input (Name)
//     var email = document.forms["FormJS"]["Email"];

//     if (name.value == "")
//     { 
//         window.alert("Please enter your name."); 
//         name.focus(); //HTML DOM focus() gives focus to element
//         return false; 
//     }

//     if (email.value == "")
//     { 
//         window.alert("Please enter a valid e-mail address."); 
//         email.focus(); 
//         return false; 
//     } 
//     return true; }


function validateForm(e) {
  e.preventDefault()
  var name = document.forms["myForm"]["fname"].value;
  var email = document.forms["myForm"]["email"].value;
  var textMessage = document.forms["myForm"]["message"].value;

  if (name === "") {
    window.alert("Please enter your name.");
    return false;
  }
  if (email === "") {
    window.alert("Please enter your email.");;
    return false;
  }
  if (textMessage === "") {
    window.alert("Please enter your message.");;
    return false;
  }
  window.alert("Form submitted successfully")
  return true
}

