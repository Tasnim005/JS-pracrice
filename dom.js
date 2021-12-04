//*****Single Element******
console.log(document.getElementById('my-form'))
console.log(document.querySelector('section'))

// we can also assign it to variable
const form = document.getElementById('my-form')
console.log(form)

// ******Multiple Element******
console.log(document.querySelectorAll('.item'))  // Always Use this
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li'))

// Loop through

const items = document.querySelectorAll('.item')
items.forEach(
    function(item){
        console.log(item)
    }
)

// If we want to write using arrow function
items.forEach(
    (item)=> console.log(item)
)


/**********************Manupulating DOM(Document Object Model)**********************/
//The HTML DOM is a standard for how to get, change, add, or delete HTML elements. In the DOM, all HTML elements are defined as objects.

const ul = document.querySelector('.items')
//ul.remove()
ul.lastElementChild.remove()

//A property is a value that you can get or set(like changing the content of an HTML element). HTML DOM properties are values (of HTML Elements) that you can set or change.
ul.firstElementChild.textContent = 'Hello'
ul.children[1].innerText = 'Tasnim'
ul.children[2].innerHTML = '<h1>Alam</h1>'

const btn = document.querySelector('.btn')
btn.style.background = 'red'
btn.style.fontSize = '16px'

//A method is an action you can do (like add or deleting an HTML element). HTML DOM methods are actions you can perform (on HTML Elements).
btn.addEventListener('click', function(e){ // we can also do events like mouseover, mouseout
    e.preventDefault()
    console.log('click')
    console.log(e)
    console.log(e.target.className)
    document.querySelector('#my-form').style.background = '#ccc'
    document.querySelector('.items').children[0].textContent = 'Thank You'
    document.querySelector('.items').children[0].style.textAlign = 'center'
    document.querySelector('header').classList.add('bg-dark')
    document.querySelector('.items').lastElementChild.innerHTML = 'Hello World'
})



