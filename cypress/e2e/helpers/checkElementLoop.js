const checkElementLoop = (currentDate) => {
  cy.get('main>div>a').each(($el, index, $list) => {
    for (let i = 0; i < $el.length; i++) {
      cy.wrap($el).click({ force: true });
      cy.wait(1500);
      cy.contains(currentDate.day++);
    }
  });
};

module.exports = checkElementLoop;
