<template>
  <div id="app">
    <!-- <PhoneIcon />
    <PhoneDisplay :displayText="displayText" />
    <PhoneKeypad @keypressed="handleKeyPressed" /> -->
    <router-view />
  </div>
</template>

<script>
import Inicial from './components/Inicial.vue';
export default {
  name: 'App',
  components: {
    Inicial,
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
