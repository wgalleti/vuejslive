# Help !!!

## Sobre programar com JS depois de 2016

https://medium.com/@breakzplatform/como-%C3%A9-programar-em-javascript-em-2016-ede3224f5a14

Nesse artigo, cômico, porém uma das realidades que afastam um pouco os desenvolvedores do frontend. Vale a pena a leitura!

## Javascripts necessários!

Aquelas perguntas básicas (muito importantes) que pra quem leu o texto acima fica quase respondido são sobre es2015, es2016 e essas coisas.

Muitos com certeza vão ter ouvido falar dos **`callback` from hell** e como que o pessoal resolveu essas *capetagens!*. Enfim, um cara ([Antony Gore](https://vuejsdevelopers.com/)) escreveu um artigo que da uma dica das novas features do js que podem nos ajudar no desenvolvimento dos nossos projetos em VueJS.

Se você já quer saber de cara, elas são.

1. Arrow functions
2. Template literals
3. Modules
4. Destructuring and spread syntax

https://vuejsdevelopers.com/2018/01/22/vue-js-javascript-es6/

## Diferença entre NPM e YARN

> TL;DR:
O npm era lento e gerava problema devido aos pacotes não seguirem o mesmo padrão de instalação para todos (famoso mais na minha maquina funcionou). O Yarn chegou, mostrou como que fazia e o pessoal do npm copiou. Hoje a diferença de velocidade de instalação e segurança estão muito proximas.

Ambos são gerenciadores de dependências/pacotes, similares ao `pip` do Python.

O npm é um projeto Open Source criado em 2009 com objetivo de facilitar a troca de código JavaScript, sendo usado como gerenciador de pacotes padrão do Node.js. Ao falarmos de npm podemos estar nos referindo a um destes itens:

* O repositório aberto onde ficam armazenados os pacotes
* Um cliente que permite o envio/download de código do repositório
* Um site onde é possível pesquisar informações dos pacotes e ver a documentação do npm.

Em outubro de 2016, o Facebook lançou o Yarn em conjunto com o Google, Exponent e Tilde, com o objetivo de tornar o processo de instalação das dependências não só mais rápido, mas também mais seguro.

No Facebook, muitos dos projetos que dependiam do npm apresentavam certos problemas, como:

Demora no tempo de instalação
Dependência que não possuíam a mesma versão em diversas máquinas
A forma que o npm executa códigos das dependências de forma automática
Após tentar algumas soluções alternativas para resolver estas questões, alguns engenheiros começaram a trabalhar em um cliente novo, buscando resolver estes problemas a partir da raiz.

Até o lançamento do Yarn, o npm realizava as instalações das dependências de forma não determinística, ou seja, a estrutura da pasta node_modules poderia ser diferente de uma pessoa para outra, causando aquele velho problema do “Mas na minha máquina funciona!”. Para contornar este problema, o Yarn faz uso de arquivos de lock (yarn.lock) e de um algoritmo de instalação determinístico. No arquivo de lock a versão exata da dependência é armazenada, garantindo que todas as instalações são iguais. Apesar de o npm já possuir uma opção para gerar arquivos de lock, o Yarn gera seu arquivo de lock automaticamente.

Para acelerar a instalação, o Yarn consulta um diretório de cache global, que é usado tanto para evitar que o download seja feito, quanto para permitir a instalação enquanto estiver offline, o que não era possível realizar com o npm.

O processo de instalação através do Yarn é feito em três etapas, sendo elas:

1. Busca recursiva de dependências no repositório do npm
2. Procura no cache global e, caso a dependência ainda não tenha sido baixada, salva uma cópia no cache global
3. Conecta as dependências ao copiá-las do cache global para a pasta node_modules local

Desta forma, o Yarn consegue maximizar o uso dos recursos disponíveis e reduzir o tempo de instalação. Em diversos testes de performance realizados após o lançamento do Yarn, ele mostrou-se muito mais rápido que o npm.

Em março de 2017, após um ano e meio de desenvolvimento, foi lançada versão 5 do npm, trazendo diversas melhorias de performance semelhantes às presentes no Yarn. Nesta versão, o npm já cria um arquivo de lock chamado package-lock.json automaticamente; é capaz de instalar dependências a partir do cache; realiza validações de hashes SHA-512 e a velocidade de instalação aumentou cerca de 5x comparada com a anterior. Se você já instalou a versão 8 do Node.js, ela já conta com o npm 5 instalado por padrão.

## Que Store é essa? (Valeu Tony Lampada pelo trocadilho)

O Vuex é um padrão de gerenciamento de estado + biblioteca para aplicativos Vue.js. Ele serve como um store centralizado para todos os componentes em uma aplicação, com regras garantindo que o estado só possa ser mutado de forma previsível.

[Mais informações](https://vuex.vuejs.org/ptbr/)

