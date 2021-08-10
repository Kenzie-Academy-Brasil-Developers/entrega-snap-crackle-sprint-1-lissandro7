function snapCrackle (maxValue){
    
 let armazenar = '';

for(let i = 1 ;i <= maxValue ; i++){   
 if(i % 2 === 1 && i % 5 == 0){

       
        armazenar += 'SnapCrackle' + ',';
    }
     else if(i % 5 == 0 ){

        armazenar +=  'crackle'+ ',';

    }
     else if (i % 2 === 1){

        armazenar +=  'Snap' + ',';
    }
    
    else {
        armazenar +=  i + ',';
    }
}

return armazenar ;
}


console.log(snapCrackle());


// function snapCracklePrime (maxValue){

//     let primo = '';

//     for(let c = 1 ; c <= maxValue ; c++){




//          if(c % 2 === 1 && c % 5 === 0 ){

//             primo += 'SnapCrackle';

//         } 
       
        
//         else if (c % 2 === 1){

//             primo += ' ,snap';
//         }
//         else if (c % 5 === 0){

//             primo += ' ,crackle';
//             }

//             else if(  ( c / c)  == 1 ){

//                 primo += 'Prime'
//             }

//             else{
//                 primo += ' , ' + c ;

//             }

    
        
//     }
//     return primo;
// }
