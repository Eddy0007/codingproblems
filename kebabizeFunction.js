// Intructions
// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps

function kebabize(str) {
    // assign an object with All upper case Alphabets.
    // I use objects because it's easy to reffer a character
    // iterating through the entire object
    upCase = {
    "A":1, "B":2, "C":3, "D":4, "E":5, "F":6, "G":7, "H":8,"I":9, 
    "J":10, "K":11, "L":12, "M":13, "N":14, "O":15, "P":16, "Q":17,
    "R":18, "S":19, "T":20, "U":21, "V":22, "W":23, "X":24,"Y":25, 
    "Z":26
    }
    // loop through the input string
    for(var i=0; i<str.length; i++){
        // check if current character is not a number
      if(isNaN(parseInt(str.charAt(i)))){
        // if not a number, check if the character exist in the object
        if(str.charAt(i) in upCase){
            // if upper case use th sub string to insert "-" and convert the upper case char to lower
          str = str.substring(0,i)+"-"+str.charAt(i).toLowerCase()+str.substring(i+1);
        }
      }else{
        //   else if is a number remove it from the string
        str = str.substring(0,i)+str.substring(i+1);
        i--;
      }
    }
    return str;
  }

//   First solution doesn't pass when the input had a number as first char
//   and Uppercase as 2nd. Also doesn't passed if first char is Uppercase
function kebabize2(str) {
    up = {
    "A":1, "B":2, "C":3, "D":4, "E":5, "F":6, "G":7, "H":8,"I":9, 
    "J":10, "K":11, "L":12, "M":13, "N":14, "O":15, "P":16, "Q":17,
    "R":18, "S":19, "T":20, "U":21, "V":22, "W":23, "X":24,"Y":25, 
    "Z":26
    }
    for(var i=0; i<str.length; i++){
        if(!isNaN(parseInt(str.charAt(i))) || !isNaN(parseInt(str.charAt(i))) && i==0){
        str = str.substring(0,i)+str.substring(i+1);
        i--;
        }else{
        if(str.charAt(i) in up){
            var toLower = str.charAt(i).toLowerCase()
            if(i !== 0){
            str = str.substring(0,i)+"-"+toLower+str.substring(i+1);
            }else{
            str = str.substring(0,i)+toLower+str.substring(i+1);
            }
        }
        }
    }
    return str;
}