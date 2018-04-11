/*
    The drawing below gives an idea of how to cut a given "true" rectangle into 
    squares ("true" rectangle meaning that the two dimensions are different).

    to view diagram visit source https://www.codewars.com/kata/55466989aeecab5aac00003e

    Can you translate this drawing into an algorithm?

    You will be given two dimensions

    a positive integer length (parameter named lng)
    a positive integer width (parameter named wdth)
    You will return an array with the size of each of the squares.

    Shell bash returns a string.

  sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]

*/

function sqInRect(lng, wdth){
    var output =[];
    if(lng == wdth){
        return null;
    }else{
    while(lng != 0 && wdth != 0){
        if(lng>wdth){
            output.push(wdth)
            lng = lng-wdth;
        }else{
            output.push(lng);
            wdth = wdth-lng;
        }
        }
    }
    return output
}