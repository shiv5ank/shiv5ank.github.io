function checkpassword(){
  let  psword=document.getElementById("password").value;

  let cnfpassword=document.getElementById("con_password").value;
  console.log(psword,cnfpassword);

  let message =document.getElementById("message");
  
  if (psword.length!=0){
      if(psword==cnfpassword){
          message.textContent="**Password match Successfully"
      }
      else {
          message.textContent="**Password and Confirm Password does not match"
      }
  }

}