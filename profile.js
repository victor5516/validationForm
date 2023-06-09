
const body = document.querySelector('body');
const fillCard = () =>{
    console.log('fillCard');
   const data = localStorage.getItem('data')
   const user = JSON.parse(data)
   console.log(user);
   const fullName = document.getElementById('fullName');
   const mail = document.getElementById('mail');
   const date = document.getElementById('date');
   const gender = document.getElementById('gender')

   fullName.innerText = user.fullName;
   mail.innerText = user.mail;
   date.innerText = user.date;
   gender.innerText = user.gender

 }

 const goBack = () =>{
    window.history.back();
}

 body.onload = fillCard;