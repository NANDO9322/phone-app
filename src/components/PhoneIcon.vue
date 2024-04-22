<template>
    <div class="phone-icon" @click="togglePhone">
      <i class="fas" :class="phoneOpen ? 'fa-times' : 'fa-phone'"></i>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        phoneOpen: false // Inicialmente, o telefone está fechado
      };
    },
    methods: {
      togglePhone() {
        this.phoneOpen = !this.phoneOpen; // Alterna o estado do telefone (aberto/fechado)
        if (this.phoneOpen) {
          // Se o telefone estiver aberto, execute alguma lógica, como exibir um componente DialPad
          console.log('O telefone está aberto!');
        } else {
          // Se o telefone estiver fechado, execute alguma lógica, como esconder o componente DialPad
          console.log('O telefone está fechado!');
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .phone-icon {
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
  }
  </style>
  