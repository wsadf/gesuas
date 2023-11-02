import FormView from '../../src/views/FormView.vue';
import ApiCep from '@/api/cep';
import ApiContacts from '@/api/contacts';
import { mapActions, mapGetters, mapState } from 'vuex';
import { mask } from 'vue-the-mask';
import MainComponent from '@/components/MainComponent';
import { BAlert, BButton, BCol, BForm, BModal, BRow, BSpinner } from 'bootstrap-vue';

describe('FormView.vue', () => {

  it('O nome é correto', () => {
    cy.wrap(FormView).should('have.property', 'name', 'FormView');
  });

  it('API ApiCep é importada corretamente', () => {
    expect(ApiCep).to.not.be.undefined;
  });

  it('API ApiContacts é importada corretamente', () => {
    expect(ApiContacts).to.not.be.undefined;
  });

  it('Vuex é importado corretamente', () => {
    expect(mapActions).to.be.a('function');
    expect(mapGetters).to.be.a('function');
    expect(mapState).to.be.a('function');
  });

  it('"vue-the-mask" é importado corretamente', () => {
    expect(mask).to.be.a('function');
  });

  it('"MainComponent" é importado corretamente', () => {
    expect(MainComponent).to.not.be.undefined; // Verifica se a importação não é undefined
  });

  const componentsToTest = {
    BAlert,
    BButton,
    BCol,
    BForm,
    BModal,
    BRow,
    BSpinner
  };

  for (const componentName in componentsToTest) {
    if (componentsToTest.hasOwnProperty(componentName)) {
      it(`Os componentes são importados "${componentName}" corretamente`, () => {
        const component = componentsToTest[componentName];
        expect(component).to.not.be.undefined;
      });
    }
  }

  

});
