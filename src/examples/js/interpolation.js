const name = 'John'
const lastName = 'Doe'
const age = 21

const concatenatedString = name + ' ' + lastName + ' is ' + age + ' years old'
console.log(concatenatedString)
const interpolatedString = `${name} ${lastName} is ${age} years old`
console.log(interpolatedString)

const concatenatedHtml = '<div><p>Hello ' + name + ' ' + lastName + '</p>' + '<p>You are ' + age + ' years old</p></div>'
const interpolatedHtml = `<div>
    <p>Hello ${name} ${lastName}</p>
    <p>You are ${age} years old</p>
</div>`
console.log(concatenatedHtml)
console.log(interpolatedHtml)
