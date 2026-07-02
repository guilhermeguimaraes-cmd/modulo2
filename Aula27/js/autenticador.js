const CHAVE_USUARIOS = 'usuarios'
const CHAVE_SESSAO = 'usuarioLogado'

function lerUsuarios(){
    const json = localStorage.getItem(CHAVE_USUARIOS)
    return json ? JSON.parse(json) : []
}

export function registrar(usuario){
    const usuarios = lerUsuarios()

    if(usuarios.some(user => user.email === usuario.email)){
        throw new Error('Ja existe este email')
    }

    usuarios.push(usuario)
    localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuarios))
}

export function login(email, senha){
    const usuarios = lerUsuarios()
    const usuario = usuarios.find(user => user.email === email && user.senha === senha)

    if(!usuario){
        throw new Error('Email ou senha incorretos.')
    }

    localStorage.setItem(CHAVE_SESSAO, JSON.stringify({
        email: usuario.email
    }))

    return usuario
}