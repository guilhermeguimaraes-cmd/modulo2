import { registrar } from './auth.js';

const form     = document.querySelector('#form-cadastro');
const aviso    = document.querySelector('#aviso');


// 2) Registrar o usuário ao enviar o formulário
form.addEventListener('submit', (evento) => {
  evento.preventDefault();   // impede o recarregamento padrão da página

  const usuario = {
    email:      document.querySelector('#email').value,
    senha:      document.querySelector('#senha').value,
  };

  try {
    registrar(usuario);
    alert('Cadastro realizado! Faça login para continuar.');
    window.location.href = 'login.html';   // leva para a tela de login
  } catch (erro) {
    aviso.textContent = erro.message;
  }
});

