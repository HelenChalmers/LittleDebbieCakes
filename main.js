console.log("Hey Girl");

const lilDebbieArray = [];

const populationDB = function(localStorageKey, databaseObject) { const stringifiedDatabase =                JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

// populationDB("Little Debbie", lilDebbieArray);



const turtleBrownies = {
    name: "Turtle Brownies",
    brand: "Little Debbie",
    amount: "12 pieces",
    topping: "caramel",
    flavor: "chocolate",
    weight: "352 g"
}

const nuttyBuddy = {
    name: "Nutty Buddy",
    brand: "Little Debbie",
    amount: "24 pieces",
    topping: "none",
    flavor: "chocolate and peanut butter",
    weight: "1.44 kg"
}
//Create storeSnack Function Here (creating the array - LilDebbieArray)--------
    function storeSnack (arguement) {
        lilDebbieArray.push(arguement);
    }

//function for creating snack cakes object ------

function lilDebsCreate(cakename, cakebrand, cakeamount, caketopping, cakeflavor, cakeweight) {
    const snackCake = {
        name: cakename,
        brand: cakebrand,
        amount: cakeamount,
        topping: caketopping,
        flavor: cakeflavor,
        weight: cakeweight,
    }
    storeSnack (snackCake);
}



const OatmealPies = lilDebsCreate("oatmeal creme pies", "Little Debbie", "24", "none", "creme", "1.8kg");
    // console.log(OatmealPies);

const ZebraCakes = lilDebsCreate("Zebra Cakes", "Little Debbie", "10", "none", "vanilla", "1.8kg")


    // const snackCakes = [turtleBrownies, nuttyBuddy, OatmealPies, ZebraCakes];
    // console.log(snackCakes);


//function to saving to Local Storage ------------------

    
    // function populationDB() {

//-----------Steve's Simplified Solution ------------
//     const stringified = JSON.stringify(lilDebbieArray); localStorage.setItem("Little Debbie Cakes", stringified)
// }


