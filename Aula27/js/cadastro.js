import { registrar } from './autenticador.js'

const form = document.querySelector('#form-cadastro')
const aviso = document.querySelector('#aviso')

//Registrar o usuário ao enviar o formulário
form.addEventListener('submit', (evento) => {
    evento.preventDefault() //impede o recarregamento da pagina
    
    const usuario = {
        email: document.querySelector('#email').value,
        senha: document.querySelector('#senha').value
    }

    try{
        registrar(usuario)
        alert('Cadastro realizado! Faça login para continuar.')
        window.location.href = 'login.html'
    }catch(erro){
        aviso.textContent = erro.message
    }
})