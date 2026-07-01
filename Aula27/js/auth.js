// AVISO: só para estudo. Em produção, NUNCA guarde senhas no navegador.
const CHAVE_USUARIOS = 'usuarios';
const CHAVE_SESSAO   = 'usuarioLogado';

// Lê a lista de usuários salva (ou um array vazio se não houver nenhum)
function lerUsuarios() {
  const json = localStorage.getItem(CHAVE_USUARIOS);
  return json ? JSON.parse(json) : [];
}

export function registrar(usuario) {
  const usuarios = lerUsuarios();

  // já existe alguém com esse e-mail?
  if (usuarios.some(u => u.email === usuario.email)) {
    throw new Error('Já existe uma conta com esse e-mail.');
  }

  usuarios.push(usuario);
  localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuarios));
}

export function login(email, senha) {
  const usuarios = lerUsuarios();
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (!usuario) {
    throw new Error('E-mail ou senha incorretos.');
  }

  // guarda a "sessão" — só nome e e-mail, NUNCA a senha
  localStorage.setItem(CHAVE_SESSAO, JSON.stringify({ nome: usuario.nome, email: usuario.email }));
  return usuario;
}

export function logout() {
  localStorage.removeItem(CHAVE_SESSAO);
}