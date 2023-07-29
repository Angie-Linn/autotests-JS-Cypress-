describe('Тестирование авторизации', function () {
   it('Ввожу верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.wait(3000)
        cy.get('#mail').trigger('mouseover').type('german@dolnikov.ru');
        cy.wait(3000)
        cy.get('#pass').trigger('mouseover') .type('wrong-password');
        cy.wait(3000)
        cy.get('#loginButton') .click();
    })
})