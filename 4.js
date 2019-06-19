let data = [
    {
      title: 'Hunger Games',
      isBorrowed: true,
    },
    {
      title: 'Harry Potter',
      isBorrowed: true,
    },
    {
      title: 'Assassins Creed',
      isBorrowed: false,
    },
    {
      title: 'Percy Jackson',
      isBorrowed: true,
    },
    {
      title: 'Fifty Shades of Grey',
      isBorrowed: false,
    },
];

function getStatus(judul){
    let status;
    for(let i = 0; i < data.length; i++){
        if(data[i].title === judul){
            status = [data[i].isBorrowed];
        }
    }
    return status.toString()
}

function getList(list){
    let status = [],index=0;
    for(let i=0;i<data.length;i++){
        if(list[i].isBorrowed === false){
            status[index] = "judul buku :"+list[i].title;
            index++
        }
    }
    return status
}

console.log(getStatus('Percy Jackson'))
console.table(getList(data))