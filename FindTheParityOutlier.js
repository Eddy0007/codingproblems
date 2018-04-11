/*  You are given an array (which will have a length of at least 3, but could be 
    very large) containing integers. The array is either entirely comprised of odd 
    integers or entirely comprised of even integers except for a single integer N. 
    Write a method that takes the array as an argument and returns this "outlier" N.*/

function findOutlier(integers){
    //your code here
    var evenNo=[];
    var oddNo=[]; 
    integers.forEach(function(element) {
        if(element%2 === 0){
        evenNo.push(element);
        }else{
        oddNo.push(element);
        }
    });
    if(evenNo.length ==1){
        return evenNo[0];
    }else{
        return oddNo[0];
    }
}