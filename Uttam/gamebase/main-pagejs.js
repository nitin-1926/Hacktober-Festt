firebase.auth.Auth.Persistence.LOCAL;
const upload = document.querySelector('#upload');
const welcome = document.querySelector('#welcome');
const signout= document.getElementById("signoutbutton");
const home= document.getElementById('home');
const search= document.getElementById('search');

signout.addEventListener("click",e=>{
    auth.signOut();
})

auth.onAuthStateChanged(user=> {
    if(!user){
     window.location.href='home-page.html';
    
    
    }else{
        

        database.collection('users').where('email','==', user.email).get().then((snapshot =>{
            snapshot.docs.forEach((doc)=>{
                var username = doc.data().username;
                welcome.innerHTML='Welcome '+username+'!';
                console.log(username);
                if(doc.data().admin==true){
                    upload.style.display='block';
                    signout.style.marginLeft='-70px'
                }
            })
        }))
    }
}); 




 
  
