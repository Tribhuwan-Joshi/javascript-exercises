const findTheOldest = function(people) {
    for(let obj of people){
        if(!("yearOfDeath" in obj)){
            obj.yearOfDeath = new Date().getFullYear();
        }
        
        
    }
    let oldest = people.sort((a,b)=>(a.yearOfDeath-a.yearOfBirth)>(b.yearOfDeath-b.yearOfBirth)?-1:1);
    return oldest[0];

};

// Do not edit below this line
module.exports = findTheOldest;
