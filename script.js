const form = document.querySelector('form');
const passwordInput = document.getElementById('password');
const passToggleBtn = document.getElementById('botoncito-ojito');

//Add event listener recibe 2 parametros, el evento y la funcion que se ejecuta.
// en este caso tenemos una funcion anonima como segundo parametro.


passToggleBtn.addEventListener('click',  () => {
    console.log('clicked');
    console.log(passToggleBtn.className);
    if(passToggleBtn.className === 'fa fa-eye') {
        passToggleBtn.className = 'fa-solid fa-eye-slash';
        console.log('cambie a slash');
    }else{
        console.log('cambie a eye');
        passToggleBtn.className = 'fa fa-eye';
    }

    if(passwordInput.type === 'password') {
        passwordInput.type = 'text';

    }else{
        passwordInput.type = 'password';
    }
});

const showError = (field, errorText) => {
    field.classList.add('error');
    const errorElement = document.createElement('small');
    errorElement.classList.add('error-text');
    errorElement.innerText = errorText;
    field.closest('.form-group').appendChild(errorElement);
}




const handleFormData = (e) =>{
   e.preventDefault();
   const fullNameInput = document.getElementById('name');
   const mailInput = document.getElementById('mail');
   const passwordInput = document.getElementById('password');
   const dateInput = document.getElementById('date');
   const genderInput = document.getElementById('gender');

   const fullName = fullNameInput.value.trim();
   const mail = mailInput.value.trim();
   const password = passwordInput.value.trim();
   const date = dateInput.value;
   const gender = genderInput.value;

   const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    const previousErrors =  document.querySelectorAll('.form-group .error')
    previousErrors.forEach(field => field.classList.remove('error'));
    const smallErrors = document.querySelectorAll('.error-text')
    smallErrors.forEach(errorText => errorText.remove())

   if(fullName === ''){
      console.log('El nombre esta vacio');
      showError(fullNameInput, 'Ingrese su Nombre completo')
   }
   if(!emailPattern.test(mail)){
      console.log('El mail no es valido');
      showError(mailInput, 'Ingrese su Mail')
   }
    if(password === ''){
    console.log('El password esta vacio');
    showError(passwordInput, 'Ingrese su contraseña')
    }
    if(date === ''){
        console.log('La fecha esta vacia');
        showError(dateInput, 'Ingrese su fecha de nacimiento')
    }
    if(gender === ''){
        console.log('El genero esta vacio');
        showError(genderInput, 'Ingrese su genero')
    }

   const errorInputs = document.querySelectorAll(".form-group .error");
   if(errorInputs.length > 0){
     console.log(errorInputs.length);
       return;
   }

   const data = {
        fullName,
        mail,
        password,
        date,
        gender
   }

   localStorage.setItem('data',JSON.stringify(data))


   form.submit();


}




form.addEventListener('submit', handleFormData )

