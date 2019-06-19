let data = [7,2,6,4,5,5,6,10,5];

function mean(data) {
    let total = 0, i;
    for (i = 0; i < data.length; i ++) {
        total += data[i];
    }
    return total / data.length;
}
function median(data) {
    let median = 0, dataLen = data.length;
        data.sort(); 
     if (dataLen % 2 === 0 ) 
        {
            median = (data[dataLen / 2 - 1] + data[dataLen / 2]) / 2;
        } else 
        { 
            median = data[(dataLen - 1) / 2];
        }
     return median;
}
function mode(data) {
    var modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < data.length; i += 1) {
        number = data[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(parseInt(i));
            }
        }
 
    return modes;
}




console.log(mean(data))
console.log(median(data))
console.log(mode(data))
