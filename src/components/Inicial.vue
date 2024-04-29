<template>
  <div class="phone-container">
    <button class="button-topper" @click="alterVisible">
      <img :src="iconPath" alt="" />
    </button>
    <div
      v-if="visible"
      :class="{
        'telefone-topper': true,
        'calling-state':
          stateCall === 'calling' ||
          stateCall === 'inCall' ||
          stateCall === 'receiving',
      }"
      style="
        height: 55vh;
        width: 30vh;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
        <div class="dial-input">
          <div class="input-container, column" style="margin-bottom: 3vh;">
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
          style="background-color: white; width: 30vh; height: 30vh; padding-top: 2vh;"
        >
          <div class="row" style=" width: 25vh; margin-left: 1.5vh">
            <button @click="addDigit(1)" class="circular-button">1</button>
            <button @click="addDigit(2)" class="circular-button">
              2<span></span>
            </button>
            <button @click="addDigit(3)" class="circular-button">
              3<span></span>
            </button>
          </div>
          <div class="row" style=" width: 25vh; margin-left: 1.5vh">
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
          <div class="row" style=" width: 25vh; margin-left: 1.5vh">
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
          <div class="row" style=" width: 25vh; margin-left: 1.5vh">
            <button
              @click="addDigit('*')"
              style="border: none; ;"
              class="circular-button"
            >
              *
            </button>
            <button @click="addDigit(0)" class="circular-button">0</button>
            <button
              @click="addDigit('#')"
              style="border: none;"
              class="circular-button"
            >
              #
            </button>
          </div>
          <div class="actions, row" style="width: 25vh; margin-left: 8.5vh; margin-top: -.5vh; ">
            <button
              @click="ligar"
              class="ligar-button"
              
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
        <div class="row, row1" style="margin-top: 3vh;">
          <div>
            <img src="../assets/icons/historico.svg" alt="">
            <span>Histórico</span>
          </div>
          <div>
            <img src="../assets/icons/contatos.svg" alt="">
            <span>Contatos</span>
          </div>
          <div>
            <img src="../assets/icons/dial.png" alt="">
            <span>Discar</span>
          </div>
        </div>
      </div>

      <div
        v-if="stateCall === 'calling'"
        style="
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        "
      >
        <div class="dial-input" style="">
          <div
            class="input-container, column"
            style="margin-bottom: 3vh; font-size: 2vh"
          >
            <span style="color: white; margin-bottom: 10px">LIGANDO</span>
          </div>
          <div @click="recebendo">
            <div class="efeito">
              <div class="efeito__container">
                <div class="efeito__container__inside">
                  <img src="../assets/icons/ligar.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div style="margin-top: 3vh; font-size: 2.5vh">
            <span style="color: white">Marcos</span>
          </div>
          <div>
            <button
              @click="desligar"
              style="
                display: flex;
                justify-content: center;
                text-align: center;
                align-items: center;
                background-color: red;
                border-radius: 3vh;
                width: 100%;
                gap: 15px;
                font-weight: bolder;
              "
            >
              <img
                src="../assets/icons/recusar.svg"
                style="height: 4vh; width: 4vh"
              />
              <span style="color: white">CANCELAR</span>
            </button>
          </div>
        </div>
      </div>

      <div v-if="stateCall === 'receiving'">
        <div class="dial-input" style="">
          <div
            class="input-container, column"
            style="margin-bottom: 3vh; font-size: 2vh"
          >
            <span style="color: white; margin-bottom: 10px"
              >Chamada recebida</span
            >
          </div>
          <div
            style="display: flex; align-items: center; justify-content: center"
          >
            <div class="efeito">
              <div class="efeito__container">
                <div class="efeito__container__inside">
                  <img src="../assets/icons/ligar.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div style="margin-top: 3vh; font-size: 2.5vh">
            <span style="color: white">Marcos</span>
          </div>

          <div
            style="
              display: flex;
              flex-direction: column;
              gap: 15px;
              align-items: center;
            "
          >
            <button
              @click="atender"
              style="
                width: 100%;
                border: none;
                font-size: 25px;
                padding: 10px;
                display: flex;
                justify-content: center;
                text-align: center;
                align-items: center;
                background-color: green;
                border-radius: 3vh;
                gap: 15px;
              "
            >
              <img src="../assets/icons/ligar.svg" alt="" />
              <span style="font-weight: bolder; color: #ffffff">ATENDER</span>
            </button>

            <button
              @click="desligar"
              style="
                width: 75%;
                border: none;
                display: flex;
                justify-content: center;
                text-align: center;
                align-items: center;
                background-color: red;
                border-radius: 3vh;
                gap: 15px;
              "
            >
              <img
                src="../assets/icons/recusar.svg"
                style="height: 4vh; width: 4vh"
              />
              <span style="font-weight: bolder; color: #ffffff">REJEITAR</span>
            </button>
          </div>
        </div>
      </div>

      <div
        v-if="stateCall === 'inCall'"
        style="color: white"
        class="column, input-container"
      >
        <div
          class="input-container"
          style="
            height: 55vh;
            width: 30vh;
            border-radius: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
          "
        >
          <div class="column" style="margin-bottom: 10vh">
            <h1>Marcos</h1>
            <span>Chamada em andamento</span>
            <div class="row" style="margin-top: 20px">
              <span style="color: white">{{ tempoDecorrido }}</span>
            </div>
          </div>
          <div class="row" style="margin-bottom: 6vh">
            <div class="column" style="align-items: center; margin-right: 1vh;">
              <img
                src="../assets/icons/mute.svg"
                alt=""
                style="width: 30px; height: 30px"
              />
              <span>silenciar</span>
            </div>
            <div class="column" style="align-items: center; margin-right: 1vh;">
              <img
                src="../assets/icons/pausa.svg"
                alt=""
                style="width: 30px; height: 30px"
              />
              <span>pausar</span>
            </div>
            <div class="column">
              <img
                src="../assets/icons/dial.png"
                alt=""
                style="width: 30px; height: 30px"
              />
              <span>teclado</span>
            </div>
          </div>

          <button @click="desligar" class="my-button" style="
                display: flex;
                justify-content: center;
                text-align: center;
                align-items: center;
                background-color: red;
                border-radius: 3vh;
                width: 100%;
                gap: 15px;
                font-weight: bolder;
              ">
            <img
              src="../assets/icons/recusar.svg"
              style="height: 4vh; width: 4vh"
            />
            <span>DESLIGAR</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numeroDiscado: "",
      visible: false,
      stateCall: "initial",
      closedIcon: "../src/assets/icons/primeiro-estado.svg",
      openIcon: "../src/assets/icons/X.svg",
      iconPath: "../src/assets/icons/primeiro-estado.svg",
      tempoDecorrido: "00:00:00", 
      cronometro: null, 
      startTime: null, 
    };
  },
  methods: {
    addDigit(digit) {
      
      this.numeroDiscado += digit.toString();
    },
    limpar() {
      
      this.numeroDiscado = "";
    },
    alterVisible() {
      this.visible = !this.visible;
      this.iconPath = this.visible ? this.openIcon : this.closedIcon; 

      if (this.visible) {
        this.stateCall = "initial";
        this.numeroDiscado = "";
      }
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
    
    iniciarCronometro() {
      this.startTime = Date.now();
      this.cronometro = setInterval(() => {
        const elapsedTime = Date.now() - this.startTime;
        this.tempoDecorrido = this.formatarTempo(elapsedTime);
      }, 1000);
    },


    pausarCronometro() {
      clearInterval(this.cronometro);
    },

    
    reiniciarCronometro() {
      clearInterval(this.cronometro);
      this.tempoDecorrido = "00:00:00";
    },

   
    formatarTempo(milissegundos) {
      const segundos = Math.floor(milissegundos / 1000);
      const horas = Math.floor(segundos / 3600);
      const minutos = Math.floor((segundos % 3600) / 60);
      const seg = segundos % 60;
      return `${this.padZero(horas)}:${this.padZero(minutos)}:${this.padZero(
        seg
      )}`;
    },

    
    padZero(num) {
      return (num < 10 ? "0" : "") + num;
    },
  },
  watch: {
    stateCall(newValue) {
      if (newValue === "inCall") {
        this.iniciarCronometro();
      } else {
        this.pausarCronometro();
      }
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

.row1 {
    display: flex;
    justify-content: space-between;
    margin-top: 3vh;
    margin-right: vh;
  }
  .row1 div {
    text-align: center;
    flex-grow: 1;
  }
  .row1 img {
    width: 35px; 
    height: 5vh;
    margin-bottom: 5px; 
    margin-right: 2vh;
  }
  .row1 span {
    font-size: 14px; 
    display: block;
    margin-right: 1vh;

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
  width: 35px;
  height: 35px;
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
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.ligar-button i {
  color: white;

}

.calling-state {
  background-color: #151616;
}

.my-button {
  background-color: red;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.fas {
  color: white;
  margin-right: 5px;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}

.efeito__container__inside {
  width: 100px;
  height: 100px;
  animation: efeito-inside 3s infinite linear;
}

.efeito__container {
  width: 150px;
  height: 150px;
  animation: efeito-container 3s infinite linear;
  animation-delay: -1s;
}

.efeito {
  width: 200px;
  height: 200px;
  animation: efeito 3s infinite linear;
  animation-delay: -2s;
}

.efeito,
.efeito__container,
.efeito__container__inside {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.phone-container {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #6390d9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 100%;
  height: auto;
}

@keyframes efeito-inside {
  0% {
    border-width: 2px;
    box-shadow: 0 0 0 2px rgba(0, 200, 170, 0.5);
  }

  50% {
    border-width: 2px;
    box-shadow: 0 0 0 2px rgba(0, 200, 170, 0.5);
  }

  100% {
    border-width: 2px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

@keyframes efeito-container {
  0% {
    border-width: 2px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }

  50% {
    border-width: 2px;
    box-shadow: 0 0 0 2px rgba(0, 200, 170, 0.5);
  }

  100% {
    border-width: 2px;
    box-shadow: 0 0 0 2px rgba(0, 200, 170, 0.5);
  }
}

@keyframes efeito {
  0% {
    border-width: 2px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }

  50% {
    border-width: 2px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }

  100% {
    border-width: 2px;
    box-shadow: 0 0 0 2px rgba(0, 200, 170, 0.5);
  }
}
</style>
