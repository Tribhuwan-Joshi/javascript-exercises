const sumAll = function(start , end) {
    
    if(start>end){
        let temp = start;
        start = end;
        end = temp;
    }
    if(typeof start === "number" && typeof end ==="number" && start>=0){
let ans = 0;
for(let i =start; i<=end; i++){
    ans+=i;
}
return ans;
}
else return "ERROR";
};
x=sumAll(1,4000);
console.log(x);

// Do not edit below this line
module.exports = sumAll;
