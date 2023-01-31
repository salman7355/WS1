function Sum(A1 , A2){
    let sum = 0;  
        for(let j = 0 ; j<A2.length ; j++){
            if(A1.includes(A2[j]) == false){
                sum += A2[j];
            }      
        }
        for(let i = 0 ; i<A1.length ; i++){
            if(A2.includes(A1[i]) == false){
                sum += A1[i];
            }      
        }

    console.log(sum);
}


A = [3,1,7,9];
B = [2,4,1,9,3];
Sum(A,B);
    