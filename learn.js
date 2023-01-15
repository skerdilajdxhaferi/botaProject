

    function presEnter(cs, search) {
        document.getElementById(cs).addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById(search).click();
        }
        });
        }
            


presEnter("searchContinent", "btnSearch1")


document.getElementById("btnSearch1").addEventListener("click", () =>{
    document.getElementById("states").innerHTML = ''
    let continent = `${document.getElementById("searchContinent").value}`
    
fetch(`https://restcountries.com/v3.1/region/${continent}`)
    .then(response => response.json())
    .then(response => {
            console.log(response)  
        
        if (response.status == 404 || continent == "") {
                document.getElementById("states").innerHTML =`
                <h1> ${response.message} </h1>
                <p> Please write the continent name correctly</p>
                `
                }else{
                response.forEach(element => {
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
                    });
                }
        })
        document.getElementById("searchContinent").value = "";
        })

        //  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        presEnter("searchCountry", "btnSearch2")

        document.getElementById("btnSearch2").addEventListener("click", () =>{
            document.getElementById("states").innerHTML = ''
            let country = document.getElementById("searchCountry")
            country.classList.remove("items");

let countryName = country.value

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        if (response.status == 404) {
                document.getElementById("states").innerHTML =`
                <h1> ${response.message} </h1>
                <p> Please write the country name correctly</p>
                `
            }else{
                document.getElementById("states").innerHTML +=`
                    
                    <div class="col id="col">
                        <div class=" item-menu">
                        <a href="view-state.html?name=${response[0].name.common}" target="_blank"><img src="${response[0].flags.png}" alt="${response[0].name.common}" class="product-img" /></a>
                            <div class="description">
                                <a href="view-state.html?name=${response[0].name.common}" target="_blank" style="text-decoration: none; color: black;"> <h4 class="card-title">${response[0].name.common}</h4></a>
                                <br>
                                <p><b>Area:</b> ${response[0].area.toLocaleString()}</p>
                                <p><b>Population:</b> ${response[0].population.toLocaleString()}</p>
                                <p><b>Capital:</b> ${response[0].capital}</p>
                                <br>
                                <a href="view-state.html?name=${response[0].name.common}" target="_blank"> View More </a>
                        </div>
                    </div>
                    </div>`

                }
        })

        document.getElementById("states").style.gridTemplateColumns='100%'

        document.getElementById("searchCountry").value = "";
        })
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
    