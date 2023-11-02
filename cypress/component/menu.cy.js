import MenuLateral from '../../src/components/MenuLateral.vue';
import { BNav } from 'bootstrap-vue'
import { BIcon } from 'bootstrap-vue'

describe('MenuLateral.vue', () => {
  it('O nome é correto', () => {
    cy.wrap(MenuLateral).should('have.property', 'name', 'MenuLateral');
  });

  it('Existe o methods correto', () => {
    expect(MenuLateral.methods.isActive).to.be.an.instanceof(Function);
  });

  const componentsToTest = {
    BNav,
    BIcon
  };

  for (const componentName in componentsToTest) {
    if (componentsToTest.hasOwnProperty(componentName)) {
      it(`Os componentes são importados "${componentName}" corretamente`, () => {
        const component = componentsToTest[componentName];
        expect(component).to.not.be.undefined;
      });
    }
  }
  
})