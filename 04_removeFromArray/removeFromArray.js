const removeFromArray = function(arr,...toBeRemoved) {
let removedArr= [...toBeRemoved];


return arr.filter(val=>!toBeRemoved.includes(val));


};
removeFromArray([1,2,3,4],1,2,3,4);

// Do not edit below this line
module.exports = removeFromArray;
