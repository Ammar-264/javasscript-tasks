// var num = parseFloat(prompt('enter number'));
// document.write('number : ' + num +"<br>" +'round of value : ' + Math.round(num) +"<br>" +'floor value : '+Math.floor(num) +"<br>"+'ceil value: '+ Math.ceil(num))








// var tail = 0;
// var head = 1;
// var mth =Math.round( Math.random()*1)

// if(mth==tail){
//     console.log('tail wins')
// }else{

//     console.log('head wins')
// }







// console.log(Math.round(Math.random()*100))




// console.log(Math.round(Math.random()*5)+1)





// var mth = Math.round(Math.random()*9)+1;
// console.log(mth)
// var prom = parseInt(prompt('ener number between 1 to 10'));
// if(prom == mth){
//     alert('number match')
// }else{
//     alert('number denied')
// }








// chapter 31-34 ========================
// =======================================

// console.log(new Date())





// var months  = ['jan','feb','mar','apr','may','june' , 'july','august','sept','oct','nov','dec']
// var date = new Date();
// console.log(months[date.getMonth()])







// var days=['sun','mon','tue','wed','thur','fri','sat'];
// var date = new Date();
// console.log('today is '+days[date.getDay()])





// var days=['sun','mon','tue','wed','thur','fri','sat'];
// var date = new Date();
// var day = days[date.getDay()];
// if(day == 'sat' || day=='sun'){
//     console.log('its fun day')
// }else{
//     console.log('go and do yor work ')
// }





// var date = new Date();
// var hr =date.getHours()
// if(hr < 12){
//     console.log('its am')
// }
// else if(hr > 12){
//     console.log('its pm')
// }






// var prom = parseInt(prompt('enter your age'));
// alert((new Date().getFullYear()) - prom)






// var heading = 'K-Electric Bill '
// var boldHeading = heading.bold();
// var namee = 'ammar';
// var months  = ['jan','feb','mar','apr','may','june' , 'july','august','sept','oct','nov','dec']
// var month = months[ new Date().getMonth()]
// var units = 410;
// var perUnit = 20;
// var ammountBefrDueDate = units*perUnit;
// var lateCharges = 350;
// var ammountAfterDueDate = (units*perUnit)+lateCharges;

// document.write(boldHeading +"<br>"+"<br>" +' Customer Name : ' + namee+"<br>"+' Month : '+month+"<br>"+' Numbers of Units : '+units+"<br>"+' Charges Per Unit : '+perUnit +"<br>"+"<br>"+'Amount (with in due date) : '+ammountBefrDueDate+ +"<br>"+' Late payment Charges : ' +lateCharges +"<br>"+'Amount (After Due Date) : '+ammountAfterDueDate)








// chapter 35-38=======================================----------------------
// ================================

// function date(){
// console.log(new Date())
// }
// date()








//  function namee(fName ,lName){
//    alert(fName +' '+lName)
//    return
// }


// var first = prompt('enter first name ');
// var sec = prompt('enter second name ');
// namee(first,sec)







// function add(num1,num2){
// alert(num1 +num2)
// }
// var fnum = parseFloat(prompt('enter number'));
// var snum = parseFloat(prompt('enter ssecond number'));
// add(fnum,snum)






// function calculator(num1 , num2 , operator){
    
//  if(operator == 'addition'){
// alert(num1+num2)
// }else if(operator == 'subtraction'){
//      alert(num1-num2)

//  }else if(operator == 'multiplication'){
//     alert(num1*num2)

// }else if(operator == 'division'){
//     alert(num1/num2)

// }else{
// alert('enter operation (addition, subtraction , multiplication , division)')
// }
// }

// var numOne = parseFloat(prompt('enter number 1 '));
// var numTwo = parseFloat(prompt('enter number 2 '));
// var operation = prompt('enter operator');
// var oper = operation.toLowerCase();
// calculator(numOne,numTwo,oper)





