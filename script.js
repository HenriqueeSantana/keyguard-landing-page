// ===== 1. PEGAR OS ELEMENTOS =====
const inputSenha = document.getElementById("senha-teste");
const barra = document.getElementById("barra");
const resultado = document.getElementById("resultado");
const checklist = document.getElementById("checklist");


// ===== 2. REGRAS DE UMA SENHA FORTE =====
// Cada regra tem um texto e uma função que devolve true ou false.
const regras = [
  { texto: "Pelo menos 12 caracteres",   testar: (s) => s.length >= 12 },
  { texto: "Letras minúsculas (a-z)",    testar: (s) => /[a-z]/.test(s) },
  { texto: "Letras maiúsculas (A-Z)",    testar: (s) => /[A-Z]/.test(s) },
  { texto: "Números (0-9)",              testar: (s) => /[0-9]/.test(s) },
  { texto: "Símbolos (! @ # $ ...)",     testar: (s) => /[^A-Za-z0-9]/.test(s) }
];

// Senhas muito comuns, que nunca devem ser consideradas fortes
const comuns = ["123456", "12345678", "senha", "senha123", "password", "qwerty", "abc123", "111111", "admin"];


// ===== 3. CALCULAR A PONTUAÇÃO =====
function calcularPontos(senha) {
  // Senha vazia ou muito comum: zero pontos
  if (senha === "" || comuns.includes(senha.toLowerCase())) {
    return 0;
  }

  // Conta quantas regras a senha cumpre
  let pontos = 0;
  regras.forEach(function (regra) {
    if (regra.testar(senha)) {
      pontos++;
    }
  });

  // Senha curta não pode passar de "média", mesmo com tudo misturado
  if (senha.length < 8 && pontos > 3) {
    pontos = 3;
  }

  return pontos;
}


// ===== 4. DESENHAR O RESULTADO NA TELA =====
function atualizar() {
  const senha = inputSenha.value;
  const pontos = calcularPontos(senha);

  // Largura da barra: cada ponto vale 20%
  barra.style.width = (pontos / regras.length) * 100 + "%";

  // Cor e texto conforme a pontuação
  let cor = "var(--fraca)";
  let texto = "Fraca";

  if (senha === "") {
    texto = "Digite para ver o resultado.";
  } else if (pontos >= 5) {
    cor = "var(--forte)";
    texto = "Forte";
  } else if (pontos >= 3) {
    cor = "var(--media)";
    texto = "Média";
  }

  barra.style.background = cor;
  resultado.textContent = texto;

  // Monta a lista de regras (limpa e cria de novo a cada tecla)
  checklist.innerHTML = "";
  regras.forEach(function (regra) {
    const item = document.createElement("li");
    item.textContent = regra.texto;

    if (senha !== "" && regra.testar(senha)) {
      item.classList.add("ok");
    }

    checklist.appendChild(item);
  });
}


// ===== 5. EVENTO =====
// "input" dispara a cada letra digitada
inputSenha.addEventListener("input", atualizar);

// Mostra a lista de regras já na abertura da página
atualizar();