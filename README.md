# Felipe Costa Monteiro — Portfólio React

Portfólio profissional desenvolvido com **React, JavaScript e CSS**, usando Vite. Atividade de Programação para Internet do curso de **Sistemas de Informação da Universidade de Mogi das Cruzes (UMC)**.

O projeto atualiza o [portfólio original em HTML e CSS](https://github.com/ofelpys/portfolio-atv), com informações profissionais, formação, stacks e projetos acadêmicos reais. Felipe está no **8º semestre, último ano da graduação**, e busca uma oportunidade em tecnologia. A passagem pela Panco é apresentada como experiência anterior.

## Executar localmente

Requisito: Node.js 22.12 ou superior (recomendado Node.js 24 LTS).

```bash
npm install
npm run dev
```

## Gerar a versão de produção

```bash
npm run build
npm run preview
```

A compilação é gerada em `dist/`.

## Recursos

- Componentes React e conteúdo centralizado em `src/data.js`.
- Layout responsivo para desktop e celular.
- Navegação por seções e menu mobile com fechamento pela tecla Escape.
- Filtros de projetos por área, implementados com estado do React.
- Contato por e-mail, LinkedIn e GitHub; botão para copiar o e-mail com feedback.
- HTML semântico, foco de teclado visível, link para pular ao conteúdo e suporte a movimento reduzido.
- Fonte e foto locais, sem depender de serviços de terceiros para renderizar a página.

## Estrutura

```text
public/
  fonts/Poppins-Regular.ttf
  favicon.svg
  felipe-github.jpg
src/
  App.jsx       # componentes, navegação e interações
  data.js       # perfil, tecnologias e projetos
  main.jsx      # inicialização do React
  styles.css    # visual e responsividade
index.html
vite.config.js
vercel.json
```

## Referências de conteúdo

- [Portfólio original](https://github.com/ofelpys/portfolio-atv): nome, LinkedIn e experiência anterior.
- [Perfil GitHub](https://github.com/ofelpys): foto pública e contato.
- [ForçaMente — front-end](https://github.com/ofelpys/PFC-FRONTEND) e [back-end](https://github.com/ofelpys/PFC-BACKEND): projeto final de curso em desenvolvimento.
- [Login Seguro](https://github.com/ofelpys/login-seguro).
- [BrasilAPI](https://github.com/ofelpys/atividade-brasilAPI).
- [Força Total](https://github.com/ofelpys/M1_software_IA): projeto citado no portfólio original.

As artes dos projetos são composições tipográficas em CSS, não capturas das aplicações. As tecnologias são apresentadas como estudos e prática acadêmica, sem alegar experiência profissional em desenvolvimento.

## Publicação na Vercel

O arquivo `vercel.json` define o framework **Vite**, o comando `npm run build` e a pasta de saída `dist`. O site não exige variáveis de ambiente ou banco de dados.

```bash
npx vercel --prod
```

Para atualizar o conteúdo, edite `src/data.js` e os textos em `src/App.jsx`.
