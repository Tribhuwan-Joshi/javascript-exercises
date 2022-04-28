const getTheTitles = function(arr) {
    let ans =[];
    for(let obj of arr){
        ans.push(obj.title);
    }
    return ans;

};
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]


// Do not edit below this line
module.exports = getTheTitles;
