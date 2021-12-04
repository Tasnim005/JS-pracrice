// alert('Hello World')
console.log('Hi! I am Tasnim Alam.')
// console.error('This is an error')
// console.warn('This is a warning')

// JavaScript defines 5 types of primitive data types: string, number, boolean, null, undefined

const name = 'Tasnim' // Use quotation only when you are writing names or something like that. if you use quotation for a number, it will tell it a 'string' instead of a 'number'.

const myage = 16
const rating = 4.9

const isCool = true
const x = null

const y = undefined
let z

console.log(typeof z)

// Concatenation
console.log(`I am ${name} and I am ${myage}` )

const s = 'Hello World'

console.log(s.length)
console.log(s.toUpperCase())
console.log(s.substring(0, 5).toLowerCase()) //substring  (two indexes that indicates start and end)

console.log(s.split(''))

const A = 'apple, mangoes, guavas'
console.log(A.split(','))

// Arrays
const numbers = [1, 2, 3, 4, 5]
console.log(numbers)

const cities = ['Dhaka', 'London', 'Delhi']
console.log(cities)

// Accessing Array
console.log(cities[1])

// push method- pushes a value at the end.
cities.push('Sydney')
console.log(cities)

// unshift- adds to the beginning.
cities.unshift('Dubai')
console.log(cities)

// pop- to delete the last one.
numbers.pop()
console.log(numbers)

// to see if something is an array.
console.log(Array.isArray(cities))

// indexOf- if we want to get the index of a certain value
console.log(cities.indexOf('Sydney'))

//In JavaScript, almost "everything" is an object.(Example: dates, maths, arrays etc.) Objects are variables too. But objects can contain many values. JavaScript objects are containers for named values, called properties and methods

//Object values are written as name : value pairs (name and value separated by a colon). A JavaScript object is a collection of named values. The named values, in JavaScript objects, are called properties. To learn more, Visit:https://www.w3schools.com/js/js_object_definition.asp

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        streetName: '50 main street',
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

console.log(person.firstName, person.lastName)
console.log(person.hobbies[1]) //Accesssing arrays in an object
console.log(person.address.country) //Accesssing arrays in an object


//Object Destructuring

const {firstName, lastName, address: {city}} = person
console.log(city)

// if we want to set up a different name for our variable

const{firstName: fName} = person
console.log(fName)

// if we want to get something that person don't have

const{favouriteFood = 'Rice'} = person
console.log(favouriteFood) // Suppose we have the property 'favouriteFood' inside the object person, & it has value of 'watermelon' , then when we'll console.log(favouriteFood) , it will give us 'watermelon' instead of 'Rice'

// we can also destructure our nested objects


//DOT SYNTAX
// Get single value
console.log(person.firstName)

// Get array value
console.log(person.hobbies[1]);

// Get embedded object
console.log(person.address.city);

// Add property
person.email = 'jdoe@gmail.com';

// Arrays of objects
const todos = [
    {
        id: 1,
        text: 'Meeting with boss',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Finish the project',
        isCompleted: false
    },

    {
        id: 3,
        text: 'Call Alex',
        isCompleted: true
    },
]

console.log(todos)

// Get specific object value
console.log(todos[2].text)

// Format as JSON
console.log(JSON.stringify(todos))

// For Loops
for(let x = 1; x <=3 ; x++){
    console.log(x)
}

for(let y = 0; y <= 5; y++){
    console.log(`For loop number: ${y}`)
}

// while loop

let i = 0
while(i<5){
    console.log(i);
    i++
}
// *********************************************
// *********************************************

// High order array method

todos.forEach(function(todo){
    console.log(todo.text)
})


const todoText = todos.map(
    function(todo){
        return todo.text
    }
)
console.log(todoText)


const todoCompleted = todos.filter(
    function(todo){
        return todo.isCompleted === true;
    }
).map(
    function(todo){
        return todo.text;
    }
)
console.log(todoCompleted)


//***************************************************
// IF/ ELSE Statements
const m = 20
if(m === 10) {
    console.log('m is 10')
} else if(x >10) {
    console.log('m is grater than 10')
} else {
    console.log('m is less than 10')
}

const a = 5
const b = 10

if(a>5 || b<15){
    console.log('A is greater than 5 or b is less than 15')
}

// ***************Ternary Operator**************
const color = a>5 ? 'red' : 'green'  // here ? is 'then' and : acts like else
console.log(color)

// Alternate
if(a===5){
    console.log('red')
} else{
    console.log('green')
}

// Switch Statement

const p = 1
const colour = p>10 ? 'red' : 'green'
console.log(colour)

switch(colour) {
    case 'red': console.log('color is red');
    break;
    case 'green': console.log('color is green');
    break;
    default: console.log('color is not red nor green');
    break;
}


// Functions
function multiplication (num1= 10, num2=7){
    return num1*num2
}
console.log(multiplication(13, 17))

/****************Object Oriented Programming*********************
*****************************************************************/

//Constructor Function
function Person(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
     /*this.getBirthYear = function(){
        return this.dob.getFullYear()
    
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }*/
}

//Prototypes

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear()
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}
// Instantiate Object
const person1 = new Person('Jack', 'Ma', '05-4-1967')
const person2 = new Person('Jeff', 'Bezos', '07-24-1958')

console.log(person1)
console.log(person1.dob.getFullYear())
console.log(person2.getBirthYear())
console.log(person1.getFullName())

class Persons{
    constructor(firstName, lastName, dob){
        this.firstName = firstName
        this.lastName = lastName
        this.dob = dob
    }

    getBirthYear(){
        return this.dob.getFullYear()
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const person3 = new Persons('Marshal', 'Eriksen', '06-03-15')
console.log(person3.getFullName())

