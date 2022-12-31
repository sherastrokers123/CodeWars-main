function pipeFix(numbers){
  var first = numbers[0];
  var last = numbers[numbers.length-1];
  
  var arr = [];
  for(var i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}