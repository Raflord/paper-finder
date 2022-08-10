# Paper Finder

## O que é esse projeto

Esse é meu primeiro projeto fora de um curso e em uma situação real. Nesse projeto foquei apenas na parte de front-end  e funcionalidade da aplicação, sem back-end ou banco de dados. Queria que fosse algo que eu teria capacidade de desenvolver com o conhecimento que eu tinha até então, pensando também na facilidade de uso e adaptação do usuário final.

## Como a ideia surgiu

No meu antigo trabalho, eu encontrei um grande problema de estoque na área em que eu trabalhava, então tentei fazer uma solução usando programação.

Para contextualizar o problema. Eu trabalhava em uma fábrica que produzia painéis de MDF revestido, especificamente na área de revestimento. Os revestimentos são feitos com um papel especial que é prensado na superfície do painel de MDF. Esse papel tem um comprimento de quase 6 metros, sendo possível prensar dois painéis de uma vez. Ele é armazenado em paletes, que são empilhados em grandes gondolas, que na empresa são chamado de magazines, Cada magazine suporta 8 desses papeis e são identificados com letras de A até Z.

Todos os paletes são carregados por empilhadeiras, que fazem a troca do tipo de papel que será utilizado na linha de produção. E é nessa etapa que se encontra o problema. Os operadores de empilhadeira, não possuem nenhum sistema de controle de estoque, sendo assim, sempre quando é necessário fazer a troca de um determinado papel na linha de produção, é preciso procurar onde está cada papel entre os diversos magazines e paletes.

Observando esse problema, fica claro a necessidade de um sistema de controle de estoque. Como na época eu ainda estava na faculdade de Análise e Desenvolvimento de Sistemas e também começando a estudar Javascript para web, achei que seria uma ótima oportunidade de usar um problema real para melhroar minhas habilidades.

## Como o sistema funciona

O sistema consiste em apenas uma tela, onde o operador de empilhadeira pode registrar algum palete de papel e também fazer a busca por um papel específico na lista. O palete com papel tem as seguintes informações:

- Nome (por ser apenas um projeto de demonstração, não é apresentado o catálogo completo, somente algumas opções para teste)
- Posição (magazine: A-Z e posição no magazine: 1-8. ex.: E5)
- Lado (superior ou inferior)

Após o preenchimento das informações, o material é armazenado em uma lista que contém todos os papéis do estoque. Uma barra de pesquisa pode ser utilizada para buscar determinado material pelo seu nome, filtrando e mostrando a posição onde se encontra cada papel da pesquisa.

O sistema é básico, tanto nas funcionalidades quanto visualmente. O intuíto, além de ter uma fácil utilização, era também melhorar minhas habilidades e entendimento da programação web. Como eu ainda estava iniciando meus estudos nessa área, usei apenas o que eu tinha conhecimento até então que era, HTML, CSS e Javascript.

No fim, eu apresentei o projeto para os coordenadores do setor na empresa, que foi muito bem aceito. O projeto então foi encaminhado para gestão de melhorias e passado para desenvolvimento pela área de T.I para ser feita a implementação.
