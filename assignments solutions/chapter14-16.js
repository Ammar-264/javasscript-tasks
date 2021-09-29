// var arr = ['SSC' , 'HSC' , 'BCS' , 'BS', 'BCOM','MS','M.PHIL','PHD'];
// for (i=0 ; i< arr.length ; i++){
//     document.write(i+1 +' ) '+arr[i] +"<br>")
// }




// var studentsName = ['john' , 'cena' , 'liver'];
// var studentsScore  = [230 ,250 ,300];
// var total = 500;
// document.write('total marks : ' + total + "<br>" + "<br>" + 'Score of ' + studentsName[0] + ' is ' + studentsScore[0] + '.. percentage is : ' + (studentsScore[0]/total)*100 + '%'+ "<br>" + 'Score of ' + studentsName[1] + ' is ' + studentsScore[1] + '.. percentage is : ' + (studentsScore[1]/total)*100 + '%'+ "<br>" + 'Score of ' + studentsName[2] + ' is ' + studentsScore[2] + '.. percentage is : ' + (studentsScore[2]/total)*100 + '%');





// var score = [230,180,450]
// var sor = score.sort()
// console.log(sor)









// var arr = ['this ' , 'is  ' , 'my ']
// console.log(arr.join())



// var arr = ['mouse' , 'keyboard' , 'cpu','monitor']
// for (i=0  ; i<=arr.length;i++){

//     console.log(arr.pop())
// }




// var arr = ['mouse' , 'keyboard' , 'cpu','monitor']

// for (i=0;i<arr.length ; i++){
//     console.log(arr.shift())
// }








// chapter 17----20      -====--=================------------



// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// for (i=0 ; i<=arr.length ; i++){
//     document.write(arr[i] +"<br>")
// }





    // for(i=1;i<=10 ; i++){
    //     console.log(i)
    // }







//  var num1 = parseInt(prompt('enter number to show its multiplication table'));
//  var num2 = parseInt(prompt('enter number how may times you want to multiply'));
//  var table = 'table of '+ num1 + ' is : ' ;
//  document.write(table +"<br>" +"<br>"); 

//  for (i=1 ; i<=num2 ; i++){
//      var multiply  = num1 * i;
//      var tab = num1 + ' * ' + i + ' = '+multiply;
//      document.write(tab +"<br>")
//  }







// var fruits = ['apple ','mango','banana','orange' ,'strawberry']

// for (i=0;i<fruits.length ; i++){
//     var fruit = 'element at index '+ i +' is ' +fruits[i];
//     document.write(fruit +"<br>")
// }




// var co= 'counting : ';

// for (i=1 ; i<=15 ; i++){
   
// }













// var bakery = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties'];

// var prom = prompt('enter item wich you want');

// for (i=0 ;i<bakery.length ;i++){
//     if(prom == bakery[i]){
//         alert(bakery[i]+' is availale at index ' +i)
//         break
        
//     }else if(promp != bakery[i]){
//         alert('we are sorry ' +promp + ' is not available ')
//     }
// }








//  var arr = [24, 53, 78, 91, 12]
// console.log(Math.min(...arr))
 // // console.log(Math.max(...arr))
// for (i=0 ; i<arr.length ; i++){
//     for(k=1;k<arr.length ;k++){
//         for(j=2 ; j<arr.length;j++){
//             if(arr[i]>arr[k] && arr[i]>arr[j]){
//                 console.log(arr[i])
//             }
//         }
//     }
// }




// for(i=0 ;i<=100 ; i+5){
//  document.write(i+5)
// }














// chapte 21-25-------------------==========
// ,,,,,,,,,,,,,,,,,,,



// var fname = prompt('enter first name')
// var sname = prompt('enter second name')
// var con = fname.concat(sname)
// alert(con)



//  var str ='pakistan';
// for(i=0 ;i<str.length;i++){
//     if(str[i]=='n'){
//         console.log(i)
//     }
// }

// console.log(str[3])



// var hello = 'hello world';






// var city ='hyderabad';
// var isl = city.replace('hyder','islam')
// console.log(isl)




// var text = 'ali and ammar and ahmed and moiz';
// console.log(text.split('and').join('&'))





// var prom = prompt('enter name');
// var text= prom.toUpperCase();
// alert(text)



// var nuum = 76.54;
// var txt = nuum.toString();
// var rm = txt.replace('.','');

// console.log(parseInt(rm) + 6)


// var special ='!`~@#$%^&*()_-+=}{]["|\/.,><?';
// var username = prompt('enter usrname ');
// for(i=0;i<username.length ;i++){
//     for(k=0 ; k<special.length;k++){
//         if(username[i] == special[k]){
//             alert('enter correct username')
//         }
//         break
//     }
// }




// var prom = prompt('enter item which you want');
// var lower = prom.toLowerCase();

// var bakery = ['patties','pizza','popcorn','cookie','cake'];

// for(i=0;i<bakery.length;i++){
//     if(lower == bakery[i]){
//         alert('itwm avaiable');
//         break
//     }
// }







// var pass = prompt('enter password');
// if(pass.length<7){
//     alert('password must be greater than6 characters')
// }else{
//     alert('password confirmed')
// }




// var str = 'university hjf';
// console.log(str.split(''))






// var prom = prompt('enter name ')
// alert(prom.slice(-1))






// var str ='the quick brown fox jumps over the lazy dog';
// console.log((str.match(/the/g) || []).length)







