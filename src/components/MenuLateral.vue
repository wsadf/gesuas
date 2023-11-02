<template>
  <b-nav
    vertical
    class="fixed-top border-right w-100 h-100"
    :class="{
      'max-w-240': !$root.isMobile
    }"
  >
    <div class="mb-3 py-3 border-bottom">
      <img src="../assets/logo.svg" width="169" height="32" alt="ProAssistência" />
    </div>
    <span class="text-vicosa pl-3">Viçosa</span>
    <span class="text-coordenacao border-bottom py-3 pl-2 mb-3 d-flex align-items-center">
      <b-icon class="mr-2" icon="chevron-left" variant="secondary" style="width: 8px; height: 8px;" />
      Coordenação
    </span>
    <b-nav-item :class="{ 'active': isActive('/') }" to="/">
      <b-icon class="mr-2" icon="house-door-fill" variant="secondary" style="width: 18px; height: 18px;"></b-icon>
      <span class="d-none d-md-inline">Início</span>
    </b-nav-item>
    <b-nav-item :class="{ 'active': isActive('/new-register') }" to="/new-register">
      <b-icon class="mr-2" icon="file-earmark-plus" variant="secondary" style="width: 18px; height: 18px;"></b-icon>
      <span class="d-none d-md-inline">Cadastro</span>
    </b-nav-item>
    <b-nav-item>
      <b-icon class="mr-2" icon="calendar3-event" variant="secondary" style="width: 18px; height: 18px;"></b-icon>
      <span class="d-none d-md-inline">Agenda</span>
    </b-nav-item>
    <b-nav-item>
      <b-icon class="mr-2" icon="person-fill" variant="secondary" style="width: 18px; height: 18px;"></b-icon>
      <span class="d-none d-md-inline">Perfil</span>
    </b-nav-item>
    <b-nav-item>
      <b-icon class="mr-2" icon="file-earmark-bar-graph" variant="secondary" style="width: 18px; height: 18px;"></b-icon>
      <span class="d-none d-md-inline">Relatórios</span>
    </b-nav-item>
    <img src="../assets/felipe.svg" class="felipe-image ml-2">
  </b-nav>
</template>
  
<script>
import { BNav } from 'bootstrap-vue'
import { BIcon } from 'bootstrap-vue'

export default {
    name: 'MenuLateral',

    components: {
        BNav,
        BIcon
    },

    methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },

}
</script>

<style lang="scss" scope>
.text-vicosa{
    font-size: 12px;
}
.text-coordenacao{
    font-size: 14px;
}
.nav-item{
    font-size: 14px;
    height: 40px;
    margin-bottom: 20px;
}
.active {
  a{
    background-color: #F26363;
  color: white;
  font-weight: 700;
  }
}

/* Estilos para o ícone do nav-item ativo */
.active svg path {
  fill: white;
}
@media (min-width: 768px) {
  .max-w-240 {
    max-width: 240px;
  }
}

/* Estilos para a navegação pai em resoluções menores */
@media (max-width: 767px) {
  .max-w-240 {
    max-width: 160px;
    overflow: hidden;
    .nav-item {text-align: center;}
  }
}
.border-top {
  border-top: 1px solid #ccc; /* Adicione o estilo da borda superior desejada */
  padding: 10px 0; /* Adicione espaço acima e abaixo da imagem, se necessário */
  text-align: center; /* Alinhe o conteúdo ao centro da div */
}
/* Estilos para a imagem de fundo */
.felipe-image {
  width: 100%;
  max-width: 196px; /* Largura máxima de 240px */
  height: auto;
  position: absolute;
  left: 2px;
  bottom: 5px;
}
</style>