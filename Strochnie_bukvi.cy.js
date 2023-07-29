describe('Тестирование авторизации', function () {
   it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.wait(3000)
        cy.get('#mail').trigger('mouseover').type('GerMan@Dolnikov.ru');
        cy.wait(3000)
        cy.get('#pass').trigger('mouseover') .type('iLoveqastudio1');
        cy.wait(3000)
        cy.get('#loginButton') .click();
    })
})
