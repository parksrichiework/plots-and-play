
// cardArray.sort(() => 0.5 - Math.random())

// GLOBAL VARIABLES ---------------------------------------------------------------

let storyBackground= document.querySelector('#story-bg')
let gameBackground= document.querySelector('#game-bg')
const bookOne= document.querySelector('#i')
let books= document.querySelectorAll('.book')
let booksArray=[books]
let storyTitleDisplay= document.querySelector('#story-title')
let storyContainer= document.querySelector('.story-container')
let gameTitleDisplay= document.querySelector('#game-title')
let gameContainer= document.querySelector('.game-container')
const body=document.querySelector('#body')
 
        // ------------------------------------------ 

for(i of books){
    
    i.addEventListener('click', openBook)

    function openBook(e){
        gameTitleDisplay.style.display= 'flex'

        // if book i is chosen               
           if(e.target.getAttribute('id') === 'i'){
            console.log('book i chosen')
            storyBackground.style.backgroundImage= "url('img/sticky-hand.jpg')";
            gameBackground.style.backgroundImage= "url('img/sticky-hand.png')";
            storyTitleDisplay.innerHTML= "Umm..."
            gameTitleDisplay.innerHTML= "Memory Game"
            gameTitleDisplay.setAttribute('href', 'https://parksrichiework-memory-game.netlify.app/')
            gameTitleDisplay.setAttribute('target', '_blank')
           } 
        //    if book ii is chosen 
           else if(e.target.getAttribute('id') === 'ii'){
            console.log('book ii chosen')
            storyBackground.style.backgroundImage= "url('img/bouncy-ball.jpg')";
            gameBackground.style.backgroundImage= "url('img/bouncy-ball.png')";
            storyTitleDisplay.innerHTML= "Story ii"
            gameTitleDisplay.innerHTML= "Game ii"
            // -----------------------------------change game link here vvvvv 
            gameTitleDisplay.setAttribute('href', 'https://parksrichiework.github.io/frogger-game/')
            gameTitleDisplay.setAttribute('target', '_blank')
           }  
           
        //    if book iii is chosen 
         
            else if(e.target.getAttribute('id') === 'iii'){
            console.log('book iii chosen')
            storyBackground.style.backgroundImage= "url('img/ninja-toy.jpg')";
            gameBackground.style.backgroundImage= "url('img/ninja-toy.png')";
            storyTitleDisplay.innerHTML= "Story iii"
            gameTitleDisplay.innerHTML= "Game iii"
            // -----------------------------------change game link here vvvvv 
            gameTitleDisplay.setAttribute('href', 'https://parksrichiework.github.io/Shape-Sorting-Game/')
            gameTitleDisplay.setAttribute('target', '_blank')
           } 
        //    if book iv is chosen
           else if(e.target.getAttribute('id') === 'iv'){
            console.log('book iv chosen')
            storyBackground.style.backgroundImage= "url('img/ring.jpg')";
            gameBackground.style.backgroundImage= "url('img/ring.png')";
            storyTitleDisplay.innerHTML= "Story iv"
            gameTitleDisplay.innerHTML= "Game iv"
            // -----------------------------------change game link here vvvvv 
            gameTitleDisplay.setAttribute('href', 'https://parksrichiework.github.io/whack-a-mole/')
            gameTitleDisplay.setAttribute('target', '_blank')
           } 
        //    if book v is chosen 
           else if(e.target.getAttribute('id') === 'v'){
            console.log('book v chosen')
            storyBackground.style.backgroundImage= "url('img/capsule.jpg')";
            gameBackground.style.backgroundImage= "url('img/capsule.png')";
            storyTitleDisplay.innerHTML= "Story v"
            gameTitleDisplay.innerHTML= "Game v"
            // -----------------------------------change game link here vvvvv 
            gameTitleDisplay.setAttribute('href', 'https://parksrichiework-memory-game.netlify.app/')
            gameTitleDisplay.setAttribute('target', '_blank')
           }
        //    if book vi is chosen
           else if(e.target.getAttribute('id') === 'vi'){
            console.log('book vi chosen')
            storyBackground.style.backgroundImage= "url('img/dispenser.jpg')";
            gameBackground.style.backgroundImage= "url('img/dispenser.jpg')";
            storyTitleDisplay.innerHTML= "Story vi"
            gameTitleDisplay.innerHTML= "Game vi"
            // -----------------------------------change game link here vvvvv 
            gameTitleDisplay.setAttribute('href', 'https://parksrichiework-memory-game.netlify.app/')
            gameTitleDisplay.setAttribute('target', '_blank')
           } 
           
        gameBackground.style.display= 'flex'
        gameContainer.style.display= 'flex'        
        storyTitleDisplay.classList.remove('hide')
        storyTitleDisplay.style.display= 'flex'
        storyContainer.style.width= '50%'
        storyBackground.style.width= '92%'
        storyBackground.style.backgroundRepeat= 'repeat'   
        
           
             
    }

   
}


