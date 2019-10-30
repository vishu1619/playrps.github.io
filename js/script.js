// ALL THE VARIABLES AT ONE PLACE
var userScore = 0;
var cpuScore = 0;
const rock_i =  document.getElementById('rock');
const paper_i = document.getElementById('paper');
const scissor_i = document.getElementById('scissor');
const reset_button = document.getElementById('reset')


// EVENT LISTNER HERE
rock_i.addEventListener('click', function(){
    game('R')
})

paper_i.addEventListener('click', function(){
    game('P')
})

scissor_i.addEventListener('click', function(){
    game('S')    
})
reset_button.addEventListener('click', function(){
    userScore = 0;
    cpuScore = 0;
    document.getElementById('user-score').innerHTML = userScore;
    document.getElementById('cpu-score').innerHTML = cpuScore;
    document.querySelector('.results p:nth-child(1)').innerHTML = "Choose one Of"    
    document.querySelector('.results p:nth-child(2)').innerHTML = "Rock, Paper, Scissor" 
    document.querySelector('.results p:nth-child(2)').style.color = "#571845"
})


// COMPUTER MAKING CHOICES 
computerChoice = function(){
    const compChoices = ['R','P','S'];
    const random = Math.floor(Math.random()*3);
    const cpuChoice = compChoices[random];
    if (cpuChoice == 'R') {
        document.querySelector('.results p:nth-child(1)').innerHTML = "Computer Played ROCK !"
    }
    else if (cpuChoice == 'P') {
        document.querySelector('.results p:nth-child(1)').innerHTML = "Computer Played Paper !"
    }
    else {
        document.querySelector('.results p:nth-child(1)').innerHTML = "Computer played Scissor !"    
    }
    return cpuChoice
}


// USER VS COMPUTER COMPARING
function game(user){
    const cpu = computerChoice()
    const final = user + cpu
    if (final == 'PR' || final == 'RS' || final == 'SP') {
        userScore++;
        win()
    }
    else if (final == 'PS' || final == 'RP' || final == 'SR') {
        cpuScore++;
        loose()
    }
    else {
        tie()
    }
}

// CHANGING THE ELEMENT OF THE PAGE USING .innerHTML
function win(){
    document.getElementById('user-score').innerHTML = userScore;
    document.querySelector('.results p:nth-child(2)').innerHTML = "YOU WON !"
    document.querySelector('.results p:nth-child(2)').style.color = "green"
}    

function loose(){
    document.getElementById('cpu-score').innerHTML = cpuScore;
    document.querySelector('.results p:nth-child(2)').innerHTML = "YOU LOST !"
    document.querySelector('.results p:nth-child(2)').style.color = "red"
}

function tie(){
    document.querySelector('.results p:nth-child(2)').innerHTML = "WoW! Tie";
    document.querySelector('.results p:nth-child(2)').style.color = "grey"
}









// document.querySelectorAll('ul li:nth-child(1)').style.backgroundImage = "url('newbg.png')"