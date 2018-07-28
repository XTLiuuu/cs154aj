var secrets = new Set();

function validateForm(){
  console.log("in validate form1")
  console.log(secrets)
  var secret = document.myProfile.secret.value;
  secret = secret.trim();
  if(secret == ""){
    window.alert("Please enter a secret code for your voice functions")
    return false;
  }
  if(secret.indexOf(" ") > 0){
    window.alert("Please enter a valid code. Include only lowercase letters and numbers")
    return false;
  }
  if(secrets.has(secret)){
    window.alert("The secret code has been used. Please try a new one.")
    return false;
  }
  else{
    secrets.add(secret)
    return true;
  }
}