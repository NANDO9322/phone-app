<template>
  <div>
    <button class="button-topper" @click="alterVisible">
      <img src="../assets/icons/X.svg" alt="" />
    </button>
    <button @click="recebendo">Recebendo ligacao</button>

    <div
      v-if="visible"
      class="telefone-topper"
      style="
        height: 55vh;
        width: 30vh;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #0494fc;
      "
    >
      <div
        v-if="stateCall === 'initial'"
        style="
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        "
      >
        <div class="dial-input" style="">
          <div class="input-container, column" style="margin-bottom: 3vh">
            <span style="color: white; margin-bottom: 10px"
              >DISQUE POR AQUI</span
            >
            <input
              class="box"
              type="text"
              v-model="numeroDiscado"
              style="height: 3vh; width: 25vh"
            />
          </div>
        </div>
        <div
          class="dial-pad"
          style="background-color: white; width: 30vh; padding-top: 2vh"
        >
          <div class="row">
            <button @click="addDigit(1)" class="circular-button">1</button>
            <button @click="addDigit(2)" class="circular-button">
              2<span></span>
            </button>
            <button @click="addDigit(3)" class="circular-button">
              3<span></span>
            </button>
          </div>
          <div class="row">
            <button @click="addDigit(4)" class="circular-button">
              4<span></span>
            </button>
            <button @click="addDigit(5)" class="circular-button">
              5<span></span>
            </button>
            <button @click="addDigit(6)" class="circular-button">
              6<span></span>
            </button>
          </div>
          <div class="row">
            <button @click="addDigit(7)" class="circular-button">
              7<span></span>
            </button>
            <button @click="addDigit(8)" class="circular-button">
              8<span></span>
            </button>
            <button @click="addDigit(9)" class="circular-button">
              9<span></span>
            </button>
          </div>
          <div class="row">
            <button
              @click="addDigit('*')"
              style="border: none"
              class="circular-button"
            >
              *
            </button>
            <button @click="addDigit(0)" class="circular-button">0</button>
            <button
              @click="addDigit('#')"
              style="border: none"
              class="circular-button"
            >
              #
            </button>
          </div>
          <div class="actions, row">
            <button
              @click="ligar"
              class="ligar-button"
              style="margin-left: 6vh"
            >
              <img src="../assets/icons/ligar.svg" alt="" />
            </button>
            <button
              @click="limpar"
              style="background-color: white; border: none; margin-left: 2vh"
            >
              <img src="../assets/icons/apagar.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      <div v-if="stateCall === 'calling'">
        <span>ligando</span>
        <button @click="desligar">cancelar</button>
        <button @click="atender">atendeu</button>
      </div>

      <div v-if="stateCall === 'inCall'">
        <span>durante</span>
        <button @click="desligar">desligar</button>
      </div>

      <div v-if="stateCall === 'receiving'">
        <span>recebendo</span>
        <button @click="atender">atender</button>
        <button @click="desligar">cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      numeroDiscado: "",
      visible: true,
      stateCall: "initial", // initial, calling, inCall, receiving
    };
  },
  methods: {
    addDigit(digit) {
      // Adiciona o dígito ao número discado
      this.numeroDiscado += digit.toString();
    },
    limpar() {
      // Limpa o número digitado
      this.numeroDiscado = "";
    },
    alterVisible() {
      this.visible = !this.visible;
      console.log(this.visible);
    },
    recebendo() {
      this.stateCall = "receiving";
    },
    ligar() {
      this.stateCall = "calling";
    },
    desligar() {
      this.stateCall = "initial";
    },
    atender() {
      this.stateCall = "inCall";
    },
    rejeitar() {
      this.stateCall = "initial";
    },
  },
};
</script>

<style scoped>
.button-topper {
  position: fixed;
  bottom: 1vh;
  right: 1vw;
  border: none;
  background: linear-gradient(90deg, #0096ff 0%, #0077ca 100%);
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
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box {
  width: 300px;
  height: 100px;
  background-color: white;
  border-radius: 30px;
  border-color: white;
}

.circular-button {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 5px;
  margin-right: 20px;
  background-color: white;
  border-color: #9ecad2;
  border-style: double;
  border-width: 1px;
}

.circular-button span {
  font-size: 0.6rem;
  display: block;
  margin-top: 5px;
}

.input-container {
  margin-bottom: 10px;
}
.actions {
  margin-top: 10px;
}
.actions button {
  margin-right: 10px;
}

.ligar-button {
  background-color: #28b73c;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.ligar-button i {
  color: white; /* Cor do ícone */
}
</style>
