import { login } from './auth.js';
const form  = document.querySelector('#form-login');
const aviso = document.querySelector('#aviso');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#senha').value;

  try {
    const usuario = login(email, senha);
    alert(`Bem-vindo, ${usuario.email}!`);
    window.location.href = 'index.html';   // entrou: volta para a home
  } catch (erro) {
    aviso.textContent = erro.message;
  }
});