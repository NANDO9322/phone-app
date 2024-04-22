<template>
    <div class="phone-display">
      <div class="display">
        {{ displayText }}
      </div>
      <div class="actions">
        <i class="fas fa-arrow-left" @click="clearDisplay"></i>
        <i class="fas fa-phone"></i>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      displayText: {
        type: String,
        default: ''
      }
    },
    methods: {
      clearDisplay() {
        // Limpa o texto exibido no display
        this.$emit('clear-display');
      }
    }
  }
  </script>
  
  <style scoped>
  .phone-display {
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    width: 200px;
  }
  
  .display {
    font-size: 1.2rem;
    text-align: right;
    margin-bottom: 10px;
  }
  
  .actions {
    display: flex;
    justify-content: space-between;
  }
  
  .actions i {
    cursor: pointer;
  }
  </style>
  