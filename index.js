let age = 28;
let year = 2000;
console.log("age:", age, "year:", year);
age = 15;
console.log("age:", age, "year:", year);
year = 2013;
console.log("age:", age, "year:", year);

var score = 55;
console.log("score", score);

//...................
//strings
//concatination
// length
var email = "mustaqeem.ahmed@gmail.com";
var pass = "ahsoidhaoifhqoidhqiodh";
let passemail = email + "" + pass;
console.log(passemail);
console.log(email[2]);
console.log(email.length);

//string methods
console.log(email.toUpperCase());

let index = email.indexOf(".");
console.log(index);

//numbers
let radius = 10;
let pi = 3.14;
console.log("numbers", radius, pi);
//let result = radius % 3;
//let result = pi * radius ** 2;

//order of opr B I D M A S
// TEMPLATES STRING
const title = "my name is mustaqeem";

let result = `im from islamabad and ${title}`;

console.log(result);

/// arrays
//for loop

const names = ["q", "w", "e", "r", "tt"];
for (i = 0; i < names.length; i++) {
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

//while loop
const ages = [1, 2, 3, 4, 5, 6];
let q = 0;
while (q < 6) {
  let html = `<div>${ages[q]}</div>`;
  q++;
  console.log(html);
}

//do while
let w = 3;
do {
  console.log("val of w is", w);
  w++;
} while (w < 6);

//if statement

const password = "must@";

if (password.length >= 12 && password.includes("@")) {
  console.log("password is mighty strong enough");
} else if (password.length >= 5 || password.includes("@")) {
  console.log("password strong");
} else {
  console.log("weak");
}

//functions

const introduction = function (name, age, Class) {
  console.log(`i am ${name} ,i am  ${age} year old and i study in ${Class}`);
};
introduction("mustaqeem", "22", "10th");

//using return to use callbacks globally out of functions

const calcarea = function (radius) {
  return 3.14 * radius ** 2;
};

const area = calcarea(5);
console.log("area is", area);

//arrow function
const calcarea2 = (radius) => 3.14 * radius ** 2;
const area2 = calcarea(5);
console.log("area2 from arrow function  is", area);

const greet = () => "hello world";
const res = greet();
console.log(res);

//arrow2 function
const bill = (prod, tax) => {
  let total = 0;
  for (let i = 0; i < prod.length; i++) {
    total += prod[i] + prod[i] * tax;
  }
  return total;
};

console.log("total bill is", bill([20, 13, 23], [2.2]));

//object litterals

let user = {
  name: "mustaqeem",
  age: 22,
  location: "g13",
  blogs: [
    { title: "GET TO WORK", likes: 30 },
    { title: "what to work today", likes: 40 },
  ],
  login: function () {
    console.log("i have logged in");
  },
  logout: function () {
    console.log("logged out");
  },

  logblog: function () {
    console.log("following are my blogs");
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
};
user.logblog();
