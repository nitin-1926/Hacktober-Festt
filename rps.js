document.querySelector('#rock').addEventListener('click',function(){rpsGame(this)});
document.querySelector('#paper').addEventListener('click',function(){rpsGame(this)});
document.querySelector('#scissors').addEventListener('click',function(){rpsGame(this)});

rpsScore = {
    'wins':0,
    'losses':0,
    'draws':0    
}

function rpsGame(yourChoice){
    var humanChoice,botChoice;
    humanChoice = yourChoice.id;
    botChoice = numToChoice(randInt());
    var results = decideWinner(humanChoice,botChoice);
   
    var message = finalMessage(results);
    
    rpsFrontEnd(yourChoice.id,botChoice,message);
}
function randInt(){
    return Math.floor(Math.random()*3);
}
function numToChoice(number){
    return ['rock','paper','scissors'][number]
}
function decideWinner(humanChoice, botChoice){
    var rpsDatabase = {
        'rock': {"scissors":1,"rock":0.5,"paper":0},
        'paper': {"rock":1,"paper":0.5,"scissors":0},
        'scissors': {"paper":1,"rock":0,"scissors":0.5}
    }
     var yourScore = rpsDatabase[humanChoice][botChoice];
     var botScore = rpsDatabase[botChoice][humanChoice];
     
     return[yourScore,botScore]
}
function finalMessage([yourScore,botScore]){
    if (yourScore===0){ 
        rpsScore.losses++;
        return {'message':'You Lose!!', 'color':'red'};
    }else if (yourScore===0.5){ rpsScore.draws++;
        return {'message':'You Tied!!', 'color':'yellow'};

    }else{ rpsScore.wins++
        return{'message':'You win!!', 'color':'green'};

    }
}
function rpsFrontEnd(yourimageChoice,botimageChoice,finalmessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // removing all images after click
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

//adding the image selected by human and the bot
var humanDiv= document.createElement('div');
var botDiv= document.createElement('div');
var messageDiv= document.createElement('div');

humanDiv.setAttribute('id','humanDiv');
botDiv.setAttribute('id','botDiv');
messageDiv.setAttribute('id','messageDiv');

 humanDiv.innerHTML = "<img src ='" + imagesDatabase[yourimageChoice] + "' id = 'humanPic'>";
 messageDiv.innerHTML= "<h2 style = 'color :" + finalmessage["color"]  + ";'>" + finalmessage.message+ "</h2>"
 botDiv.innerHTML = "<img src ='" + imagesDatabase[botimageChoice] + "' id = 'botPic'>";

 document.getElementById('rpcPics').appendChild(humanDiv);
 document.getElementById('rpcPics').appendChild(messageDiv);
 document.getElementById('rpcPics').appendChild(botDiv);

 document.querySelector('#winsRPS').textContent = rpsScore.wins;
 document.querySelector('#drawsRPS').textContent = rpsScore.draws;
 document.querySelector('#lossesRPS').textContent = rpsScore.losses;

}
                                    //reset button  
function reset(){
    document.getElementById('humanDiv').remove();
    document.getElementById('botDiv').remove();
    document.getElementById('messageDiv').remove();
    newImages();
}
function newImages(){
    let rockImg= document.createElement('img');
    rockImg.id = "rock";
    var paperImg= document.createElement('img'); 
    paperImg.id = "paper";
    var scissorsImg= document.createElement('img'); 
    scissorsImg.id = "scissors";

    rockImg.src='rock.jpg';
    paperImg.src="http://static7.depositphotos.com/1077687/705/v/950/depositphotos_7050373-Stop-hand.jpg";
    scissorsImg.src="scissors.png";
    
    document.getElementById('rpcPics').appendChild(rockImg);
    document.getElementById('rpcPics').appendChild(paperImg);
    document.getElementById('rpcPics').appendChild(scissorsImg);
   
    document.querySelector('#rock').addEventListener('click',function(){rpsGame(this)});
    document.querySelector('#paper').addEventListener('click',function(){rpsGame(this)});
    document.querySelector('#scissors').addEventListener('click',function(){rpsGame(this)});                    
}   