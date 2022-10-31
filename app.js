// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInyen = valueInDollar * 148.60;
    //return the dollar value
    return valueInyen;
}

const  fromYenToPound = function(valueInyen){
    // convert the given valueInEuro to dollars
    let valueInPound = valueInyen * 0.0059;
    //return the dollar value
    return valueInPound;
}


// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar ,fromYenToPound}
