//PROBLEM  Student detials
let user1 = { name: "Ram", age: 17, total: 490 }
let user2 = { name: "Mohammed", age: 16, total: 324 }
let user3 = { name: "Sunita", age: 15, total: 440 }
let user4 = { name: "Anita", age: 17, total: 340 }
let user5 = { name: "Santosh", age: 18, total: 294 }
let user6 = { name: "Sanjay", age: 16, total: 489 }
let user7 = { name: "Sunil", age: 17, total: 342 } 
let user8 = { name: "Rajesh", age: 15, total: 432 }
let user9 = { name: "Gita", age: 16, total: 299 }
let user10 = { name: "Arun", age: 16, total: 450 }
//ADDING CLASS "X"
user1.class = "X"
user2.class = "X"
user3.class = "X"
user4.class = "X"
user5.class = "X"
user6.class = "X"
user7.class = "X"
user8.class = "X"
user9.class = "X"
user10.class = "X"
//ALL VALUES
console.log("\n ************ ALL VALUES ***********")
console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)
console.log(user5)
console.log(user6)
console.log(user7)
console.log(user8)
console.log(user9)
console.log(user10)
//ABOVE 480
let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]
let total_Filter1 = users.filter(n => n.total > 480)
console.log("\n ************ ABOVE 480 ***********")
console.log(total_Filter1)
//BELOW 360
console.log("\n ************ BELOW 360 ***********")
let total_filter2 = users.filter(n => n.total < 360)
console.log(total_filter2)

//REDUCE 480

let reduce1 =  users.reduce((pre,curr)=>{
    if(curr.total > 480){
        pre.above480 += 1
    }
    if(curr.total < 360){
        pre.below360 += 1
    }
    return pre
},{above480 : 0, below360 : 0})
console.log("********** COUNT ************")
console.log( "ABOVE 480 : " +reduce1.above480)
console.log("below 360 : " + reduce1.below360)


users.forEach(user => {delete user.age})

//ALL VALUES
console.log("\n ************ ALL VALUES without age ***********")
console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)
console.log(user5)
console.log(user6)
console.log(user7)
console.log(user8)
console.log(user9)
console.log(user10)
