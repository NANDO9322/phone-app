<template>
  <div id="app">
    <PhoneIcon />
    <PhoneDisplay :displayText="displayText" />
    <PhoneKeypad @keypressed="handleKeyPressed" />
    <router-view />
  </div>
</template>

<script>
import PhoneIcon from './components/PhoneIcon.vue';
import PhoneDisplay from './components/PhoneDisplay.vue';
import PhoneKeypad from './components/PhoneKeyPad.vue';

export default {
  name: 'App',
  components: {
    PhoneIcon,
    PhoneDisplay,
    PhoneKeypad
  },
  data() {
    return {
      displayText: '' // Implemente o estado para o texto do visor
    }
  },
  methods: {
    handleKeyPressed(key) {
      // Implemente a lógica para lidar com a tecla pressionada
      this.displayText += key;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