// function square(num1 , num2){
//    console.log(num1 ** num2)
// }
// square(3,3)






// function counting(startNumber , endNumber){
//     for(i=startNumber ;i<=endNumber ;i++){
// document.write(i + "<br>")
//     }
// }
// let sNum = parseInt(prompt('enter number from where you want to start counting'))
// let eNum = parseInt(prompt('enter number to where you want to end counting'))
// counting(sNum , eNum)








// function hypo(base , perpendicular){
   
// var hypotenuse = base+perpendicular;
//   function hypoSq(hypotenuSq){
//      alert(hypotenuSq**2)
//   }
// hypoSq(hypotenuse)

// }

// var basee = parseFloat(prompt('enter base '));
// var perpendicularr = parseFloat(prompt('enter perpendiicular '));

// hypo(basee,perpendicularr)






// function area( width,height){
//     console.log('area of rectangle is : '+ (width*height))
// }
// area(4,8)






// function spl(str){
// var newStr = '';
//     for (i=str.length -1 ; i>=0 ; i--){
//        newStr+=str[i]
//     }
//    if (newStr == str){
//        console.log('its palindrome word')
//    }else{
//        console.log('its not a palindrome word')
//    }
// }

// var string = 'madam';
// spl(string)






// function capital(str){
//     var casee = str.toUpperCase()
    
//     console.log(casee)
// }
// capital('hi i am ammar')




// function str(strin , letter){

// for(i=0  ; i<strin.length ; i++){
//     if(str[i] == letter){
//         console.log(i)
    
//     }
// }
// } 

// var string  = 'hialiamammar';
// var letter = 'a';
// str(string  , letter)






// function circumference(radius){
//    var radiuss = radius;
//    var circum = 2*(22/7)*radiuss;
//    var circumferenceOfCircle = circum.toFixed(2);
// }
// circumference(6)


// function area(radiuss){
//   var radius = radiuss;
//   var areaOfCircle = (22/7) *(radius**2)
//   console.log(areaOfCircle.toFixed(2))
// }
// area(8)















// chapter 38-42==========================================----------------------
// ===========================================

// function custom(a,b){
//     console.log(a**b)
// }
// custom(2,4)









// function triangle( a,b,c){
//     var s = (a+b +c)/2;
//     var area = s*(s-a)*(s- b)*(s-c)
// return area
// }
// console.log(triangle(5,7,9))
  





// function main(sub1,sub2,sub3){
//     var total = 300
//     function average(){
//      var ave = (sub1+sub2+sub3)/3;
//      return ave       

//     }
//     function percentage(){
//         var obtained = sub1+sub2+sub3;
//         var percent = (obtained/total)*100;
//       return percent;
//     }
//     console.log('your average is : '+ average())
//     console.log('your percentage is : ' + percentage() +'%')
// }

// main(40,68,80)










// function rmVovel (){
//     var str = 'hi i am ammar';
//     var vovel = ['a','e','i','o','u'];
//     var arr = str.split('')
    
//     for(i=0;i<arr.length;i++){
//         for (k=0 ; k<vovel.length;k++){
//             if(arr[i]==vovel[k]){
//                  arr.splice(1,i)
//         }
//     }
//     }
//     console.log(arr.join(''))
// }
// rmVovel()







// function meter(km){
//     var meter = km*100;
//     return meter;
// }

// function inches(km){
//     var inch = km*39370.1;
//     var inInch = 'diatance between karachi and islamabad in inches is: '+inch;
// return inInch;
// }

// function centimeter(km){
//     var meter = km*100;
//     var centimet = meter*100;
//     var incentimeter = 'diatance between karachi and islamabad in centimeter is : ' + centimet;
//     return incentimeter
// }

// var karachiTOislamabadInKM = 1410.7;

// console.log('distance between karachi to islamabad in meter is : '+  meter(karachiTOislamabadInKM))
// console.log(inches(karachiTOislamabadInKM))
// console.log(centimeter(karachiTOislamabadInKM))










