//                    Assignment
// We sppose products of array is as 
let products = [
  {
    id: 101,
    title: "Sony LED 40 inch 101",
    quantity: 5,
    price: 35000,
    status: true,
    colors: ["red", "black", "green"]
  },
  {
    id: 102,
    title: "Sony LED 43 inch 102",
    quantity: 3,
    price: 40000,
    status: false,
    colors: ["red"]
  },
  {
    id: 103,
    title: "Sony LED 51 inch 103",
    quantity: 2,
    price: 45000,
    status: true,
    colors: ["red", "black"]
  },
  {
    id: 104,
    title: "Sony LED 55 inch 101",
    quantity: 5,
    price: 50003,
    status: true,
    colors: ["red", "black", "green"]
  },
  {
    id: 105,
    title: "Sony LED 27 inch 102",
    quantity: 3,
    price: 50000,
    status: false,
    colors: ["red"]
  },
  {
    id: 106,
    title: "Sony LED 40 inch 103",
    quantity: 2,
    price: 35001,
    status: true,
    colors: ["red", "black"]
  }
]

// 1- Add 16% tax on each product price and then offer 10% discount on price.

let tax = products.map(product => {
  const taxPrice = product.price + (product.price * 0.16)
  const discountedPrice = taxPrice - (taxPrice * 0.10)
  return {
    ...product,
    price: discountedPrice
  }
});
console.log(tax);


// 2- Show all the LED whose price is in the range of 30K to 40K.
let led = products.filter(product => product.price >= 30000 && product.price <= 40000)
console.log(led);


// 3- Find the sum of all products whose price is odd number using reduce function. 
// let oddPrice = products.filter(product => product.price % 2 !== 0)
// console.log(oddPrice);
// let oddPrice = products.reduce((acc, curr) => {
//   if(curr.price % 2 !== 0) {
//     return acc + curr.price
//   } return acc
// }, 0)

// console.log(oddPrice);
let oddPrice = products.reduce((acc, curr) => curr.price % 2 !== 0 ? acc + curr.price : acc
, 0)

console.log(oddPrice);