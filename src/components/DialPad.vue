<template>
  <div>
    <button class="button-topper" @click="alterVisible">OI</button>

    <div v-if="visible" class="telefone-topper">
      esse componente vai alterar
    </div>
  </div>

  <!-- <div class="dial-pad">
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
    </div> -->
</template>

<script>
export default {
  // name: 'DialPad',

  data() {
    return {
      visible: false
    }
  },

  methods: {
    addDigit(digit) {
      // Emitir evento para adicionar o dígito ao número discado
      this.$emit('add-digit', digit);
    },

    alterVisible() {
      this.visible = !this.visible;
      console.log(this.visible)
    }
  }
}
</script>

<style scoped>
.button-topper {
  position: fixed;
  bottom: 1vh;
  right: 1vw;
  border: none;
  background: linear-gradient(90deg, #0096FF 0%, #0077CA 100%);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  transition: background-color 0.3s ease, opacity 0.5s ease;
  font-size: 1.5vw;

  &:hover {
    opacity: 0.3;
  }
}

.telefone-topper {
  position: fixed;
  bottom: 100px;
  right: 20px;
  padding: 15px;
  width: 400px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #6390d9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  z-index: 77777;
} 

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