const removeFromArray = function(arr,...toBeRemoved) {
let removedArr= [...toBeRemoved];

for(let i=0; i<arr.length; i++){
    for(let j = 0; j <removedArr.length ; j++){
        if(arr[i]===removedArr[j]){
            arr.splice(i,1);
            i--;
            break;

        }
    }
    
}
return arr;


};
removeFromArray([1,2,3,4],1,2,3,4);

// Do not edit below this line
module.exports = removeFromArray;
