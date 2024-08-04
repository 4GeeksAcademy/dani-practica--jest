let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

const fromDollarToYen = (valueInDollar) => {
    let valueInYen = valueInDollar * oneEuroIs.JPY / oneEuroIs.USD;
    return Number(valueInYen.toFixed(2))
}

const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen * oneEuroIs.GBP / oneEuroIs.JPY;
    return Number(valueInPound.toFixed(4))
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };