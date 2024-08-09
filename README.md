# Overview

Este repositório contém as soluções para os dois desafios propostos no curso Dev FullCycle

## Instruções

### Desafio Go

Para começar, siga as etapas abaixo:

1. Abra o terminal e navegue até o diretório `desafio-go`.
2. Para construir a imagem Docker usando o arquivo Dockerfile fornecido, execute o seguinte comando:
   ```
   docker build -t nome_da_imagem .
   ```
   Certifique-se de substituir `nome_da_imagem` pelo nome desejado para a imagem.

> Obs: Também é possível usar o Docker Compose

3. Alternativamente, você pode executar o seguinte comando para baixar a imagem Docker pré-construída:
   ```
   docker run jplopes1/desafio-go-fullcycle:1.0.0
   ```

### Desafio Nginx + Node.js

### Desafio Nginx + Node.js

Para começar, siga as etapas abaixo:

1. Abra o terminal e navegue até o diretório `desafio-nginx-nodejs`.
2. Execute o seguinte comando para iniciar os containers do Nginx e do Node.js:

   ```
   docker-compose up -d
   ```

   Isso irá criar e iniciar os containers com base nas configurações definidas no arquivo `docker-compose.yml`.

3. Após a execução bem-sucedida do comando acima, você poderá acessar a aplicação no seu navegador através do seguinte endereço:

   ```
   http://localhost:8080
   ```

   Isso irá direcionar você para a página inicial da aplicação Node.js.

4. Para encerrar os containers, execute o seguinte comando:
   ```
   docker-compose down
   ```
   Isso irá parar e remover os containers criados.

Agora você está pronto para começar a desenvolver e testar sua aplicação Nginx + Node.js!
