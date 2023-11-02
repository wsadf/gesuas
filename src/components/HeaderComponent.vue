<template>
  <header :class="`header ${defaultCssClass}`">
    <b-container class="py-md-2">
      <h4 class="font-weight-bold">{{ defaultMsg }}</h4>
    </b-container>
  </header>
</template>

<script>
import { BContainer } from 'bootstrap-vue'

export default {
  name: 'HeaderComponent',

  components: {
    BContainer
  },

  props: {
    msg: {
      type: String,
      default: ''
    },
    cssClassName: {
      type: String,
      default: ''
    }
  },

  computed: {
    defaultCssClass() {
      if (!this.cssClassName) return 'text-primary';
      return this.cssClassName;
    },

    defaultMsg() {
      if (!this.msg) return 'Cadastro';
      return this.msg;
    }
  },
}
</script>
