==== Biblioteca - API Rest ====

Este projeto tem por objetivo fazer o registro de requisições funcionais e não funcionais a partir 
do software passado por meio da engenharia de requisitos. Também, criar um um esqueleto para o projeto
(back-end), criando rotas para serem testadas a partir do GET, POST, PUT e DELETE, com tabelas e inserções
criadas no banco de dados mysql workbench, onde também foi criado um modelo lógico desta API, e para armazenar 
esta API foi utilizado o GIT HUB.

-Mysql Workbench para banco de dados e modelo lógico;
-JavaScript para criar o esqueleto do código(back-end) e conexão com o banco de dados;
-Express framework web para Node.js
-Mysql2 drive de conexão com o banco de dados MySQL
-Cors middleware para permitir requisições de origens diferentes
-Documentos Google para requisitos e prints do Fetch Client(rotas testadas)

Requisitos funcionais e não funcionais:

Código
Requisito funcional
Descrição
RF01
Cadastro de Livro 
O sistema deve permitir cadastrar um novo livro.
RF02
 Listagem de Livros
O sistema deve permitir consultar os livros cadastrados.
RF03
Consulta de um livro


O sistema deve permitir consultar um livro cadastrado.
RF04
Pesquisa de livros


O sistema deve permitir pesquisar um livro cadastrado.
RF05
Ordenação de livros


O sistema deve permitir fazer a ordenação dos livros cadastrados.
RF06
Edição de livros


O sistema deve permitir editar um livro cadastrado.
RF07
Exclusão de livros


O sistema deve permitir excluir um livro cadastrado.
RF08
Cadastro de usuários


O sistema deve permitir cadastrar um usuário.
RF09
Registro de empréstimos


O sistema deve permitir registro de empréstimos.
RF10
Consulta de empréstimos


O sistema deve permitir consultar um empréstimo cadastado.

Configuração do Banco de Dados:

Banco de dados configurado com  host, user, password, database, e foi criado no app.js uma porta de conexão, e uso do Mysql2.

Instalação das dependências:
npm install express cors mysql2 > instala tudo

Execução de servidor:

No terminal digitando: node app.js, se falhar, aperta ctrl + c e coloca de novo o mesmo comando no terminal

Rotas disponíveis:

Livros
GET    /livros
GET    /livros/:id
GET    /livros/busca/:titulo
GET    /livros/ordenados
POST   /livros
PUT    /livros/:id
DELETE /livros/:id
Usuários
GET    /usuarios
GET    /usuarios/:id
POST   /usuarios
PUT    /usuarios/:id
DELETE /usuarios/:id
Empréstimos
GET    /emprestimos
GET    /emprestimos/:id
POST   /emprestimos
PUT    /emprestimos/:id
