<template>
  <div>
    <main-component>
      <b-row class="pt-5">
        <b-col md="12" lg="8" xl="12" class="text-left">
          <b-form @submit="onSubmit">
            <legend class="p-2 bg-legend text-white">Informações Pessoais</legend>
            <b-form-group label="Nome:" label-for="input-name">
              <b-form-input id="input-name" v-model="form.name" type="text" required @blur="validateField('name')" />
              <p class="text-danger" v-if="showError['name']">
        {{ showError['name'] === 'required' ? 'Preenchimento obrigatório' : 'O campo não pode ser um número' }}
      </p>
            </b-form-group>

            <b-form-group label="Nome Social:" label-for="input-name-social">
              <b-form-input id="input-name-social" v-model="form.nameSocial" type="text" />
            </b-form-group>

            <b-row>
              <b-col md="6">
                <b-form-group id="input-group-1" label="Data de nascimento:" label-for="input-1">
                  <b-form-input ref="dataNascimentoInput" id="input-1" v-model="form.dataNascimento"
                    v-mask="['##/##/####']" type="text" required @blur="validateDataNascimento" />
                  <p class="text-danger" v-if="form.dataNascimento && !isValidDataNascimento">Data de nascimento inválida
                  </p>
                </b-form-group>
              </b-col>

              <b-col md="6">
                <b-form-group label="Sexo Biológico:" label-for="input-sexo">
                  <b-form-select id="input-sexo" v-model="form.sexo" required>
                    <option value="" disabled>Selecione...</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="6">
                <b-form-group label="Gênero:" label-for="input-gender">
                  <b-form-radio-group id="input-gender" v-model="form.gender">
                    <div class="row">
                      <div class="col-md-6">
                        <b-form-radio value="mulher_cis">Mulher Cisgênero</b-form-radio>
                        <b-form-radio value="mulher_trans">Mulher Transgênero</b-form-radio>
                        <b-form-radio value="travesti">Travesti</b-form-radio>
                      </div>
                      <div class="col-md-6">
                        <b-form-radio value="homem_cis">Homem Cisgênero</b-form-radio>
                        <b-form-radio value="homem_trans">Homem Transgênero</b-form-radio>
                        <b-form-radio value="nao_binario">Não Binário</b-form-radio>
                      </div>
                    </div>
                  </b-form-radio-group>

                </b-form-group>
              </b-col>

              <b-col md="6">
                <b-form-group label="Pessoa do público LGBTQIA+?" label-for="input-lgbtqia">
                  <b-form-radio-group id="input-lgbtqia" v-model="form.lgbtqia">
                    <b-form-radio value="sim">Sim</b-form-radio>
                    <b-form-radio value="nao">Não</b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Cor/Raça:" label-for="input-cor">
                  <b-form-select id="input-cor" v-model="form.corRaca" required>
                    <option value="" disabled>Selecione...</option>
                    <option value="branca">Branca</option>
                    <option value="preta">Preta</option>
                    <option value="parda">Parda</option>
                    <option value="amarela">Amarela</option>
                    <option value="indigena">Indígena</option>
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-row>

            <legend class="p-2 bg-legend text-white">Documentos</legend>
            <b-row>
              <b-col md="6">
                <b-form-group label="RG:" label-for="input-rg">
                  <b-form-input id="input-rg" v-model="form.rg" type="text" v-mask="'##.###.###-#'" required
                    @blur="validateRG" />
                </b-form-group>
                <p class="text-danger" v-if="showError.rg">{{ errorMessage }}</p>
              </b-col>

              <b-col col md="6">
                <b-form-group label="CPF:" label-for="input-cpf">
                  <b-form-input id="input-cpf" v-model="form.cpf" type="text" v-mask="'###.###.###-##'" required
                    @blur="validateCPF" />
                </b-form-group>
                <p class="text-danger" v-if="showError.cpf">{{ errorMessage }}</p>
              </b-col>
            </b-row>

            <legend class="p-2 bg-legend text-white">Local de residência</legend>
            <b-form-group label="CEP:" label-for="input-zipcode">
              <b-form-input id="input-zipcode" v-model="form.zipCode" v-mask="'#####-###'" required @change="queryCEP" />
              <b-spinner v-if="zipCodeLoading" variant="info" class="flex-shrink-0 ml-2" />
            </b-form-group>
            <small v-if="inputZipCodeError" class="text-danger">O CEP deve conter 9 números.</small>
            <b-row>
              <b-col md="6">
                <b-form-group label="Bairro:" label-for="input-neighborhood">
                  <b-form-input id="input-neighborhood" v-model="form.neighborhood" required
                    @blur="validateField('neighborhood')" />
                  <p class="text-danger" v-if="showError['neighborhood']">Preenchimento obrigatório</p>
                </b-form-group>
              </b-col>

              <b-col md="6">
                <b-form-group label="Endereço:" label-for="input-address">
                  <b-form-input id="input-address" v-model="form.address" required @blur="validateField('address')" />
                  <p class="text-danger" v-if="showError['address']">Preenchimento obrigatório</p>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="6">
                <b-form-group label="Número:" label-for="input-number">
                  <b-form-input id="input-number" v-model="form.number" required />
                </b-form-group>
              </b-col>

              <b-col md="6">
                <b-form-group label="Complemento:" label-for="input-complement">
                  <b-form-input id="input-complement" v-model="form.complement" />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Cidade:" label-for="input-city">
                  <b-form-input id="input-city" v-model="form.city" required />
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Estado:" label-for="input-state">
                  <b-form-input id="input-state" v-model="form.state" required />
                </b-form-group>
              </b-col>
            </b-row>
            <legend class="p-2 bg-legend text-white">Informações de contato</legend>
            <b-row>
              <b-col md="5">
                <b-form-group label="Celular:" label-for="input-phone">
                  <b-form-input id="input-phone" v-model="form.phone" v-mask="['(##) ####-####', '(##) #####-####']"
                    required @blur="validatePhone" />
                  <p class="text-danger" v-if="showError.phone">{{ errorMessage }}</p>
                </b-form-group>
              </b-col>
              <b-col md="7">
                <b-form-group label="E-mail:" label-for="input-email">
                  <b-form-input id="input-email" v-model="form.email" type="email" required />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row class="d-flex justify-content-end mt-4">
    <b-col
      cols="12"
      md="auto"
      class="text-md-right mb-3"
    >
      <b-button
        type="reset"
        class="rounded btn btn-outline-primary bg-transparent text-primary btn-block"
        variant="primary"
        @click="clearForm"
      >
        Cancelar
      </b-button>
    </b-col>
    <b-col
      cols="12"
      md="auto"
    >
      <b-button
        type="submit"
        class="rounded btn btn-primary btn-block"
        variant="primary"
        :disabled="saveLoading"
      >
        <template v-if="saveLoading">
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
          Salvando...
        </template>
        <template v-else>
          Cadastrar
        </template>
      </b-button>
    </b-col>
  </b-row>
          </b-form>
        </b-col>
      </b-row>

      <b-modal v-model="modalFinished" hideHeaderClose noCloseOnEsc size="lg">
        <b-alert show class="mb-0 border-0 bg-white">
          <p class="mb-0 d-flex flex-column justify-content-center align-items-center">
            <b-icon :icon="errorSaving ? 'x-circle-fill' : 'check-circle-fill'"
              :variant="errorSaving ? 'danger' : 'success'" style="width: 80px; height: 80px;" class="mr-2 mb-4"></b-icon>
            <span v-html="errorSaving ? txtModalFinishedError : txtModalFinishedSuccess" />
          </p>
        </b-alert>

        <template #modal-footer>
          <b-button variant="primary" class="btn-block" @click="fillAgain(!errorSaving)">
            Fazer novo cadastro
          </b-button>
        </template>
      </b-modal>
    </main-component>
  </div>