storyTitleDisplay.addEventListener('click', openStory)

function openStory(e){
    if(e.target.innerHTML=== "Umm..." && body.style.width < '640px'){
        console.log('open story i')
        gameBackground.style.display= 'none'
        gameContainer.style.display= 'none'
        storyBackground.style.width= '95%'
        storyContainer.style.width= '99%'
        storyTitleDisplay.style.display= 'none'
        storyBackground.style.backgroundImage= "url('img/comic_ummm.jpg')"
        // storyBackground.style.backgroundSize= 'fill'
        storyBackground.style.backgroundPosition= 'center'
        storyBackground.style.backgroundRepeat= 'no-repeat'
        
        
    } 
    

    if(e.target.innerHTML=== "Story ii"){
        console.log('open story ii')
        gameBackground.style.display= 'none'
        gameContainer.style.display= 'none'
        storyBackground.style.width= '95%'
        storyContainer.style.width= '99%'
        storyTitleDisplay.style.display= 'none'
        storyBackground.style.backgroundImage= "url('img/comic-panel-02.jpg')"
        // storyBackground.style.backgroundSize= 'fit'
        storyBackground.style.backgroundPosition= 'center'
        storyBackground.style.backgroundRepeat= 'no-repeat'
        
    } 

    if(e.target.innerHTML=== "Story iii"){
        console.log('open story iii')
        gameBackground.style.display= 'none'
        gameContainer.style.display= 'none'
        storyBackground.style.width= '95%'
        storyContainer.style.width= '99%'
        storyTitleDisplay.style.display= 'none'
        storyBackground.style.backgroundImage= "url('img/comic-panel-03.jpg')"
        // storyBackground.style.backgroundSize= 'fit'
        storyBackground.style.backgroundPosition= 'center'
        storyBackground.style.backgroundRepeat= 'no-repeat'
        
    } 

    if(e.target.innerHTML=== "Story iv"){
        console.log('open story iv')
        gameBackground.style.display= 'none'
        gameContainer.style.display= 'none'
        storyBackground.style.width= '95%'
        storyContainer.style.width= '99%'
        storyTitleDisplay.style.display= 'none'
        storyBackground.style.backgroundImage= "url('img/comic-panel-04.jpg')"
        // storyBackground.style.backgroundSize= 'fit'
        storyBackground.style.backgroundPosition= 'center'
        storyBackground.style.backgroundRepeat= 'no-repeat'
        
    } 

    if(e.target.innerHTML=== "Story v"){
        console.log('open story v')
        gameBackground.style.display= 'none'
        gameContainer.style.display= 'none'
        storyBackground.style.width= '95%'
        storyContainer.style.width= '99%'
        storyTitleDisplay.style.display= 'none'
        storyBackground.style.backgroundImage= "url('img/comic-panel-05.jpg')"
        // storyBackground.style.backgroundSize= 'fit'
        storyBackground.style.backgroundPosition= 'center'
        storyBackground.style.backgroundRepeat= 'no-repeat'
        
    }
    if(e.target.innerHTML=== "Story vi"){
        console.log('open story vi')
        gameBackground.style.display= 'none'
        gameContainer.style.display= 'none'
        storyBackground.style.width= '95%'
        storyContainer.style.width= '99%'
        storyTitleDisplay.style.display= 'none'
        storyBackground.style.backgroundImage= "url('img/comic-panel-06.jpg')"
        // storyBackground.style.backgroundSize= 'fit'
        storyBackground.style.backgroundPosition= 'center'
        storyBackground.style.backgroundRepeat= 'no-repeat'     

        
    } 
    // if(body.style.width<= '640px'){
    //     storyBackground.style.width= '360px'            
    //     storyContainer.style.width= '380px'
    // }
   

}

