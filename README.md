# Testes com JavaScript

## Tecnologias Usadas:

* JavaScript
* [Mocha](https://mochajs.org/)
* Chai

## Breve Explicação

* TDD - Test Drive Development
  * Desenvolvimento Orientado por Testes.
  * Software baseado em testes que são escritos antes do nosso código de produção.

* BDD - Behavior Driven Development
  * Desenvolvimento orientado por comportamento.
  * É uma técnica de desenvolvimento Ágil que encoraja colaboração entre desenvolvedores, setores de qualidade e pessoas não-técnicas ou de negócios num projeto de software, relaciona-se com o conceito de verificação e validação.

### Os testes tem três partes:

* RED: É quando o resultado do teste falha.
* GREEN: É quando o resultado do teste é 'OK'.
* BLUE: Refatoração. 

![banner](https://github.com/pauloteixeira01/js-test/blob/main/img/banner.png)

### O processo de criação de programação orientado a testes é simples:

  1.  **RED:** Escreva um teste que falhe. Pense no que o código deve fazer, descreva o contexto e defina quais são as verificações que precisam ser feitas. Não há um limite no número de testes, então quanto menos coisa cada teste descrever e verificar melhor, isso também é conhecido como **Baby Steps**. No início também não é preciso se preocupar se a classe/método ainda não existe. Pense primeiro no teste e só depois que este estiver pronto crie a arquitetura necessária, e então todo o ciclo tem início novamente.
  
  2.  **GREEN:** Faça o teste passar. Agora, escreva o mínimo de código para que o teste passe.

  3.  **BLUE:** Refatorar. Significa que uma vez que o teste passou, procure se o código pode ser melhorado, note que o código já funciona porém na maior parte das vezes sempre existe algo que pode torná-lo menor. Geralmente para um teste passar é preciso inserir duplicação através de constantes.
