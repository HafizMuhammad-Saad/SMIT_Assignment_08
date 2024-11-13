//                    Assignment
// We suppose poducts array as
let products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    varations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 45000, quantity: 1 },
      { id: 3, color: "silver", price: 40000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    varations: [
      { id: 1, color: "black", price: 45000, quantity: 5 },
      { id: 2, color: "red", price: 40000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    varations: [
      { id: 1, color: "black", price: 55000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 3.0,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
    ],
  },
];

// 1- For each product print the variation having minimum
// Find the variation with the minimum price for each product

const minimum = products.map(p => p.varations.reduce((acc, curr) => acc.price < curr.price ? acc : curr))
console.log(minimum);



// const minVariation = products.map(p => {
//   const min = p.varations.reduce((preval, currval) => {
//     return preval.price < currval.price ? preval : currval
//   })

//   return min
// })
// console.log(minVariation);

const minVariations = []
let minVariation = products.forEach((product) => {
  let min = product.varations[0];
  product.varations.forEach((varation) => {
    // console.log(varation.price);
    
    if(varation.price < min.price) {
      min = varation
    }
  })  
  minVariations.push(min)
})

console.log(minVariations);



// sample output
// [
//   { id: 3, color: 'silver', price: 40000, quantity: 8 },
//   { id: 2, color: 'red', price: 40000, quantity: 1 },
//   { id: 2, color: 'red', price: 50000, quantity: 1 }
// ]

// 2- Count the number of reviews on each product.
let count = products.map(p => {
  return {
    name: p.title,
    reviewsCount: p.reviews.length

  }
})
console.log(count);


// 3- Count the average rating of each product.
// let rating = products.map(p => p.reviews
//   .map(p => p.rating)
// )
// console.log(rating);

// let sumRat = rating.reduce((acc, curr) => acc + curr, 0)
// console.log(sumRat);

// let avgRati = sumRat / rating.length
// console.log(avgRati);

const avgRatings = products.map(product => {
  const ratings = product.reviews.map(review => review.rating);
  const sumRatings = ratings.reduce((acc, curr) => acc + curr, 0);
  return sumRatings / ratings.length;
});
console.log(avgRatings);


// 4- In each product show reviews that need to be moderated (status = false) along with id and title only
// meanseach product will have id, title and array of unmoderated reviews.

// ---------------------------------------------- More iteration...
// let unmoderatedReviews = products.map(({id, title, reviews}) => ({
//   id,
//   title,
//   reviews: reviews.filter(({status}) => !status)
// }))
// console.log(unmoderatedReviews);

// ---------------------------------------------------------- less iteration...
// let unmoderated = products.map(product => {
//   return {
//     id: product.id,
//     title: product.title,
//     reviews: product.reviews.filter(review => !review.status)
//   }
// })
// console.log(unmoderated);
// sample output
// [
//   {
//     id: 101,
//     title: "Sony LED 40 inch",
//     reviews: [
//       {
//         id: 2,
//         user: "Zubair",
//         rating: 4.5,
//         title: "Very Good Product",
//         comments: "zubair It is a very good product ....",
//         date: "05-02-2021",
//         status: false,
//       },
//     ],
//   },
// ];
