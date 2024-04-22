<template>
    <div class="phone-keypad">
      <PhoneDisplay :displayText="displayText" />
      <div class="dial-pad">
        <DialPad @add-digit="addDigit" />
      </div>
      <div class="actions">
        <button @click="callNumber"><i class="fas fa-phone"></i> Ligar</button>
        <button @click="clearNumber"><i class="fas fa-times"></i> Limpar</button>
      </div>
    </div>
  </template>
  
  <script>
  import PhoneDisplay from './PhoneDisplay.vue';
  import DialPad from './DialPad.vue';
  
  export default {
    components: {
      PhoneDisplay,
      DialPad
    },
    data() {
      return {
        displayText: '' // Inicialmente, o display está vazio
      };
    },
    methods: {
      addDigit(digit) {
        // Adiciona o dígito ao número discado
        this.displayText += digit;
      },
      callNumber() {
        // Lógica para ligar para o número discado
        console.log('Ligando para:', this.displayText);
      },
      clearNumber() {
        // Limpa o número discado
        this.displayText = '';
      }
    }
  }
  </script>
  
  <style scoped>
  .phone-keypad {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .dial-pad {
    margin-bottom: 20px;
  }
  
  .actions button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
  }
  </style>
  