describe('Оформление заказа', function () {
   it('Проверка возможности заказать товар', function () {
        cy.visit('https://huntingpony.com/');
        cy.wait(3000)
        cy.get('#splide02-slide01 > .product-preview > .product-preview__content > .product-preview__area-title').click();
        cy.get('.add-cart-counter__btn').click();
        cy.get('.header__cart').click();
        cy.get('.cart-controls > .button').click();
    })
})