</template>

<script>
import ApiCep from '@/api/cep'
import ApiContacts from '@/api/contacts'
import { mapActions, mapGetters, mapState } from 'vuex';
import { mask } from 'vue-the-mask'
import { BAlert, BButton, BCol, BForm, BModal, BRow, BSpinner } from 'bootstrap-vue'
import MainComponent from '@/components/MainComponent'

function initialForm() {
  return {
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    number: '',
    address: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    sexo: '',
    corRaca: '',
    rg: '',
  }
}

export default {
  name: 'FormView',

  components: {
    BAlert,
    BButton,
    BCol,
    BForm,
    BModal,
    BRow,
    BSpinner,
    MainComponent
  },

  directives: { mask },

  data() {
    return {
      errorMessage: '',
      showError: {
        name: false,
        sexo: false,
        corRaca: false,
        rg: false,
        cpf: false,
        neighborhood: false,
        address: false,
        phone: false
      },
      isValidDataNascimento: true,
      errorSaving: false,
      form: initialForm(),
      inputZipCodeError: false,
      loadingDataContact: false,
      modalFinished: false,
      saveLoading: false,
      txtModalNotFound: "O CEP não foi encontrado, favor preencher os campos de endereço.",
      txtModalError: "Houve um erro ao carregar as informações do endereço, favor preencher os campos de endereço.",
      zipCodeLoading: false,
      sexOptions: [
        { value: 'masculino', text: 'Masculino' },
        { value: 'feminino', text: 'Feminino' },
      ],
      raceOptions: [
        { value: 'branca', text: 'Branca' },
        { value: 'preta', text: 'Preta' },
        { value: 'parda', text: 'Parda' },
        { value: 'indigena', text: 'Indígena' },
        { value: 'amarela', text: 'Amarela' },
      ],
    }
  },

  computed: {
    ...mapGetters(['detailContact']),
    ...mapState(['contacts']),

    isFieldEmpty() {
      return (fieldName) => {
        const value = this.form[fieldName];
        return !value;
      };
    },

    newRegister() {
      console.log(this.$route);
      return this.$route.name === 'new-register';
    },
    txtTitle() {
      return this.newRegister ? 'Novo cadastro' : 'Editar cadastro'
    },
    txtBtnSubmit() {
      return this.newRegister ? 'Cadastrar' : 'Alterar'
    },
    txtModalFinishedError() {
      return this.newRegister ?
        "Houve um erro ao salvar o contato.<br />Deseja adicionar novamente o contato?" :
        "Houve um erro ao alterar o contato.<br />Deseja tentar alterar novamente o contato?";
    },
    txtModalFinishedSuccess() {
      return this.newRegister ?
        "Cadastro realizado com sucesso!" :
        "Cadastro alterado com sucesso!";
    },
  },

  watch: {
    contacts() {
      this.getDetailContact(this.$route.params);
    },
  },

  created() {
    if (this.$route.name === 'edit-register') {
      this.loadingDataContact = true;
      if (this.contacts.length === 0) {
        this.getAllContacts();
      } else {
        this.getDetailContact(this.$route.params);
      }
    }
  },

  methods: {
    ...mapActions(['getAllContacts']),

    clearForm() {
      this.form = initialForm();
    },

    validatePhone() {
      const phone = this.form.phone.replace(/\D/g, ''); // Remove caracteres não numéricos

      // Verifique se o telefone tem entre 10 e 11 dígitos
      if (phone.length < 10 || phone.length > 11) {
        this.showError.phone = true;
        this.errorMessage = 'Número de celular inválido';
      } else {
        this.showError.phone = false;
        this.errorMessage = '';
      }
    }
    ,

    validateCPF() {
      const cpf = this.form.cpf.replace(/\D/g, '');

      if (cpf.length !== 11 || cpf.match(/^(.)\1+$/)) {
        this.showError.cpf = true;
        this.errorMessage = 'CPF inválido';
      } else {
        this.showError.cpf = false;
        this.errorMessage = '';
      }
    },

    validateRG() {
      const rg = this.form.rg.replace(/\D/g, '');

      if (!rg) {
        this.showError.rg = true;
        this.errorMessage = 'RG não pode ficar em branco';
      } else if (rg.length !== 9) {
        this.showError.rg = true;
        this.errorMessage = 'RG deve ter 9 dígitos';
      } else {
        this.showError.rg = false;
        this.errorMessage = '';
      }
    },

    validateField(fieldName) {
      if (!this.form[fieldName]) {
        this.showError[fieldName] = 'required';
      } else if (!isNaN(this.form[fieldName])) {
        this.form[fieldName] = '';
        this.showError[fieldName] = 'number';
      } else {
        this.showError[fieldName] = null;
      }
    },

    validateDataNascimento() {
      const dataNascimento = this.form.dataNascimento;
      if (!dataNascimento) {
        this.isValidDataNascimento = false;
      } else {
        const parts = dataNascimento.split('/');
        if (parts.length !== 3) {
          this.isValidDataNascimento = false;
        } else {
          const day = parseInt(parts[0], 10);
          const month = parseInt(parts[1], 10);
          const year = parseInt(parts[2], 10);
          const currentDate = new Date();
          const minDate = new Date(currentDate.getFullYear() - 120, currentDate.getMonth(), currentDate.getDate());
          const maxDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());

          if (isNaN(day) || isNaN(month) || isNaN(year) || year < 1900 || year > currentDate.getFullYear() || month < 1 || month > 12 || day < 1 || day > 31) {
            this.isValidDataNascimento = false;
          } else {
            const inputDate = new Date(year, month - 1, day);
            if (inputDate < minDate || inputDate > maxDate) {
              this.isValidDataNascimento = false;
            } else {
              this.isValidDataNascimento = true;
            }
          }
        }
      }
    },

    async createNewContact(form) {
      this.errorSaving = false;
      this.saveLoading = true;

      await ApiContacts.newContact(form)
        .then()
        .catch(() => {
          this.errorSaving = true;
        })
        .finally(() => {
          this.modalFinished = true;
          this.saveLoading = false;
        })
    },

    async editContact(form) {
      this.errorSaving = false;
      this.saveLoading = true;

      await ApiContacts.editContact(this.$route.params.id, form)
        .then()
        .catch(() => {
          this.errorSaving = true;
        })
        .finally(() => {
          this.modalFinished = true;
          this.saveLoading = false;
        })
    },

    fillAgain(clear) {
      if (clear && this.newRegister) {
        this.clearForm();
      }
      this.modalFinished = false;
      this.$refs.nameInput.focus();
    },

    getDetailContact(id) {
      const detail = this.detailContact(parseInt(id.id));
      Object.assign(this.form, detail);
      this.loadingDataContact = false;
    },

    onSubmit(event) {
      event.preventDefault();

      if (!this.form.sexo) {
        this.showError['sexo'] = true;
        return;
      }

      if (!this.form.corRaca) {
        this.showError['corRaca'] = true;
        return;
      }

      if (this.newRegister) {
        this.createNewContact(this.form);
      } else {
        this.editContact(this.form);
      }
    },

    async queryCEP(number) {
      const numberFormart = number.replace(/-/g, '');
      this.inputZipCodeError = false;

      if (numberFormart.length != 8) {
        this.$refs.zipcode.focus();
        this.inputZipCodeError = true;
      } else {
        this.zipCodeLoading = true;
        await ApiCep.queryCep(numberFormart)
          .then((resp) => {
            if (resp.data?.erro) {
              this.showModal(this.txtModalNotFound);
            } else {
              const { logradouro: address, bairro: neighborhood, localidade: city, uf: state } = resp.data;
              this.form = { ...this.form, address, neighborhood, city, state };
            }
          })
          .catch(() => {
            this.showModal(this.txtModalError);
          })
          .finally(() => {
            this.zipCodeLoading = false;
          })
      }
    },

    showModal(title) {
      this.$bvModal.msgBoxOk(title, {
        centered: true,
        okVariant: 'success'
      })
    },
  },
}
</script>

<style lang="scss">
.input-zipcode {
  >div {
    align-items: center;
    display: flex
  }
}
</style>

<style lang="scss" scope>
.loading-data {
  background: rgba(0, 0, 0, 0.1);
  height: 100%;
  left: -5px;
  position: absolute;
  top: -5px;
  width: 100%;
  z-index: 10;
}

.bg-legend {
  background-color: #F26363;
  border-radius: 8px;
  font-size: 16px;
}

.text-danger {
  font-size: 12px;
  margin-top: 2px;
}
.modal-footer{
  border-top: none;
}
.modal-header{
  border-bottom: none;
}
</style>
