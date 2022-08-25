export const getCyInIFrame = () => {
  const getIframeDocument = () =>
    cy.get('#storybook-preview-iframe').its('0.contentDocument').should('exist');

  const getIframeBody = () =>
    getIframeDocument().its('body').should('not.be.undefined').then(cy.wrap);

  return getIframeBody();
};
