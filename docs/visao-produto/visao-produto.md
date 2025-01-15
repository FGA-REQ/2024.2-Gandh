## Histórico de Versões
| Versão | Data       | Descrição da Alteração                                                                                                        | Nome(s) Integrante(s)                                                                                                                                                                                                                                                                                       |
| ------ | ---------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1.0`  | 25/11/2024 | Definição do problema, declaração de posição do produto e seus objetivos                                                      | [Aline Melo](https://github.com/aline-melo), [André Maia](https://github.com/andre-maia51), [Daniel Ferreira](https://github.com/DanielFsR), [Gabriel Monteiro](https://github.com/GabrielSMonteiro), [Hauedy Wegener](https://github.com/HauedyWS) e [Natália Rodrigues](https://github.com/Natyrodrigues) |
| `1.2`  | 14/01/2024 | Organização do projeto, Planejamento de fases, matriz de comunicação, gerenciamento de riscos, tecnologias a serem utilizadas | [Aline Melo](https://github.com/aline-melo)                                                                                                                                                                                                                                                                 |

# Visão Geral do Produto
A visão de um produto é uma declaração que descreve o propósito e a direção futura de um produto. É uma etapa fundamental no desenvolvimento, pois guia a equipe e alinha os esforços em direção a um objetivo comum.
## 1.1 Problema
O cliente busca por uma identidade própria que seja viabilizada por uma solução de software que também visa fugir de taxas dos aplicativos que cobram pelo serviço de venda dos produtos. Também há a necessidade de maior flexibilidade de promoções, aumento da fidelidade e proximidade com o cliente.

## 1.2 Declaração de Posição do Produto
### 1.2.1 Produto Proposto
Será desenvolvido uma aplicação WEB que possibilita a venda dos produtos do Paraíba HotDog. 

### 1.2.2 Diferencial do Produto
O produto visa diferenciar ao oferecer uma solução de software personalizada que garante uma identidade única para o seu negócio, eliminando taxas cobradas por grandes plataformas. Além disso, proporcionará flexibilidade na criação de promoções, permitindo estratégias adaptadas às suas necessidades. Essa abordagem aumenta a fidelidade e a proximidade com os clientes, oferecendo mais liberdade e eficiência em comparação aos concorrentes.
### 1.2.3 Usuários-alvo e Cliente

Definimos que os usuários-alvo serão pessoas de todas as idades e gêneros, com interesse em cachorro-quente arretado (estilo paraibano). Já o cliente é o dono do restaurante Paraíba HotDog.

### 1.2.4 Motivos para Utilizar o Produto
- **Sem taxas:** Reduz custos eliminando taxas de plataformas;
- **Identidade própria:** Garante personalização total do negócio;
- **Promoções flexíveis:** Adapta estratégias às suas necessidades;
- **Fidelização:** Fortalece a relação com os clientes;
- **Competitividade:** Oferece mais independência no mercado.

| **Campo**           | **Descrição** |
|---------------------|---------------|
| **Para**            | O dono do restaurante Paraíba HotDog |
| **Quem**            | Deseja se livrar das taxas de aplicativos de delivery |
| **O Paraíba HotDog**| É uma aplicação web |
| **Que**             | Busca uma identidade que traga confiabilidade |
| **Ao contrário**    | iFood, Uber Eats |
| **Nosso produto**   | Não cobrará taxa do cliente, e proporcionará uma experiência customizada |

## 1.3 Objetivos do Produto
### 1.3.1 Objetivo Principal
Desenvolver uma solução de software personalizada que permita ao cliente criar uma identidade própria, reduzindo custos operacionais.

### 1.3.2 Objetivos Secundários
- Eliminar taxas cobradas por plataformas de terceiros;
- Oferecer maior flexibilidade na criação e gestão de promoções;
- Fortalecer a fidelidade e proximidade com os clientes;
- Proporcionar independência para estratégias de vendas e relacionamento.

## 1.4 Tecnologias a serem utilizadas
- Front End: React
- Banco de dados: Postgres
- Back End: Javascript
- Prototipagem: Figma
- Reuniões: Discord
  
# 2 Visão Geral do Produto
## 2.1 Organização do Projeto
| Papel                        | Responsável                                             | Participantes                                                                                                                                                                                                                                                                                               |
| ---------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Desenvolvedor Back End       | [Hauedy Wegener](https://github.com/HauedyWS)           | [André Maia](https://github.com/andre-maia51), [Daniel Ferreira](https://github.com/DanielFsR),  [Hauedy Wegener](https://github.com/HauedyWS) e [Natália Rodrigues](https://github.com/Natyrodrigues)                                                                                                      |
| Desenvolvedor Banco de Dados | [Natália Rodrigues](https://github.com/Natyrodrigues)   | [Gabriel Monteiro](https://github.com/GabrielSMonteiro), [Natália Rodrigues](https://github.com/Natyrodrigues)                                                                                                                                                                                              |
| Desenvolvedor Front End      | [Gabriel Monteiro](https://github.com/GabrielSMonteiro) | [Aline Melo](https://github.com/aline-melo),  [Gabriel Monteiro](https://github.com/GabrielSMonteiro)                                                                                                                                                                                                       |
| Prototipagem Figma           | [Aline Melo](https://github.com/aline-melo)             | [Aline Melo](https://github.com/aline-melo),  [Gabriel Monteiro](https://github.com/GabrielSMonteiro)                                                                                                                                                                                                       |
| Dono do Produto              | [André Maia](https://github.com/andre-maia51)           | [Aline Melo](https://github.com/aline-melo), [André Maia](https://github.com/andre-maia51), [Daniel Ferreira](https://github.com/DanielFsR), [Gabriel Monteiro](https://github.com/GabrielSMonteiro), [Hauedy Wegener](https://github.com/HauedyWS) e [Natália Rodrigues](https://github.com/Natyrodrigues) |
| Analista de qualidade        | [Daniel Ferreira](https://github.com/DanielFsR)         | [Aline Melo](https://github.com/aline-melo), [André Maia](https://github.com/andre-maia51), [Daniel Ferreira](https://github.com/DanielFsR), [Gabriel Monteiro](https://github.com/GabrielSMonteiro), [Hauedy Wegener](https://github.com/HauedyWS) e [Natália Rodrigues](https://github.com/Natyrodrigues) |
| Cliente                      | Charlison Ferreira Santos Rabelo                        | Charlison Ferreira Santos Rabelo                                                                                                                                                                                                                                                                            |
## 2.2 Planejamento das Fase e Iterações do Projeto


| Entregas                               | Sprint | Data Inicio | Data Fim |
| -------------------------------------- | ------ | ----------- | -------- |
| Cadastro cliente                       | 1      | 17/01       | 24/01    |
| Login admin + cliente                  | 1      | 17/01       | 24/01    |
| Criar aba de edição do cardápio + CRUD | 1      | 17/01       | 24/01    |
| Tela inicial / cardapio                | 1      | 17/01       | 24/01    |
| Carrinho                               | 1      | 17/01       | 24/01    |
| Conta distância                        | 1      | 17/01       | 24/01    |
| Aba de compra                          | 2      | 24/01       | 31/01    |
| Aba de admin                           | 2      | 24/01       | 31/01    |
| Sincronização de pedidos               | 2      | 24/01       | 31/01    |
| Aba de status do pedido                | 2      | 24/01       | 31/01    |
| Sincronização de status do pedido      | 2      | 24/01       | 31/01    |
| Acessibilidade                         | 2      | 24/01       | 31/01    |
| Testes                                 | 5      | 31/01       | 04/02    |
## 2.3 Matriz de Comunicação

| _**Descrição**_                                                                                                                 | _**Área/  <br>Envolvidos**_ | _**Periodicidade**_       | _**Produtos Gerados**_                                           |
| ------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------- | ---------------------------------------------------------------- |
| _- Acompanhamento das Atividades em Andamento_<br><br>_- Acompanhamento dos Riscos, Compromissos, Ações Pendentes, Indicadores_ | _- Equipe do Projeto_       | _- Três vezes por semana_ | _- Ata de reunião_<br><br>_- Relatório de situação do projeto_   |
| _- Comunicar situação do projeto_                                                                                               | _- Equipe_<br><br>_- Prof_  | _- Semanal_               | _- Ata de reunião e_<br><br>_- Relatório de Situação do Projeto_ |


## 2.4 Plano de Gestão de Riscos


## Introdução

A gestão de riscos é um componente essencial no desenvolvimento de software, garantindo que os projetos alcancem seus objetivos com sucesso e dentro do prazo previsto. Este plano de gestão de riscos tem como objetivo identificar, analisar, priorizar e mitigar os riscos potenciais que podem surgir ao longo do ciclo de vida do desenvolvimento de software. Este documento fornece uma visão geral das estratégias e processos que serão implementados para assegurar que os riscos sejam gerenciados de maneira eficaz, minimizando impactos negativos e promovendo a entrega de um produto de qualidade.

### Tipos de risco

Os riscos foram divididos nessas seguintes categorias: 

- Externo
- Gerencial
- Organizacional
- Técnico

  ## Definições

### Probabilidade e impacto dos riscos

| Nível | Probabilidade | Porcentagem de certeza |
| :---: | :---: | :---: |
| 1 | Muito baixa | 0% - 19% |
| 2 | Baixa | 20% - 39% |
| 3 | Média | 40% - 59% |
| 4 | Alta | 60% - 79% |
| 5 | Muito alta | 80% - 100% |

### Impacto

| Nível | Impacto |
| :---: | :---: |
| 1 | Muito baixo |
| 2 | Baixo |
| 3 | Médio |
| 4 | Alto |
| 5 | Muito alto |

### Matriz de probablidade X impacto

| Probabilidade / Impacto | Muito baixo | Baixo | Médio | Alto | Muito alto |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Muito baixa | 1 | 2 | 3 | 4 | 5 |
| Baixa | 2 | 4 | 6 | 8 | 10 |
| Média | 3 | 6 | 9 | 12 | 15 |
| Alta | 4 | 8 | 12 | 16 | 20 |
| Muito alta | 5 | 10 | 15 | 20 | 25 |

### Graus de risco

| Grau | Risco |
| :---: | :---: |
| 1 - 5 | Baixo |
| 6 - 12 | Médio |
| 15 - 25 | Elevado |

## Levantamento de riscos

### Tabela de Riscos

| Risco | Descrição | Categoria |
| :---: | :---: | :---: |
| R01 | Dificuldade com as tecnologias definidas | Técnico |
| R02 | Saída de algum integrante do projeto | Gerencial |
| R03 | Falta de participação de algum integrante do projeto | Gerencial |
| R04 | Falta de integração da equipe | Gerencial |
| R05 | Divergência nos horários disponíveis dos integrantes | Organizacional |
| R06 | Alteração no escopo do projeto | Gerencial |
| R07 | Integrante com problema de saúde | Externo |
| R08 | Indisponibilidade do cliente | Externo |
| R09 | Falta de disponibilização de releases para o cliente testar | Gerencial |
| R10 | Falta de participação durante as reuniões | Gerencial |
| R11 | Sobrecarga de membros da equipe | Gerencial |
| R12 | Falha de equipamento | Externo |
| R13 | Dependência entre atividades | Organizacional |
| R14 | Problemas com a infraestrutura de rede | Técnico |
| R15 | Dificuldade na adaptação a novas ferramentas | Técnico |


### Causa e Consequência dos Riscos

| Risco | Causa | Consequência |
| :---: | :---: | :---: |
| R01 | Complexidade ou falta de familiaridade com a tecnologia | Atraso no cronograma |
| R02 | Motivos pessoais, profissionais ou insatisfação | Redistribuição de tarefas, sobrecarga dos membros restantes |
| R03 | Falta de compromisso, desmotivação | Redução na produtividade, atraso nas entregas |
| R04 | Comunicação inadequada | Conflitos internos, redução na qualidade do trabalho |
| R05 | Compromissos pessoais e acadêmicos | Dificuldade de coordenação, atraso nas entregas |
| R06 | Mudanças nos requisitos do cliente | Aumento de escopo e atraso |
| R07 | Doença ou problemas de saúde inesperados | Atraso nas atividades, provável sobrecarga para outro membro da equipe |
| R08 | Agenda ocupada ou falta de interesse | Atraso nas aprovações e feedback, impacto no cronograma |
| R09 | Falta de planejamento, problemas técnicos | Dificuldade para identificar e corrigir erros, insatisfação do cliente |
| R10 | Desinteresse, conflitos de horários | Falta de alinhamento, decisões mal informadas |
| R11 | Distribuição inadequada de tarefas, falta de recursos | Burnout, redução na qualidade do trabalho |
| R12 | Equipamentos antigos ou mal mantidos | Interrupção do trabalho, necessidade de reparos ou substituição |
| R13 | Interdependência de tarefas, má gestão de projeto | Atrasos em cascata, complicações na gestão do cronograma |
| R14 | Rede instável ou inadequada | Interrupção do trabalho, perda de dados |
| R15 | Novas ferramentas complexas, falta de experiência| Queda na produtividade, erros no trabalho |

### Prevenção e Solução dos Riscos

| Risco | Prevenção | Solução |
| :---: | :---: | :---: |
| R01 | Escolha de tecnologias familiares e mais fáceis | Oferecer materiais de estudo e suporte, se possível |
| R02 | Manter uma boa comunicação e motivação | Redistribuição eficiente de tarefas |
| R03 | Incentivar o comprometimento, definir responsabilidades claras | Reavaliar carga de trabalho, conversa com o integrante |
| R04 | Estabelecer canais de comunicação claros, promover a integração | Mediação de conflitos |
| R05 | Planejar cronograma flexível, considerar compromissos individuais | Ajustar prazos conforme necessário, redistribuir tarefas temporariamente |
| R06 | Manter documentação clara e requisitos bem definidos desde o início | Reavaliar o escopo, renegociar prazos e orçamento |
| R07 | Incentivar hábitos saudáveis, monitorar a saúde da equipe | Redistribuir tarefas |
| R08 | Agendar reuniões com antecedência, manter cliente engajado | Reagendar reuniões, buscar alternativas de comunicação |
| R09 | Planejamento adequado, definição de um cronograma realista | Revisão e correção de problemas identificados, comunicação com o cliente |
| R10 | Encorajar participação, tornar reuniões mais eficientes | Realinhar equipe, reforçar a importância das reuniões |
| R11 | Planejamento de recursos adequado, monitoramento constante | Redistribuição de tarefas, contratar ajuda temporária se necessário |
| R12 | Manutenção regular, atualização de equipamentos | Reparos rápidos ou avaliar redistribuição da tarefa |
| R13 | Planejamento detalhado, gerenciamento de dependências | Replanejamento e ajustes, priorização de atividades críticas |
| R14 | Monitoramento constante | Uso de redes alternativas, backup de dados regular |
| R15 | Estudo de novas ferramentas | Suporte, se possível, e estudo individual |

