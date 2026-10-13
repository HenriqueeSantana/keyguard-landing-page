# Keyguard

Landing page sobre segurança de senhas, com um medidor de força de senha feito em JavaScript. Projeto criado para estudar os fundamentos de desenvolvimento front-end.

![Prévia do Keyguard](img/preview.png)

## Demonstração

https://henriqueesantana.github.io/keyguard-landing-page/

## Sobre o projeto

A página explica de forma simples como senhas fracas são descobertas e como criar e cuidar de senhas seguras. No final, há um teste interativo em que o usuário digita uma senha de exemplo e vê a análise em tempo real.

## Funcionalidades

- Cabeçalho fixo com menu de navegação e rolagem suave entre as seções
- Seção principal com texto e ilustração lado a lado
- Cards explicando os principais ataques: força bruta, dicionário e vazamentos
- Lista de boas práticas para criar e proteger senhas
- Medidor de força de senha com barra colorida e lista de regras
- Layout responsivo, adaptado para celulares e telas menores

## Medidor de senha

O medidor avalia a senha com base em cinco regras:

- Pelo menos 12 caracteres
- Letras minúsculas
- Letras maiúsculas
- Números
- Símbolos

A barra muda de tamanho e de cor conforme a pontuação (fraca, média ou forte). Senhas muito comuns, como `123456`, são sempre consideradas fracas.

A análise acontece inteiramente no navegador. Nenhuma senha é enviada ou salva.

## Tecnologias

- HTML5
- CSS3 (Flexbox, variáveis CSS, `position: sticky` e media queries)
- JavaScript (manipulação do DOM, eventos e expressões regulares)

## Estrutura do projeto

```
keyguard-landing-page/
  index.html
  style.css
  script.js
  img/
    logo.png
    seguranca.png
    preview.png
```

## Como executar

1. Baixe ou clone o repositório:

```
git clone https://github.com/HenriqueeSantana/keyguard-landing-page.git
```

2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` no navegador.

Não é necessário instalar nada.

## Aprendizados

- Estruturar uma página com seções semânticas (`header`, `main`, `section`, `footer`)
- Criar layouts com Flexbox e adaptá-los para celular com `@media`
- Usar variáveis CSS para manter uma paleta de cores consistente
- Manipular elementos e estilos com JavaScript (`addEventListener`, `createElement`, `classList`)
- Validar texto com expressões regulares

## Autor

Henrique Santana

- GitHub: https://github.com/HenriqueeSantana
- LinkedIn: https://www.linkedin.com/in/henrique-santana-dev/
- Instagram: https://www.instagram.com/__henrique.sant/