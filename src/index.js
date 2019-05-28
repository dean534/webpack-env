import './scss/helper/all.scss';

const app = document.getElementById('app');
const text = document.createElement('h1');
console.log(text);
text.innerHTML = 'hello world!';
app.appendChild(text);
