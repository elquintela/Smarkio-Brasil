Smarkio Brasil - Teste Técnico - Sistema de comentários com recurso da IBM Watson(Text to Speech) como forma de acessibilidade. 
==============

Primeiro de tudo, crie um banco de dados mysql chamado "testdb" e crie uma tabela chamada "users".

Para criar o banco de dados - Passo 1: {Certifique-se de ter o MySQL instalado `mysql --version`} então `mysql -u {usuario} -p` insira a senha quando solicitada. 
Passo 2: `create database testdb;`
Passo 3: `show databases;` e verifique se o banco de dados foi criado.

Para iniciar o projeto - Passo 1: `git clone https://github.com/elquintela/Smarkio-Brasil.git` para clonar o repositório.
Passo 2: Configure a conexão SQL, inserindo as infomações do seu usuário -> 
  `const env = {
  database: 'testdb',
  username: 'root',
  password: '12345',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
 
module.exports = env;`
Passo 3: `npm i` para instalar as dependências.
Passo 4: `npm start` para iniciar o servidor.


Vá para `http://localhost:8081/` para acessar o aplicativo.
