const palindromes = function (string) {
    let len = string.length;
    string = string.toLowerCase();
    let start = 0;
    let end = len-1;
    while(start<=end){
        let asciiStart = string.charCodeAt(start);
        let asciiEnd = string.charCodeAt(end);
        if(asciiStart<97 || asciiStart>122){
            start++;
            continue;
        }
        else if(asciiEnd<97 || asciiEnd>122){
            end--;
            continue;
        }
        if(string[start]!==string[end]){
            return false;
        }
        else{
            start++,end--;
        }
    }
    return true;
    

};

// Do not edit below this line
module.exports = palindromes;
