<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <counter />
    <counterSquared />
    <buttons />
    <colorCode />
  </div>
</template>

<script>

import counter from '../components/Counter'
import counterSquared from '../components/CounterSquared'
import buttons from '../components/Buttons'
import colorCode from '../components/ColorCode'

export default {
  name: 'Home',
  components: {
    counter,
    counterSquared,
    buttons,
    colorCode
  }
}
</script>

<style>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 80px;
}
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>