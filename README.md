# Tests with JavaScript

## Tecnologies Used:

* [NodeJS](https://nodejs.org/en/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.npmjs.com/package/chai)

## Brief explanation

* TDD - Test Drive Development
  * Software development based on tests that are written before our production code.

* BDD - Behavior Driven Development
  * It is an Agile development technique that encourages collaboration between developers, quality sectors and non-technical or business people in a software project, it relates to the concept of verification and validation.

### The tests have three parts:

* RED: It's when the test result fails.
* GREEN: It's when the result test is positive.
* BLUE: Refactoring. 

![banner](https://github.com/pauloteixeira01/js-test/blob/main/img/banner.png)

### O processo de criação de programação orientado a testes é simples:

  1.  **RED:** Escreva um teste que falhe. Pense no que o código deve fazer, descreva o contexto e defina quais são as verificações que precisam ser feitas. Não há um limite no número de testes, então quanto menos coisa cada teste descrever e verificar melhor, isso também é conhecido como **Baby Steps**. No início também não é preciso se preocupar se a classe/método ainda não existe. Pense primeiro no teste e só depois que este estiver pronto crie a arquitetura necessária, e então todo o ciclo tem início novamente.
  
  2.  **GREEN:** Faça o teste passar. Agora, escreva o mínimo de código para que o teste passe.

  3.  **BLUE:** Refatorar. Significa que uma vez que o teste passou, procure se o código pode ser melhorado, note que o código já funciona porém na maior parte das vezes sempre existe algo que pode torná-lo menor. Geralmente para um teste passar é preciso inserir duplicação através de constantes.
