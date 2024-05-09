// Definición del Custom Element para los controles de información
class AuthorInfoControls extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .btn-group {
                    margin-bottom: 20px;
                }
            </style>
            <div class="btn-group">
                <custom-button target="name">Name</custom-button>
                <custom-button target="email">Email</custom-button>
                <custom-button target="birthday">Birthday</custom-button>
                <custom-button target="address">Location</custom-button>
                <custom-button target="phone">Phone</custom-button>
                <custom-button target="password">Password</custom-button>
            </div>
        `;
        this.shadowRoot.querySelectorAll('custom-button').forEach(button => {
            button.addEventListener('controlSelected', event => {
                this.dispatchEvent(new CustomEvent('controlSelected', { detail: event.detail }));
            });
        });
    }
}

// Definición del Custom Element para los botones personalizados
class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.target = this.getAttribute('target');
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <button type="button" class="btn btn-outline-secondary">${this.textContent}</button>
        `;

        this.addEventListener('mouseover', () => {
            this.dispatchEvent(new CustomEvent('controlSelected', { detail: this.target }));
        });
    }
}

customElements.define('author-info-controls', AuthorInfoControls);
customElements.define('custom-button', CustomButton);

// Consumo de la API para obtener información de usuarios aleatorios
const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=1';

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let authors = data.results;
        return authors.map(function(author) {
            let li = document.createElement('ul');
            let img = document.createElement('img');
            let span = document.createElement('span');
            img.src = author.picture.medium;
            const nameSpan = document.getElementById('name');
            const emailSpan = document.getElementById('email');
            const birthdaySpan = document.getElementById('birthday');
            const addressSpan = document.getElementById('address');
            const phoneSpan = document.getElementById('phone');
            const passwordSpan = document.getElementById('password');

            nameSpan.innerHTML = `<h2> Hi, My name is </h2><p>${author.name.first} ${author.name.last}</p>`;
            emailSpan.innerHTML = `<h2> My email address is </h2><p>${author.email}</p>`;
            birthdaySpan.innerHTML = `<h2> My birthday is </h2><p>${author.dob.date.slice(0, 10).replace(/-/g, "/")}</p>`;
            addressSpan.innerHTML = `<h2> My address is </h2><p>${author.location.street.number} ${author.location.street.name}</p>`;
            phoneSpan.innerHTML = `<h2> My phone number is </h2><p>${author.phone}</p>`;
            passwordSpan.innerHTML = `<h2> My password is </h2><p>${author.login.password}</p>`;
            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });

function append(parent, el) {
    return parent.appendChild(el);
}

function namee() {
    document.getElementById('name').style.display = 'block';
    document.getElementById('email').style.display = 'none';
    document.getElementById('birthday').style.display = 'none';
    document.getElementById('address').style.display = 'none';
    document.getElementById('phone').style.display = 'none';
    document.getElementById('password').style.display = 'none';
}

function email() {
    document.getElementById('name').style.display = 'none';
    document.getElementById('email').style.display = 'block';
    document.getElementById('birthday').style.display = 'none';
    document.getElementById('address').style.display = 'none';
    document.getElementById('phone').style.display = 'none';
    document.getElementById('password').style.display = 'none';
}

function birthday() {
    document.getElementById('name').style.display = 'none';
    document.getElementById('email').style.display = 'none';
    document.getElementById('birthday').style.display = 'block';
    document.getElementById('address').style.display = 'none';
    document.getElementById('phone').style.display = 'none';
    document.getElementById('password').style.display = 'none';
}

function locationn() {
    document.getElementById('name').style.display = 'none';
    document.getElementById('email').style.display = 'none';
    document.getElementById('birthday').style.display = 'none';
    document.getElementById('address').style.display = 'block';
    document.getElementById('phone').style.display = 'none';
    document.getElementById('password').style.display = 'none';
}

function phone() {
    document.getElementById('name').style.display = 'none';
    document.getElementById('email').style.display = 'none';
    document.getElementById('birthday').style.display = 'none';
    document.getElementById('address').style.display = 'none';
    document.getElementById('phone').style.display = 'block';
    document.getElementById('password').style.display = 'none';
}

function password() {
    document.getElementById('name').style.display = 'none';
    document.getElementById('email').style.display = 'none';
    document.getElementById('birthday').style.display = 'none';
    document.getElementById('address').style.display = 'none';
    document.getElementById('phone').style.display = 'none';
    document.getElementById('password').style.display = 'block';
}
