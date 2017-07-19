# rd-webteste
Projeto de estudo de teste baseado no desafio

Neste projeto eu usei o generator: yeoman 'yo angular' para criar a estrutura base. Esse generator cria um gulp file com uma série de tasks como minify, rotinas de testes, protector, compressão de arquivos scss.

Como biblioteca eu usei Angular e para a UI/UX eu usei o angular material, que já resolve uma série de implementações. Eu acho interessante deixar o sistema com cara de APP.

O projeto ficou dividido da seguinte maneira:

Pasta src contento os arquivos base: index.html e favicon.

Uma pasta chamada app, contendo:

A Pasta componentes com:
 - card (componente que é reutilizado na pagina de pesquisa dos livros e na página de favoritos)
 - navbar (componente do header)
 - bookDialog.html - Essa é o modal que abre com os detalhes do livro.

 As pasta das rotas:
  - favorites
  - main

 As pasta de services:
  - book (servico que busca os livros na API do google)
  - localStorage (servico que grava os livros favoritos no localStorage)

A pasta de filter, contendo:
 - highlight (filtro que marca o texto pesquisado no resultado da resposta no grid)

E para rodar o projeto basta fazer bower install, npm install, e rodar o comando gulp serve. O projeto vai ser levantando na porta localhosto:3000

Criei apenas 1 rotina de teste que chega o servico do book, pesquisa na API do google.

Não criei as outras rotinas de teste, somente as funcionalidades.