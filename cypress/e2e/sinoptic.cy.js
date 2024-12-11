const checkElementLoop = require('./helpers/checkElementLoop');
const currentDate = require('./helpers/currentDate');

describe('Sinoptic ', () => {
  // const date = currentDate();
  const cityName = 'Київ';
  before(() => {
    cy.visit('https://ua.sinoptik.ua/');

    cy.intercept('/api/search/suggest').as('apiSearchSuggest');
    cy.intercept('/api/location/recent/add').as('apiLocationRecentAdd');
  });

  it('check weather for city', () => {
    cy.get('input')
      .should('have.attr', 'type', 'search')
      .click()
      .type(cityName);
    cy.wait('@apiSearchSuggest').then((resp) => {
      expect(resp.response.statusCode).eq(200);
    });
    cy.get('menu>a').first().click();
    cy.wait('@apiLocationRecentAdd').then((resp) => {
      expect(resp.response.statusCode).eq(200);
    });
    // click week tab and check data
    checkElementLoop(currentDate());
    cy.get('a').contains('10').click();
    checkElementLoop(currentDate());
  });
});
