 describe('Тестирование авторизации', function () {
   it('Проверка, что получили нужный текст и есть кнопка крестика', function () {
        cy.visit('https://login.qa.studio/');
        cy.wait(3000)
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        
    })
})