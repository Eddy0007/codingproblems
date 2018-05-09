/*
You are a captain on a pirate ship. You are looking to conquer islands, so that you can do lots of piratey stuff on those islands. Let's take a look at your pirate map of the area:

Map

                      x
         0    1    2    3    4    5    6    7

  0    ['p', '~', '~', '~', '~', '~', '~', '~'],
  1    ['~', '~', '~', '~', '~', '~', '~', '~'],
  2    ['~', '~', '~', '~', '~', '~', '~', '~'],
  3    ['~', '~', 'u', '~', '~', '~', '~', '~'],
y 4    ['~', '~', '~', '~', 'm', '~', '~', '~'],
  5    ['~', '~', '~', '~', '~', '~', '~', '~'],
  6    ['~', '~', '~', '~', '~', '~', '~', '~'],
  7    ['~', '~', '~', '~', '~', '~', '~', '~']];
where 'p' = pirate (that's our home island) 'u' = unoccupied island 'm' = island occupied by marines '~' = ocean waves

The map size will always be 8 x 8.

Coordinates

Given as [y, x]. Examples from the above map:

'p' at [0,0]

'u' at [3, 2]

'm' at [4, 4]

Aboard your ship, you have some rules for choosing an island to conquer.

Rules (in order of highest priority)

Conquer an unoccupied island if possible. If there are no unoccupied islands on the map, conquer one of the marines' islands.

Conquer the island closest to our home island (the 'p'), which is always at [0,0]. If there is a tie between two or more islands the same distance away, return the location of both. (But rule #1 has higher priority).

How to conquer an island

Return the coordinates of the island to be conquered [y, x]. If there is a tie between two or more islands the same distance away, return all the coordiantes [[y, x], [y, x]...].

Distance

Pirates can only move vertically and horizontally, not diagonally. Moving one index in the array is one unit of distance. Examples:
*/

/*
*   link to original problem
*   https://www.codewars.com/kata/pirate-island-conquer-part-1/train/javascript
*/


function conquerIsland(map) {
    //piratey code here
    var contains = function(needle) {
      // Per spec, the way to identify NaN is that it is not equal to itself
      var findNaN = needle !== needle;
      var indexOf;
  
      if(!findNaN && typeof Array.prototype.indexOf === 'function') {
          indexOf = Array.prototype.indexOf;
      } else {
          indexOf = function(needle) {
              var i = -1, index = -1;
  
              for(i = 0; i < this.length; i++) {
                  var item = this[i];
  
                  if((findNaN && item !== item) || item === needle) {
                      index = i;
                      break;
                  }
              }
  
              return index;
          };
      }
  
      return indexOf.call(this, needle) > -1;
    };
    
    Array.min = function( array ){
      return Math.min.apply( Math, array );
    };
    
    var map1;
    var islands = [];
    for(var i=0; i<8; i++){
      if(contains.call(map[i], 'u')){
        islands.push([i,map[i].indexOf('u')])
        map1 = islands.map(x => x[0]+x[1])
      }
    }
    if(islands.length === 1){
      return(islands[0]);
    }else if(islands.length > 1){
      var minimum = Array.min(map1);
      var indices = [];
      for(var i=0; i<map1.length; i++){
        if(map1[i] == minimum){
          indices.push(i);
        }
      }
      var multiIsland = [];
      for(var j=0; j<indices.length; j++){
        multiIsland.push(islands[indices[j]]);
      }
      if(multiIsland.length ==1){
        return multiIsland[0];
      }else if(multiIsland.length >1){
        return multiIsland;
      }
    }
    
    var map1;
    var islands = [];
    for(var i=0; i<8; i++){
      if(contains.call(map[i], 'm')){
        islands.push([i,map[i].indexOf('m')])
        map1 = islands.map(x => x[0]+x[1])
      }
    }
    if(islands.length === 1){
      return(islands[0]);
    }else if(islands.length > 1){
      var minimum = Array.min(map1);
      var indices = [];
      for(var i=0; i<map1.length; i++){
        if(map1[i] == minimum){
          indices.push(i);
        }
      }
      var multiIsland = [];
      for(var j=0; j<indices.length; j++){
        multiIsland.push(islands[indices[j]]);
      }
      if(multiIsland.length ==1){
        return multiIsland[0];
      }else if(multiIsland.length >1){
        return multiIsland;
      }
    }
    return [];
  }