console.log("yo");

//Get a reference to the populate database button in DOM
const buttonClick = document.getElementById("populateDatabase")

buttonClick.addEventListener("click", ( )=>{
    populationDB("LittleDebbie", lilDebbieArray)
});
