var moveZeros = function (arr) {
    let counttrue = []
    let countzero=[]
    for(x of arr){if(x!==0){counttrue.push(x)}else{countzero.push(x)}}
    return [...counttrue,...countzero]
  }
  //note: filter always filters out null and boolean and undefined types
