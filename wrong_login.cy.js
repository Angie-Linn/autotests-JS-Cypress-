describe('Тестирование авторизации', function () {
   it('Ввожу НЕправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.wait(3000)
        cy.get('#mail').trigger('mouseover').type('Wrong_Login');
        cy.wait(3000)
        cy.get('#pass').trigger('mouseover') .type('iLoveqastudio1');
        cy.wait(3000)
        cy.get('#loginButton') .click();
    })
})