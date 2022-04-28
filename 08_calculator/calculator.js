const add = function(a,b) {
  return  a+b;
  
	
};

const subtract = function(a,b) {
  return  a-b;
};

const sum = function(numbers) {
  return  numbers.reduce(function(sum,val){
    return sum+=Number(val);
  },0);
};

const multiply = function(numbers) {
    return  numbers.reduce(function(first,next){
      return first*next;
    });
};

const power = function(a,b) {
  let res = 1;
  for(let i = 0; i<b;i++){
    res*=a;
  }
  return res;
	
};

const factorial = function(x) {
	let res = 1;
  while(x){
    res*=x;
    x--;
    
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
