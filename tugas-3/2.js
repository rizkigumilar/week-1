let inp = [123,9,27]

function numberArray (inp){
    let tot =0 
    for (let i = 0; i < inp.length; i++) {         
        tot += parseInt(inp[i])              
    }
    return tot.toString()
}
function getNumber(inp) {
    let jumlahAwal=0,tot=0;
    for (let i = 0; i < inp.length; i++) {
        jumlahAwal+=inp[i]
    }
    tot = jumlahAwal.toString();
    while(tot.length>1)
    {
        tot = numberArray(tot)
    }
    return tot
}
console.log(getNumber(inp))