import * as data from "../helpers/default_data.json"

describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
       cy.get('#mail').type(data.login);
       cy.get('#pass').type(data.password);
       cy.get('#loginButton').click();
       cy.get('#message').contains('Авторизация прошла успешно');
       cy.get('#message').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

 it(' Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
       
       cy.get('#forgotEmailButton').click();
       cy.get('#mailForgot').type(data.login);
       cy.get('#restoreEmailButton').click();
       cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })


    it('Не Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
       cy.get('#mail').type(data.login);
       cy.get('#pass').type('iLoveqastudio7');
       cy.get('#loginButton').click();
       cy.get('#message').contains('Такого логина или пароля нет');
       cy.get('#message').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

     it('Верный пароль и Не верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
       cy.get('#mail').type('ghgghgan@dolnikov.ru');
       cy.get('#pass').type(data.password);
       cy.get('#loginButton').click();
       cy.get('#messageHeader').contains('Такого логина или пароля нет');
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
       cy.get('#mail').type('germandolnikov.ru');
       cy.get('#pass').type(data.password);
       cy.get('#loginButton').click();
       cy.get('#message').contains('Нужно исправить проблему валидации');
       cy.get('#message').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

   it('проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
       cy.get('#mail').type('GerMan@Dolnikov.ru');
       cy.get('#pass').type(data.password);
       cy.get('#loginButton').click();
       cy.get('#messageHeader').contains('Авторизация прошла успешно');
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    

})


// запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome