// // Student marks
// console.log("\n ****** Student Mark detials ****** ")
// let TotalMark = 400
// let totalPercentage = (400/500)*100
// console.log(" ",totalPercentage, "%")
// console.log("\n ****** Student Grade detials ****** ")
// if(totalPercentage >= 90 && totalPercentage <= 100){
//     console.log(" Student scored : Grade A")
// }
// else if(totalPercentage >= 80 && totalPercentage <= 89){
//     console.log(" Student scored : Grade B")
// }
// else if(totalPercentage >= 70 && totalPercentage <= 79){
//     console.log(" Student scored : Grade C")
// }
// else if(totalPercentage >= 60 && totalPercentage <= 69){
//     console.log(" Student scored : Grade D")
// }
// else if(totalPercentage >= 50 && totalPercentage <= 59){
//     console.log(" Student scored : Grade C")
// }
// else{
//     console.log(" Student scored :  RA")
// }
// console.log("\n")


//Find the min and max count
// let a = 89 
// let b = 98
// let c = 101
// let max = 0
// let min = 0
// if(a >= b && a >= c){
//     max = a
// }
// else if(b >= a && b >= c){
//     max = b
// }
// else{
//     max = c
// }
// if(a <= b && a <= c){
//     min = a
// }
// else if(b <= a && b <= c){
//     min = b
// }
// else{
//     min = c
// }
// console.log("The maximun tableName is : " , max)
// console.log("The Minimum tableName is : ", min)

// Perfect triangle
// let a = 60
// let b = 60
// let c = 60
// if(a + b + c === 180){
//     if(a + b > c && b + c > a && c + a > b){
//         console.log("It is a perfect Triangle")
//     }
//     else{
//         console.log("The Sum is 180 but not an perfect triangle")
//     }
// }
// else{
//     console.log("Not a triangle or sum value is more then the given value")
// }

//Weeks
// let day = 1
// switch(day){
//     case 1:
//         console.log("Sunday")
//         break;
//     case 2:
//         console.log("Monday")
//         break;
//     case 3:
//         console.log("Tuesday")
//         break;  
//     case 4:
//         console.log("Wednesday")
//         break;
//     case 5:
//         console.log("Thursday")
//         break;    
//     case 6:
//         console.log("Friday")
//         break;  
//     case 7:
//         console.log("Saturday") 
//         break;
//         default:
//             console.log("Invalid")     
// }


//For Loop Problems
// let count = 10
// let tableName = 5
// for(let a = 0; a <= count; a++){
//     let number1 = tableName * a;
//     console.log(tableName + " X " + a + " = " + number1)
// }

//Skip numbers divisible by 4
// for(let a = 1; a <= 50; a++){
//     if(a%3===0 && a%5===0){
//         console.log("FizzBuzz")
//     }
//     else if(a%3===0){
//         console.log("Fizz")
//     }
//     else if(a%5===0){
//         console.log("Buzz")
//     }
//     else{
//         console.log(a)
//     }
// }

//Print all numbers from 1 to 50, but skip numbers divisible by 4.
// for(let a  = 1; a <= 50; a++){
//     if(a%4===0){
//         continue
//     }
//     else{
//         console.log(a)
//     }
// }

//Print all numbers from 1 to 100, but stop when the number is 45.
// for(let a  = 1; a <= 100; a++){
//     if(a===46){
//         continue
//     }
//     else{
//         console.log(a)
//     }
//  }

//Count how many even and odd numbers are between 1 and 100.
// let evencount = 0
// let oddcount = 0
// for(let a = 0; a <= 100; a++){
//     if(a%2===0){
//         evencount++;
//     }
//     else{
//         oddcount++;
//     }
// }
// console.log("even : ", evencount)
// console.log("odd : ", oddcount)

//Print only the prime numbers from 1 to 50.
for(let a = 2; a <= 50; a++){
    let isprime = true
    for(let b = 2; b <= Math.sqrt(a); b++){
        if(a%b==0){
            isprime = false
            break
        }
    }
    if (isprime){
        console.log(a)
    }
}

