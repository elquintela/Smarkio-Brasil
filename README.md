Smarkio Brasil - Teste Técnico
==============

### Sistema de comentários com recurso da IBM Watson(Text to Speech) como forma de acessibilidade. 

<b>Primeiro de tudo, crie um banco de dados mysql chamado "testdb" e crie uma tabela chamada "users".</b>

### Para criar o banco de dados:
</br> 
<b>Passo 1:</b> {Certifique-se de ter o MySQL instalado `mysql --version`} então `mysql -u {usuario} -p` insira a senha quando solicitada.
</br> 
<b>Passo 2:</b> `create database testdb;`
</br> 
<b>Passo 3:</b> `show databases;` e verifique se o banco de dados foi criado.
</br> 

### Para iniciar o projeto:
<b>Passo 1:</b> `git clone https://github.com/elquintela/Smarkio-Brasil.git` para clonar o repositório
</br> 
<b>Passo 2:</b> Configure a conexão SQL, inserindo as infomações do seu usuário -> 
</br> 
  ```
  const env = {
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
 
module.exports = env;
```
</br> 
<b>Passo 3:</b> `npm i` para instalar as dependências.
</br> 
<b>Passo 4:</b> `npm start` para iniciar o servidor.
</br> 
</br> 

### Vá para `http://localhost:8081/` para acessar o aplicativo.</br> 
