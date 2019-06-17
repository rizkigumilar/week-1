let biodata = [
    {
        name: 'rizki',
        bod: '8 april'
    },
    {
        name: 'rizkia',
        bod: '9 april'
    },
    {
        name: 'ayi',
        bod: '11 april'         
    }
]
// show data
let getData = function(item){
    let fullname = [item.name,item.bod].join(":");
    return fullname
}
console.log(biodata.map(getData));
// change data
biodata[0].name ='jajang';
console.log(biodata.map(getData));
// delete data
biodata.splice(2,2);
console.log(biodata.map(getData));
// push data
biodata.push({name: 'riizkia',bod: '12 april'});
console.log(biodata.map(getData));


