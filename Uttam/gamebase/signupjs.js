const button = document.getElementById('signUp');
const form = document.querySelector('.loginform');
const message= document.querySelector("#message");



button.addEventListener('click', (e)=> {
    if(form.username.value != ''){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    

    auth.createUserWithEmailAndPassword(email,password).then(cred => {
       
        document.getElementById('error').innerHTML='';
    
    }).catch(err => {
        document.getElementById('error').innerHTML=err.message;
    })
    
}
else{
    document.getElementById('error').innerHTML='Username Required';
    
}
})

auth.onAuthStateChanged(user=> {
    if(user){
        database.collection('users').add({
            username : form.username.value,
            email : user.email,
            admin : false
        });
         
        message.innerHTML="Account created! <a href='main-page.html'>click here to redirect to main page</a>"
     
    }
}); 
