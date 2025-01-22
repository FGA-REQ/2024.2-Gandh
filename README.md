# Paraíba HotDog Web

## Sobre o Paraíba HotDog
O Paraíba HotDog é um restaurante especializado na venda de cachorros-quentes ao estilo paraibano, conhecido por seu sabor autêntico e ingredientes arretados. Inspirado nas raízes da Paraíba, o cardápio traz uma experiência gastronômica única, combinando sabores regionais com criatividade.

## Sobre o Projeto
O projeto Paraíba HotDog Web consiste no desenvolvimento de uma aplicação web que permitirá aos clientes visualizarem o cardápio completo e realizarem pedidos de forma fácil e rápida. A plataforma será projetada para oferecer uma experiência de usuário simples e intuitiva.

## Equipe
<center>
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/aline-melo">
        <img src="https://github.com/aline-melo.png" width="190" style="border-radius: 50%;" alt="Aline Melo"/>
        <br/><sub><b>Aline Melo- 211031557</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/andre-maia51">
        <img src="https://github.com/andre-maia51.png" width="190" style="border-radius: 50%;" alt="André Maia"/>
        <br/><sub><b>André Maia - 222037648</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/DanielFsR">
        <img src="https://github.com/DanielFsR.png" width="190" style="border-radius: 50%;" alt="Daniel Ferreira"/>
        <br/><sub><b>Daniel Ferreira - 222006632</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/GabrielSMonteiro">
        <img src="https://github.com/GabrielSMonteiro.png" width="190" style="border-radius: 50%;" alt="Gabriel Monteiro "/>
        <br/><sub><b>Gabriel Monteiro - 221021975 </b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/HauedyWS">
        <img src="https://github.com/HauedyWS.png" width="190" style="border-radius: 50%;" alt="Hauedy Wegener"/>
        <br/><sub><b>Hauedy Wegener - 211030792 </b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Natyrodrigues">
        <img src="https://github.com/Natyrodrigues.png" width="190" style="border-radius: 50%;" alt="Natália Rodrigues"/>
        <br/><sub><b>Natália Rodrigues - 221037975  </b></sub>
      </a>
    </td>
  </tr>
</table>
</center>

## Guia do Banco de Dados

Para rodar o banco de dados, você precisará ter o **PostgreSQL** e o **Docker** instalados em sua máquina.

### Passos para Configuração e Uso:

1. **Crie um arquivo .env na raiz do projeto com o conteúdo compartilhado no privado**

2. **Navegue até o diretório do projeto**:
   ```bash
    cd 2024.2-Gandh

4. **Suba o banco de dados localmente com o Docker**:
   ```bash
    docker-compose up -d

5. **Acesse o banco de dados no terminal**:
   ```bash
   docker exec -it postgres_local psql -U paraibahotdog -d paraibahd_db

### Atualizações do Banco de Dados

Quando forem feitas modificações no banco de dados, siga os seguintes passos:

1. **Navegue até o diretório do projeto**:
    ```bash
    docker-compose down

2. **Atualize seu repositório local**:
   ```bash
   git pull

3. **Após isso, basta executar os comandos iniciais novamente para configurar o banco de dados localmente.**

---
