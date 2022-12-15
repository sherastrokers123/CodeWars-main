// Powers of 2
function powersOfTwo(n){
    const arr = [];
      for (let i =0; i<=n; i++){
        arr.push(Math.pow(2,i));
      }
      return arr;
    }