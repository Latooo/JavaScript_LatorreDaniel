function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=1';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = 
    `
    <h2> Hi, My name is </h2>
    <p>${author.name.first} ${author.name.last}</p> 
    <h2> My email address is </h2>
    <p>${author.email}</p>
    <h2> My birthday is </h2>
    <p>${author.dob.date}</p>
    <h2> My address is </h2>
    <p>${author.location.street.number} ${author.location.street.name}</p> 
    <h2> My phone number is </h2>
    <p>${author.phone}</p>
    <h2> My password is </h2>
    <p>${author.login.password}</p>
    `
    ;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});