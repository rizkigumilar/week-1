let Words = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let command = [true,false,true,false,true,false,false,true,true,false,true,true,false,true,false,true,false,true,false,true,true,false,true,false,true,false]

function print(arr){
    let tmp ="";
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === true){
            tmp += Words[i]            
        }
    }
    return tmp
}

console.log(print(command))
