<template>
  <header :class="`header ${defaultCssClass}`">
      <h4 class="font-weight-bold">{{ defaultMsg }}</h4>
  </header>
</template>

<script>

export default {
  name: 'HeaderComponent',

  components: {
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
