// 'use strict'
// //for selecting an class from html in java script just write document.queryselector(class name)
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉Correct Number';
// document.querySelector('.number').textContent =13;
// document.querySelector('.score').textContent = 20;


// document.querySelector('.guess').value=23;  
// console.log(document.querySelector('.guess').value);



//first we can select the button and the event listner method into the function to do some operation
// as a first argument the first we can pass the event name and as a second argument we can pass the function value
// document.querySelector('.check').addEventListener('click',function(){
//         const guess = Number(document.querySelector('.guess').value);
//         console.log(guess);
// if(!guess){
//     document.querySelector('.message').textContent = '⛔No Number!';
// }
// });

    let secreatNumber = Math.trunc(Math.random()*20)+1;

let score = 20;


document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent='⛔No Number!';
    }

    else if(guess===secreatNumber){
        
 document.querySelector('.message').textContent = '🎉Correct Number';
 document.querySelector('.number').textContent=secreatNumber;


 //for changing or add the css style first we can select the class or section and after we can write .style for changing the style and after we can add our style.
 document.querySelector('body').style.backgroundColor='#60b347';

 document.querySelector('.number').style.width = '30rem'
    }
    else if(guess>secreatNumber){

        if(score>1){
            document.querySelector('.message').textContent = "📈to High";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = "💥You lost the Game";
            document.querySelector('.score').textContent = 0;
        }
     
    }
    else if(guess<secreatNumber){
     
        if(score>1){
            document.querySelector('.message').textContent = "📉to Low";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = "💥You lost the Game";
            document.querySelector('.score').textContent = 0;
        }
   }
})


//for reset button 

document.querySelector('.again').addEventListener('click',function(){
    score =20;
    secreatNumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value ='';

    document.querySelector('body').style.backgroundColor='#222';

    document.querySelector('.number').style.width = '15rem';
})