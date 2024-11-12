
//                    Assignment
// We suppose marks array as  
let marks = [90, 80, 65, 40, 75, 30, 25, 15];

// 1- Print all the numbers greater then 40 in asc order using map

let num = marks.filter(mark => mark > 40).sort((a,b) => a - b)
console.log(num);


// 2- Find all the students having number equal to 70. 
let equal = marks.find(s => s === 70);
console.log(equal);



// 3- Find all the numbers less then 40 using filter function.
let num2 = marks.filter(mark => mark < 40);
console.log(num2);



// 4- Using forEach function display only fail students.
let failStudents = []
let fail = marks.forEach(mark => {
    if(mark < 40) {
        
      failStudents.push(`Fail: ${mark}`)  
    } 
})
// console.log(fail);

console.log(failStudents);


