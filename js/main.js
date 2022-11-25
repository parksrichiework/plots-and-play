
// cardArray.sort(() => 0.5 - Math.random())

// GLOBAL VARIABLES ---------------------------------------------------------------
const gridDisplay= document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let storyBackground= document.querySelector('#story-bg')
let gameBackground= document.querySelector('#game-bg')
const bookOne= document.querySelector('#i')
let books= document.querySelectorAll('.book')
let booksArray=[books]
        // ------------------------------------------ 


// booksArray.addEventListener('click', openBook)
// function openBook(){
//             for (let i = 0; i < books.length; i++) {
//                 let bookNumber = books[i].getAttribute('data-id')         
//             }
//             console.log(bookNumber)
//         }     



// for(i of books){
    
//     i.addEventListener('click', openBook)

//     function openBook(){
//         for (let i = 0; i <= books.length; i++) {
            
                       
//         }       
        
//     }
// }

for (var i = 0 ; i < booksArray.length ; ++i) {
    function(index) {
        booksArray[index].addEventListener("click", openBook() {
            alert ("You clicked region number: " + index");
        });
    };
}




// function createBoard (){
//     for(let i=0; i < cardArray.length; i++){
//         const card = document.createElement('img')
//         card.setAttribute('src', 'img/blank-logo.jpg')
//         card.setAttribute('data-id', i)
//         card.addEventListener('click', flipCard)
//         gridDisplay.append(card)
//         // console.log(card, i)
//     }
// }

// createBoard()





// function flipCard(){
//     const cardId = this.getAttribute('data-id')
//     // console.log(cardArray[cardId].name)
//     cardsChosen.push(cardArray[cardId].name)
//     cardsChosenIds.push(cardId)
//     // console.log('clicked', cardId)
//     // console.log(cardsChosen)
//     this.setAttribute('src', cardArray[cardId].img)
//     if(cardsChosen.length === 2){
//         setTimeout(checkMatch, 500)
//     }
    
// }



//  let allCloseButtons = document.querySelectorAll('.close')
//  let allInfo= document.querySelectorAll('div.info')
 

// for(i of allCloseButtons){
//     i.addEventListener('click', closeInfo)

//     function closeInfo(){
//         for (let i = 0; i <= allInfo.length; i++) {
//             if(allInfo[i].style.display= 'flex'){
//                 allInfo[i].style.display= 'none'
//                 document.querySelector('.info-box').style.display= 'none'
//             }            
//         }       
        
//     }
// }



