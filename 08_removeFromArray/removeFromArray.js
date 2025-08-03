const removeFromArray = function(arr, ...itemToRemove) {
    let result = [];
    arr.forEach(item => {
        if(!itemToRemove.includes(item)) {
            result.push(item);
        }
    });

    return result;
};

alert(removeFromArray([1 ,2, 3, 4], 3));

//Function using a filter method;

const removeArray = function(arr, ...itemNeedsRemove) {
    return arr.filter(item => !itemNeedsRemove.includes(item));
}

alert(removeArray([1 ,2, 3, 4], 3));



// Do not edit below this line
module.exports = removeFromArray;
