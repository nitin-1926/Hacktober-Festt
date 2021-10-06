upload=document.getElementById("upload-game");
 signout=document.getElementById('signoutbutton');
    select=document.getElementById('filter');
    const searchbutton= document.getElementById('search');
const search= document.getElementById("searchbar");

row = document.getElementsByClassName('col-sm-4');
     
    
   


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






    function searchfun(){
        if(select.options[select.selectedIndex].value == 'all'){
        filter = document.getElementById('searchbar').value.toUpperCase();
        var j= 0;
        if(filter!=''){
        for( var i=0;i<row.length;i++){
        var  gamename= row[i].getElementsByTagName('h3')[0].innerText.toUpperCase();
    
            if(gamename){
            if(gamename.indexOf(filter) != -1 ){
                row[i].style.display='block';
                error.style.display='none';
                console.log(gamename.indexOf(filter));
                j++;
            }
            else{
                error = document.getElementById('error');
                row[i].style.display='none';
                console.log('error');
            }
            }
        }
    }
    if(j==0){
        error.style.display='block';
    }
        if(filter==''){
            for(var i=0;i<row.length;i++){
                row[i].style.display='none';
                error.style.display='none';
            }
        }
        
    }



    else{
        filter = document.getElementById('searchbar').value.toUpperCase();
        var j= 0;
        if(filter!=''){
        for( var i=0;i<row.length;i++){
        if(row[i].getElementsByTagName('span')[0].innerText.toUpperCase() == select.options[select.selectedIndex].value.toUpperCase()){
        var  gamename= row[i].getElementsByTagName('h3')[0].innerText.toUpperCase();
    
            if(gamename){
            if(gamename.indexOf(filter) != -1 ){
                row[i].style.display='block';
                error.style.display='none';
                console.log(gamename.indexOf(filter));
                j++;
            }
            else{
                row[i].style.display='none';
                
            }
            }
        }else{
            row[i].style.display='none';
        }
    }

}if(j==0){
    error.style.display='block';
}
    if(filter==''){
        for(var i=0;i<row.length;i++){
            row[i].style.display='none';
            error.style.display='none';
        }
    }
}
    }

    function selection(){
        searchfun();
    }
