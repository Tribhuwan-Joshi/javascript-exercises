const reverseString = function(string) {
    let ans="";
    let stringArr = string.split("")
for(let i = string.length -1 ; i>=0; i--){
    ans+=stringArr[i];
}
return ans;

};

// Do not edit below this line
module.exports = reverseString;
