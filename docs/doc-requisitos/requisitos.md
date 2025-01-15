# Histórico de Versões
## Histórico de Versões

| Versão | Data       | Descrição da Alteração | Nome(s) Integrante(s)                                              |
|--------|------------|------------------------|----------------------------------------------------------------------|
| 1.0    | 14/01/2025 | Criação do Documento  | [Natália Morais](https://github.com/Natyrodrigues)                 |

# Requisitos

## [RF01] Login de Administrador
O sistema deve permitir que o login de administrador seja realizado em uma tela exclusiva para autenticação de administradores, com validação de credenciais.

**Ator:** [Natália Morais](https://github.com/Natyrodrigues) 
**Prioridade:** Essencial  

---

## [RF02] Aba de Controle de Pedidos
O sistema deve disponibilizar uma aba exclusiva para que o administrador visualize os pedidos ativos e anteriores, exibindo informações como número do pedido, status, itens comprados, preço total, data e horário de realização.

**Ator:** [Natália Morais](https://github.com/Natyrodrigues)  
**Prioridade:** Importante  

---

## [RF03] Aba de Edição de Promoções
O sistema deve permitir que o administrador edite promoções, definindo descontos, códigos promocionais, datas de validade, e a possibilidade de adicionar ou excluir promoções existentes.

**Ator:** [Natália Morais](https://github.com/Natyrodrigues) 
**Prioridade:** Importante  

---

## [RF04] Aba de Edição Cardápio
O sistema deve disponibilizar uma aba de "Edição do Cardápio" para o administrador, permitindo adicionar, editar ou excluir itens do cardápio, incluindo nome, descrição, preço e imagem.

**Ator:** [Natália Morais](https://github.com/Natyrodrigues) 
**Prioridade:** Essencial  

---

## [RF05] Aba de Histórico de Edições
O sistema deverá registrar todas as alterações feitas nos preços e promoções, armazenando a data/hora da alteração e a identidade do administrador que a realizou.

**Ator:** [Natália Morais](https://github.com/Natyrodrigues)  
**Prioridade:** Desejável  

---

## [RF06] Permissão de Edição
O sistema deve confirmar a identidade do administrador antes de permitir edições em promoções, preços ou cardápio.

**Ator:** [Natália Morais](https://github.com/Natyrodrigues) 
**Prioridade:** Importante  

---

## [RF07] Cálculo da Distância entre Unidades e o Comprador
O sistema deve calcular a distância entre o CEP inserido pelo cliente e o CEP das unidades do "Paraíba HotDog", informando qual unidade é a mais próxima. Caso o CEP do cliente esteja fora da área de entrega, o sistema deve informar a indisponibilidade de entrega para aquela localidade.

**Ator:** [Natália Morais](https://github.com/Natyrodrigues)  
**Prioridade:** Desejável  

---

## [RF08] Aba de Perfil do Cliente
O sistema deve disponibilizar uma aba que mostra as informações inseridas no cadastro do cliente, permitindo a edição dessas informações.

**Ator:** [Natália Morais](https://github.com/Natyrodrigues)  
**Prioridade:** Desejável  

---

## [RF09] Cadastro do Cliente
O sistema deve ter uma tela exclusiva para cadastro de novos Clientes.

**Ator:** [Gabriel Monteiro](https://github.com/GabrielSMonteiro)  
**Prioridade:** Essencial  

---

## [RF10] Login de Cliente
O usuário deve ter uma tela exclusiva para efetuar o Login.

**Ator:** [Gabriel Monteiro](https://github.com/GabrielSMonteiro)
**Prioridade:** Importante  

---

## [RF11] Status do Pedido
O sistema deve mostrar para o cliente o status do pedido (Ex: Aguardando pagamento, pagamento confirmado, Em preparação, Em entrega, Finalizado).

**Ator:** [Gabriel Monteiro](https://github.com/GabrielSMonteiro)  
**Prioridade:** Desejável  

---

## [RF12] Opções de Entrega
O sistema deve oferecer ao cliente opções de entrega (Ex: Retirada Presencial ou Entrega Domiciliar) e filial responsável.

**Ator:** [Hauedy Wegener](https://github.com/HauedyWS)
**Prioridade:** Desejável  

---

## [RF13] Liberação do Pedido
O sistema deve gerar um código de pedido para o cliente para a retirada presencial do pedido.

**Ator:** [Hauedy Wegener](https://github.com/HauedyWS)
**Prioridade:** Desejável  

---

## [RF14] Validação de Horário de Funcionamento
O sistema deve validar se o pedido está sendo realizado dentro do horário de funcionamento do estabelecimento (Hora de Abertura - Hora de Encerramento). O sistema deve apresentar um alerta ao cliente que tentar realizar um pedido fora do horário de funcionamento, informando o horário de funcionamento do estabelecimento.

**Ator:** [André Maia](https://github.com/andre-maia51) 
**Prioridade:** Desejável  

---

## [RF16] Exibição do Horário de Funcionamento das Unidades
O sistema deve mostrar na tela inicial o horário de funcionamento das unidades, mostrando se elas estão funcionando ou não.

**Ator:** [Natália Morais](https://github.com/Natyrodrigues) 
**Prioridade:** Desejável  

---

## [RF17] Especificação de Forma de Pagamento na Entrega
Caso o cliente opte pelo pagamento na entrega, deve ser especificada a forma de pagamento desejada (cartão ou dinheiro).

**Ator:** [André Maia](https://github.com/andre-maia51) 
**Prioridade:** Desejável  

---

## [RF18] Informação sobre Necessidade de Troco
Caso o pagamento seja em espécie, o sistema deve dar a opção do cliente informar se precisa de troco ou não.

**Ator:** [André Maia](https://github.com/andre-maia51)  
**Prioridade:** Desejável  

---

## [RF19] Adição de Observações ao Pedido
O sistema deve permitir que o cliente adicione observações ao pedido.

**Ator:** [André Maia](https://github.com/andre-maia51)  
**Prioridade:** Desejável  

---

## [RF20] Programa de Fidelidade
O sistema deve manter histórico de compras por usuário e usá-lo para providenciar promoções para clientes que cumpram condições pré-estabelecidas.

**Ator:** [Aline Melo](https://github.com/aline-melo) 
**Prioridade:** Importante  

---

## [RF21] Aba de Promoções e Combos
O sistema deverá ter uma aba de promoções e combos exibindo promoções ativas, com cada item incluindo descrição, preço promocional, período de validade e itens incluídos.

**Ator:** Hauedy e [Aline Melo](https://github.com/aline-melo) 
**Prioridade:** Importante  

---

## [RF22] Escolha de Filial
O sistema exibe uma lista de filiais próximas que estarão disponíveis para sua escolha.

**Ator:** [Aline Melo](https://github.com/aline-melo) 
**Prioridade:** Desejável  

---

## [RN01] Segurança das Informações do Cliente
O sistema deve garantir a segurança das senhas dos usuários.

**Ator:** [André Maia](https://github.com/andre-maia51) e [Gabriel Monteiro](https://github.com/GabrielSMonteiro)  
**Prioridade:** Essencial  

---

## [RN02] Acessibilidade do site
A interface do sistema deve ser responsiva com design intuitivo.

**Ator:** [André Maia](https://github.com/andre-maia51) e [Gabriel Monteiro](https://github.com/GabrielSMonteiro) 
**Prioridade:** Desejável  
