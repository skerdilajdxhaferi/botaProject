
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
    console.log(continents[randomContinent])


    
    continents[randomContinent].forEach(element =>{
            document.getElementById("states").innerHTML +=`
            
            <div class="col ">
                <div class=" item-menu">
                    <a href="view-state.html?name=${element.name.common}" target="_blank"><img src="${element.flags.png}" alt="${element.name.common}" class="product-img" /></a>
                    <div class="description">
                        <a href="view-state.html?name=${element.name.common}" target="_blank" style="text-decoration: none; color: black;"> <h4 class="card-title">${element.name.common}</h4></a>
                        <br>
                        <p><b>Area:</b> ${element.area.toLocaleString()}</p>
                        <p><b>Population:</b> ${element.population.toLocaleString()}</p>
                        <p><b>Capital:</b> ${element.capital}</p>
                        <br>
                        <a href="view-state.html?name=${element.name.common}" target="_blank"> View More </a>
                    </div>
                </div>
                </div>`

        })

    
        continents[randomContinent].forEach(element =>{
        
            document.getElementById("continentDescription").innerHTML=`
        <h1 class="state">${element.continents}</h1>`

        document.getElementById("carousel").innerHTML+=`
        <div class="image" style=" background-image:url(${element.flags.png})"></div>`
        })
    })

    // button to top
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
