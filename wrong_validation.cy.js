describe('Тестирование авторизации', function () {
   it('Проверка на негативный кейс валидации (логин без @):', function () {
        cy.visit('https://login.qa.studio/');
        cy.wait(3000)
        cy.get('#mail').trigger('mouseover').type('germandolnikov.ru');
        cy.wait(3000)
        cy.get('#pass').trigger('mouseover') .type('iLoveqastudio1');
        cy.wait(3000)
        cy.get('#loginButton') .click();
    })
})
