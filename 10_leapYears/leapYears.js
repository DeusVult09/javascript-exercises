const leapYears = function(year) {
    const yearDevisibleByFour = year % 4 === 0;
    const yearNotDevisibleBy100 = year % 100 !== 0;
    const yearDevisibleBy400 = year % 400 === 0;

    if ( yearDevisibleByFour &&  (yearNotDevisibleBy100 || yearDevisibleByHundred )) {
        return true;
    } else {
        return false;
    }
};

leapYears(2036);

// Do not edit below this line
module.exports = leapYears;
