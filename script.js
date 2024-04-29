function myFunction (array1,array2) {
 
    if (array1.length !== array2.length) {
        console.log("Xəta: Array uzunluqları eyni deyil.");
    }
    let hasil = [];
    for (let i = 0; i < array1.length; i++) {
        hasil.push (array1[i] * array2[i]);
    }

    return hasil;
   }
   console.log( myFunction([1,2,3,4,5],[6,7,8,9,10]) )
   
   
