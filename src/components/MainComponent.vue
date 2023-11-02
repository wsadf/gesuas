<template>
  <div class="d-flex">
    <menu-lateral />
    <main class="flex-grow-1 content">
      <header-component />
      <b-container>
        <slot />
      </b-container>
    </main>
  </div>
</template>


<script>
import { BContainer } from 'bootstrap-vue'
import MenuLateral from '@/components/MenuLateral'
import HeaderComponent from '@/components/HeaderComponent'


export default {
  name: 'MainComponent',

  components: {
    BContainer,
    MenuLateral,
    HeaderComponent,


  },
}
</script>

<style>
    .content {
      margin-left: 250px;
      width: calc(100% - 250px); /* Calcula a largura do conteúdo */
    }
    @media (max-width: 767px) {
  .content {
    margin-left: 160px;
      width: calc(100% - 160px); 
  }
}
</style>