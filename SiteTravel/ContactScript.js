//Contact form Check
document.getElementById("step2").style.display="none";
moreButton.onclick=function() {showStep2()};
function showStep2() {
  var valid=true;
  var firstName=document.getElementById("firstName").value;
  var lastName=document.getElementById("lastName").value;
  var email=document.getElementById("email").value;
  var numRgex=/[0-9]/g;
  var chRgex=/\W/g;
  var dotPosition=email.lastIndexOf('.');
  if(firstName.length==0 || numRgex.test(firstName)==true || chRgex.test(firstName)==true) {
      valid=false;
      document.getElementById("errFirstName").innerHTML="Please write your first name here.";
  }else {
    document.getElementById("errFirstName").innerHTML="";
  }
  if(lastName.length==0 || numRgex.test(lastName)==true || chRgex.test(lastName)==true) {
    valid = false;
    document.getElementById("errLastName").innerHTML="Please write your last name here.";
  }else {
    document.getElementById("errLastName").innerHTML="";
  }
  if(email.length==0 || (email.length-dotPosition)<2 || dotPosition==-1) {
    valid=false;
    document.getElementById("errEmail").innerHTML="Please write your email here.";
  }else {
    document.getElementById("errEmail").innerHTML="";
  }
  if (valid==true) {
    document.getElementById("step2").style.display="block";
    document.getElementById("step1").style.display="none";
  } else {
    document.getElementById("errMesage").innerHTML="The fields aren't properly filled.";
  }
  if(document.getElementById("telephone").value.length>0 && document.getElementById("subject").value.length>0 && document.getElementById("mesage").value.length>0)
    check();
}
backButton.onclick=function() {showStep1()};
function showStep1() {
  document.getElementById("step1").style.display="block";
  document.getElementById("errFirstName").innerHTML="";
  document.getElementById("errLastName").innerHTML ="";
  document.getElementById("errEmail").innerHTML="";
  document.getElementById("errMesage").innerHTML="";
  document.getElementById("step2").style.display="none";
}
sendButton.onclick=function() {check()};
function check() {
  var valid=true;
  var phone=document.getElementById("telephone").value;
  var subject=document.getElementById("subject").value;
  var mesage=document.getElementById("mesage").value;
  var phoneRegex1=/[0-9]{4}?[-\/\.\ ][0-9]{3}?[-\/\.\ ][0-9]{3}/g;
  var phoneRegex2=/[0-9]{4}?[-\/\.\ ][0-9]{3}?[-\/\.\ ][0-9]{3}?[-\/\.\ ][0-9]{3}/g;
  var phoneRegex3=/[0-9]{10}/g;
  var phoneRegex4=/[+40][0-9]{11}/g;
  if((phone.length<10 || /[a-zA-Z]/g.test(phone)==true) && (phoneRegex1.test(phone)==false && phoneRegex2.test(phone)==false && phoneRegex3.test(phone)==false && phoneRegex4.test(phone)==false)) {
      valid=false;
      document.getElementById("errTelephone").innerHTML="Please write a valid phone number.";
  }else {
    document.getElementById("errTelephone").innerHTML="";
  }
  if(subject.length==0) {
    valid=false;
    document.getElementById("errSubject").innerHTML="Please write a subject for your mesage.";
  }else {
    document.getElementById("errSubject").innerHTML="";
  }
  if(mesage.localeCompare("Write your mesage here...")==0) {
    valid=false;
    document.getElementById("errMesageBox").innerHTML="Please write your mesage. You can't send an empty mesage.";
  }else {
    document.getElementById("errMesageBox").innerHTML="";
  }
  if (valid==true) {
    document.getElementById("thankYou").innerHTML="We thank you, " + document.getElementById("firstName").value + " " +  document.getElementById("lastName").value + ", for sending us your thoughts. We will store your data for 3 months.";
    document.getElementById("step2").style.display="none";
    convert(phone);
  } else {
    document.getElementById("end").innerHTML="The fields aren't properly filled.";
  } 
}

//function convert phone number to standard format
function convert(phoneNumber) {
  if(/[0-9]{4}?[-\/\.\ ][0-9]{3}?[-\/\.\ ][0-9]{3}/g.test(phoneNumber)==true) {
    phoneNumber=phoneNumber.replace(/\D/g,' ');
  }
  

  if(/[0-9]{4}?[-\/\.\ ][0-9]{3}?[-\/\.\ ][0-9]{3}?[-\/\.\ ][0-9]{3}/g.test(phoneNumber)==true) {
    phoneNumber=phoneNumber.replace(/\D/g,' ');
    phoneNumber=phoneNumber.substring(3,16);
    phoneNumber=phoneNumber.replace(/\ /,'');
  }

  if(/[+40][0-9]{11}/g.test(phoneNumber)==true) {
    phoneNumber=phoneNumber.slice(2,6)+" "+phoneNumber.slice(6,9)+" "+phoneNumber.slice(9,12);
  }

  if(/[0-9]{10}/g.test(phoneNumber)==true) {
    phoneNumber=phoneNumber.slice(0,4)+" "+phoneNumber.slice(4,7)+" "+phoneNumber.slice(7,10);
  }

  alert(phoneNumber);
}
//initialize background map
document.getElementsByClassName('map').style.width=screen.width;
document.getElementsByClassName('map').style.height=screen.height;
