<template>
  <div class="d-flex">
    <menu-lateral />
    <main class="flex-grow-1 content">
      <header-component />
        <slot />
    </main>
  </div>
</template>


<script>
import MenuLateral from '@/components/MenuLateral'
import HeaderComponent from '@/components/HeaderComponent'


export default {
  name: 'MainComponent',

  components: {
    MenuLateral,
    HeaderComponent,


  },
}
</script>

<style lang="scss" scope>
    .content {
      margin-left: 250px;
      width: calc(100% - 250px); /* Calcula a largura do conteúdo */
      max-width: 1200px;
      margin: 0 auto;
    }
</style>