const fibonacci = function(n) {
    if (n<0) return "OOPS";
    let first = 0;
    let next = 1;
    while(n--){
        let temp = next;
        next += first;
        first = temp;

    }
    return first;

};

// Do not edit below this line
module.exports = fibonacci;
