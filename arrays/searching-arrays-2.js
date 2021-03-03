const list = [{
    title: 'My next trip',
    body: 'I would like to go to Portugal'
}, {
    title: 'Habits to work on',
    body: 'Web Dev, Daily & Weekly goals'
}, {
    title: 'My Office',
    body: 'Get a computer setup and my own place'
}];

/*
* NOTE: Below are two different ways to work with an array when finding an object within the array
*/
const findList = function (list, listTitle) { 
    return list.find(function (listItem, index) {
         return listItem.title.toLowerCase() === listTitle.toLowerCase(); 
    });
}

// Call for findIndex and find methods share the same purpose
// Had to remove empty array, so .toLowerCase method could work within the function
// Returns list object
const lists = function (list, listTitle) { 
    const index = list.findIndex(function (nextItem, index) {
         return nextItem.title.toLowerCase() === listTitle.toLowerCase(); 
    });
    return list[index]; 
}

// Not lowercase or uppercase sensitive after adding .toLowerCase method
const listItem = findList(list, 'my next trip');
    console.log(listItem);

const nextItem = lists(list, 'My next trip');   
    console.log(nextItem);

const findLists = function (list, query) {
    return list.filter(function (lists, index) {
        const isTitleMatch = lists.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = lists.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch;
    });
}

console.log(findLists(list, 'computer'));



