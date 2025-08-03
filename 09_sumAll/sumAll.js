const sumAll = function(arr) {
    let result = [];

    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);

    for (let i = min; i <= max; i++) {
        result.push(i);
    }

    return result.reduce((sum, current) => sum + current, 0)

};

alert(sumAll([1, 4]));

// Do not edit below this line
module.exports = sumAll;
