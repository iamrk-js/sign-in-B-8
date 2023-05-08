let cl = console.log;

const signInForm = document.getElementById('signInForm')

const email = document.getElementById("email");

const password = document.getElementById("password");

let emailFromDb = 'jhon@wick.com';
let passFromDB = 'jhonisalive';


// let db = [
//     {email : 'jhon1@wick.com', password : 'jhonisalive'},
//     {email : 'jhon2@wick.com', password : 'jhonisalive'},
//     {email : 'jhon3@wick.com', password : 'jhonisalive'},
//     {email : 'jhon4@wick.com', password : 'jhonisalive'},
// ]

const onSignInHandler = (eve) => {
    eve.preventDefault();
    // cl(`Sing In !!!`)
    let emailval = email.value;
    let passwordVal = password.value;
    if(emailval === emailFromDb && passwordVal === passFromDB){
        // alert(`Sign in Successfully`)
        Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Sign In Successfully',
            showConfirmButton: false,
            timer: 3000
          })
        signInForm.reset()
        return true;
    }else{
        // alert(`Invalid Username or Password`);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid Username or Password',
            timer : 3000,
            // position : 'top-start'
          })
        signInForm.reset()
        return false;
    }
} 





signInForm.addEventListener("submit", onSignInHandler)