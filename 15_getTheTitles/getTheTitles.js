

/*const getTheTitles = function(arr) {
  let valueArr = [];
    for (let i = 0; i < arr.length; i++) {
      let currentValue = arr[i].title;
      valueArr.push(currentValue);
    }
  return valueArr;
};*/

/*const getTheTitles = function(obj) {
  let valueArr = obj.map(item => item.title);
  return valueArr; 
}*/

const getTheTitles = function(arr) {
  return arr.reduce((titles, book) => {
    titles.push(book.title);
    return titles;
  }, [])  
}

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

getTheTitles(books);


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
