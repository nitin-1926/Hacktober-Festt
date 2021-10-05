var form = document.getElementById('form');
var select = document.getElementById('category-select');
const uploadnumber = document.getElementById('uploadnumber');
var gamecounter = 0;
var id ;

upload=document.getElementById("upload-game");
 signout=document.getElementById('signoutbutton');

    signout.addEventListener("click",e=>{
    auth.signOut();
})
    auth.onAuthStateChanged(user=> {
    if(!user){
     window.location.href='home-page.html';
    
    }else{
        

        database.collection('users').where('email','==', user.email).get().then((snapshot =>{
            snapshot.docs.forEach((doc)=>{
                if(doc.data().admin==true){
                    upload.style.display='block';
                    signout.style.marginLeft='-80px';
                    
                }
            })
        }))
    }
}); 

function selection(){
 category = select.options[select.selectedIndex].value;
};
auth.onAuthStateChanged(user=> {
    if(user){
database.collection('users').where('email','==',user.email).get().then((snapshot)=> {
    snapshot.docs.forEach(doc =>{
        id = doc.id;
      
    })
})

database.collection('users').where('email','==',user.email).get().then((snapshot)=> {
    snapshot.docs.forEach(doc =>{
        doc.ref.collection('games').get().then((snap)=>{
            snap.docs.forEach(document =>{
                gamecounter++;
            });
            if(gamecounter==0)
            uploadnumber.innerHTML='You have not uploaded any game! Start Uploading now!';
            if(gamecounter==1)
            uploadnumber.innerHTML='You have uploaded 1 game';
            if(gamecounter>1){
                uploadnumber.innerHTML='You have uploaded '+gamecounter+" games";
            } 
        })
      
    })
})


}

});








form.addEventListener('submit',(e) => {
    e.preventDefault();
    var gamename= document.getElementById('gamename').value;
var gamelogo = document.getElementById('gamelogo').value;
var iframe = document.getElementById('iframes').value;
var select = document.getElementById('category-select');
var category = select.options[select.selectedIndex].value;
    database.collection('users').doc(id).collection('games').add({
        gamename : gamename, 
        gamelogo : gamelogo, 
        iframe : iframe, 
        category : category
    }).then(()=>{
        window.alert('Game Uploaded to the database!!!');
        location.reload();
    });
   form.reset();
});
    
