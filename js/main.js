function frankenSplice(arr1, arr2, n) {
    let slice1 = arr1.slice(0);
    let slice2 = arr2.slice(0);




    for(let i = arr1.length-1;i >= 0;i--)
    slice2.splice(n,0,slice1[i]);


    return slice2;
  } 
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);