
  //show the message
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

  //change the background number
const backgroundColor = function (color) {
    document.querySelector('body').style.backgroundColor = color;
};

let score = 20;
let highscore = 0;
  //modal part
    const modal = document.querySelector('.finish');
    const overlay = document.querySelector('.overlay');
    const btnCloseModal = document.querySelector('.close-modal');
    
    
    fetch('https://restcountries.com/v3.1/all')
                .then(response => response.json())
                .then(response => {
            //  console.log(response)
    
            //filter the states by continents location
            let europa = response.filter((element)=>{
                return element.continents =="Europe"
    
            })
            let azia = response.filter((element)=>{
                return element.continents =="Asia"
    
            })
    
            let afrika = response.filter((element)=>{
                    return element.continents =="Africa"
    
            })
    
            let amerikaVeriut = response.filter((element)=>{
                    return element.continents =="North America"
    
            })
    
            let amerikaJugut = response.filter((element)=>{
                    return element.continents =="South America"
    
            })
    
            let oqeania = response.filter((element)=>{
                    return element.continents =="Oceania"
    
            })
            let antarktida = response.filter((element)=>{
                    return element.continents =="Antarctica"
    
            })
    
    
            let continents = [europa, azia, afrika, amerikaVeriut, amerikaJugut, oqeania, antarktida]
            
            let randomContinent = Math.floor(Math.random()*continents.length)
            console.log(randomContinent)
            let randomFlag = Math.floor(Math.random()*continents[randomContinent].length)
            console.log(randomFlag)
            console.log(continents[randomContinent])
            console.log(continents[randomContinent][randomFlag])
    
            
            
                    document.getElementById("flag").innerHTML +=`
                        <a href="https://en.wikipedia.org/wiki/${continents[randomContinent][randomFlag].name.common}" target="_blank" class ="secretState"><img src="${continents[randomContinent][randomFlag].flags.png}" alt="${continents[randomContinent][randomFlag].name.common}" class="product-img" /></a>`
    
    let theState = `${continents[randomContinent][randomFlag].name.common.toLowerCase()}`    

  // check the number
    document.querySelector('.check').addEventListener('click', function () {
    const guessFlag = document.querySelector('.guess').value;
        
    // When there is no input
    if (!guessFlag) {
        displayMessage('No state entered!');
        backgroundColor('rgb(79, 79, 79)');
    
        // When player wins
        } else if (guessFlag === theState) {
        displayMessage('You have found the corect state!');
        
    
        //open modal if the player has found the secret number
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    
        backgroundColor('green');
    
        
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    
      // When guess is wrong
    } else if (guessFlag !== theState) {
        if (score > 1) {
        
        backgroundColor('red');
        score--;
        document.querySelector('.score').textContent = score;
        } else {
        displayMessage('You lost the game!');
        document.querySelector('.score').textContent = 0;
        }
    }
    });

document.querySelector('.again').addEventListener('click', again);

  // restart the game
function again() {
    score = 20;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.location.reload(true)
    document.querySelector('.guess').value = '';

    // backgroundColor('#222');
    };
    
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

    // window.location = window.location
    // again();
};
    
    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
        
      // window.location = window.location
      // again();
    }
  });
  })
  