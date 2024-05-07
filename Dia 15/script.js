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
    <p> Hi, My name is </p>
    <p>${author.name.first} ${author.name.last}</p> 
    <p> My email address is </p>
    <p>${author.email}</p>
    <p> My birthday is </p>
    <p>${author.dob.date}</p>
    <p> My address is </p>
    <p>${author.location.street.number} ${author.location.street.name}</p> 
    <p> My phone number is </p>
    <p>${author.phone}</p>
    <p> My password is </p>
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