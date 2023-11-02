<template>
  <div>
    <main-component>
      <div class="d-flex justify-content-sm-between flex-column flex-sm-row">

        <router-link
          v-if="contacts.length > 0"
          class="btn btn-primary mt-sm-0 mt-2 align-self-end align-self-sm-center"
          :to="{ name: 'new-register' }"
        >
          <span class="pr-3">{{ txtBtn }}</span>
          <b-icon icon="person-plus" />
        </router-link>
      </div>
      <list-contacts />
    </main-component>
  </div>
</template>

<script>
import { BIcon } from 'bootstrap-vue'
import { mapState } from 'vuex';

import ListContacts from '@/components/ListContacts'
import MainComponent from '@/components/MainComponent'


export default {
  name: 'HomeView',

  components: {
    BIcon,
    ListContacts,
    MainComponent,
  },

  data() {
    return {
      txtBtn: "Adicionar"
    }
  },

  computed: {
    ...mapState(['contacts']),
	},
}
</script>
