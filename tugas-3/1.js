let data = ['nursesrun','level','radar', 'retor', 'madam', 'racecar', 'gag', 'mum', 'kayak'];


function reverse(data){
    return data.split("").reverse().join("");
}

function checkIsPalindrome(data){
  var result=[];
  for(var i=0;i<data.length;i++){
      result.push(data[i]==reverse(data[i]));
  }
  return result;
}

console.log(checkIsPalindrome(data));