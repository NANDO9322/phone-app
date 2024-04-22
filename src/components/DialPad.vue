<template>
    <div class="dial-pad">
      <div class="row">
        <button @click="addDigit(1)">1</button>
        <button @click="addDigit(2)">2<span>ABC</span></button>
        <button @click="addDigit(3)">3<span>DEF</span></button>
      </div>
      <div class="row">
        <button @click="addDigit(4)">4<span>GHI</span></button>
        <button @click="addDigit(5)">5<span>JKL</span></button>
        <button @click="addDigit(6)">6<span>MNO</span></button>
      </div>
      <div class="row">
        <button @click="addDigit(7)">7<span>PQRS</span></button>
        <button @click="addDigit(8)">8<span>TUV</span></button>
        <button @click="addDigit(9)">9<span>WXYZ</span></button>
      </div>
      <div class="row">
        <button @click="addDigit('*')">*</button>
        <button @click="addDigit(0)">0</button>
        <button @click="addDigit('#')">#</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      addDigit(digit) {
        // Emitir evento para adicionar o dígito ao número discado
        this.$emit('add-digit', digit);
      }
    }
  }
  </script>
  
  <style scoped>
  .dial-pad {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .row {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  
  button {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    margin: 0 5px;
  }
  
  button span {
    font-size: 0.6rem;
    display: block;
    margin-top: 5px;
  }
  </style>
  