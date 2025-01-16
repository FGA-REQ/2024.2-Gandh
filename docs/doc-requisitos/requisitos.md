# Histórico de Versões
## Histórico de Versões

| Versão | Data       | Descrição da Alteração | Nome(s) Integrante(s)                                              |
|--------|------------|------------------------|----------------------------------------------------------------------|
| 1.0    | 14/01/2025 | Criação do Documento  | [Natália Morais](https://github.com/Natyrodrigues)                 |

# Prioridade dos Requisitos

A Prioridade dos requisitos foi estabelecida utilizando as seguintes categorias: Essencial, Importante e Desejável. Cada categoria reflete a necessidade de implementação e o impacto de um requisito para o funcionamento do sistema.

**Essencial:** Requisitos Essenciais são aqueles sem os quais o sistema não pode funcionar. Eles são imprescindíveis para o funcionamento básico do sistema e devem ser implementados sem exceções.

**Importante:** Requisitos Importantes são aqueles que não impedem o funcionamento do sistema, mas fazem com que o sistema funcione de forma insatisfatória ou incompleta. Embora a ausência de um requisito importante não impeça a operação do sistema, ele deve ser implementado para garantir a qualidade e a usabilidade.

**Desejável:** Requisitos Desejáveis são funcionalidades que não comprometem as operações principais do sistema. O sistema pode funcionar de forma satisfatória mesmo sem esses requisitos, que podem ser adiados para versões futuras caso o tempo disponível para implementação seja limitado.


# Requisitos

## [RF001] Login de Administrador
O sistema deve permitir que o login de administrador seja realizado em uma tela exclusiva para autenticação de administradores, com validação de credenciais.

**Ator:** Administrador

**Prioridade:** Essencial  

---

## [RF002] Aba de Controle de Pedidos
O sistema deve disponibilizar uma aba exclusiva para que o administrador visualize os pedidos ativos e anteriores, exibindo informações como número do pedido, status, itens comprados, preço total, data e horário de realização.

**Ator:**  Administrador

**Prioridade:** Importante  

---

## [RF003] Aba de Edição de Promoções
O sistema deve permitir que o administrador edite promoções, definindo descontos, códigos promocionais, datas de validade, e a possibilidade de adicionar ou excluir promoções existentes.

**Ator:**  Administrador

**Prioridade:** Importante  

---

## [RF004] Aba de Edição Cardápio
O sistema deve disponibilizar uma aba de "Edição do Cardápio" para o administrador, permitindo adicionar, editar ou excluir itens do cardápio, incluindo nome, descrição, preço e imagem.

**Ator:**  Administrador

**Prioridade:** Essencial  

---

## [RF005] Aba de Histórico de Edições
O sistema deverá registrar todas as alterações feitas nos preços e promoções, armazenando a data/hora da alteração e a identidade do administrador que a realizou.

**Ator:**  Administrador

**Prioridade:** Desejável  

---

## [RF006] Permissão de Edição
O sistema deve confirmar a identidade do administrador antes de permitir edições em promoções, preços ou cardápio.

**Ator:**  Administrador

**Prioridade:** Importante  

---

## [RF007] Cálculo da Distância entre Unidades e o Comprador
O sistema deve calcular a distância entre o CEP inserido pelo cliente e o CEP das unidades do "Paraíba HotDog", informando qual unidade é a mais próxima. Caso o CEP do cliente esteja fora da área de entrega, o sistema deve informar a indisponibilidade de entrega para aquela localidade.

**Ator:** Cliente

**Prioridade:** Desejável  

---

## [RF008] Aba de Perfil do Cliente
O sistema deve disponibilizar uma aba que mostra as informações inseridas no cadastro do cliente, permitindo a edição dessas informações.

**Ator:** Cliente

**Prioridade:** Desejável  

---

## [RF009] Cadastro do Cliente
O sistema deve ter uma tela exclusiva para cadastro de novos Clientes.

**Ator:** Cliente 

**Prioridade:** Essencial  

---

## [RF010] Login de Cliente
O usuário deve ter uma tela exclusiva para efetuar o Login.

**Ator:** Cliente

**Prioridade:** Importante  

---

## [RF011] Status do Pedido
O sistema deve mostrar para o cliente o status do pedido (Ex: Aguardando pagamento, pagamento confirmado, Em preparação, Em entrega, Finalizado).

**Ator:** Cliente

**Prioridade:** Desejável  

---

## [RF012] Opções de Entrega
O sistema deve oferecer ao cliente opções de entrega (Ex: Retirada Presencial ou Entrega Domiciliar) e filial responsável.

**Ator:** Cliente

**Prioridade:** Desejável  

---

## [RF013] Liberação do Pedido
O sistema deve gerar um código de pedido para o cliente para a retirada presencial do pedido.

**Ator:** Cliente

**Prioridade:** Desejável  

---

## [RF014] Validação de Horário de Funcionamento
O sistema deve validar se o pedido está sendo realizado dentro do horário de funcionamento do estabelecimento (Hora de Abertura - Hora de Encerramento). O sistema deve apresentar um alerta ao cliente que tentar realizar um pedido fora do horário de funcionamento, informando o horário de funcionamento do estabelecimento.

**Ator:** Cliente

**Prioridade:** Desejável  

---

## [RF016] Exibição do Horário de Funcionamento das Unidades
O sistema deve mostrar na tela inicial o horário de funcionamento das unidades, mostrando se elas estão funcionando ou não.

**Ator:** Cliente

**Prioridade:** Desejável  

---

## [RF017] Especificação de Forma de Pagamento na Entrega
Caso o cliente opte pelo pagamento na entrega, deve ser especificada a forma de pagamento desejada (cartão ou dinheiro).

**Ator:** Cliente

**Prioridade:** Desejável  

---

## [RF018] Informação sobre Necessidade de Troco
Caso o pagamento seja em espécie, o sistema deve dar a opção do cliente informar se precisa de troco ou não.

**Ator:** Cliente

**Prioridade:** Desejável  

---

## [RF019] Adição de Observações ao Pedido
O sistema deve permitir que o cliente adicione observações ao pedido.

**Ator:** Cliente

**Prioridade:** Desejável  

---

## [RF020] Programa de Fidelidade
O sistema deve manter histórico de compras por usuário e usá-lo para providenciar promoções para clientes que cumpram condições pré-estabelecidas.

**Ator:** Cliente

**Prioridade:** Importante  

---

## [RF021] Aba de Promoções e Combos
O sistema deverá ter uma aba de promoções e combos exibindo promoções ativas, com cada item incluindo descrição, preço promocional, período de validade e itens incluídos.

**Ator:** Cliente

**Prioridade:** Importante  

---

## [RF022] Escolha de Filial
O sistema exibe uma lista de filiais próximas que estarão disponíveis para sua escolha.

**Ator:** Cliente

**Prioridade:** Desejável  

---

## [NF001] Segurança das Informações do Cliente
O sistema deve garantir a segurança das senhas dos usuários.

**Prioridade:** Essencial  

---

## [NF002] Acessibilidade do site
A interface do sistema deve ser responsiva com design intuitivo.

**Prioridade:** Desejável  

#Referências
https://www2.ufjf.br/diavi//files/2016/07/DocumentosdeRequisitosdoSistema.pdf


