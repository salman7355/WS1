function readString(S){
    let Spaces = 0;    
    let counter = 0;
    let VCounter = 0;
    let vowels = ['a' , 'e' , 'i' , 'o' , 'u'];
    for(let i =0 ; i<S.length  ; i++){    
        if(S[i] == " "){ 
                Spaces +=1;
            }            
            else{
                for(let j = 0 ; j<vowels.length ; j++){
                    if(S[i] == vowels[j] || S[i] == vowels[j].toUpperCase() ){
                        VCounter++;
                    }
                }
                counter++;
            }
    }
    console.log(counter);    
    console.log(Spaces);    
    console.log(VCounter);        
}
readString("Task ONE completEd");
