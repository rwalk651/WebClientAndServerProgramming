<template>
  <div id="app">

    <h1>Would you rather?</h1>

    <would-you-rather
      v-bind:question="wyrQuestion"
      v-bind:answer1="wyrAnswer1"
      v-bind:answer2="wyrAnswer2"
      v-on:answer-changed="answerChanged"

    >
    </would-you-rather>

  </div>
</template>

<script>
import WouldYouRather from './components/WouldYouRather.vue'

export default {
  name: 'App',
  components: {
    WouldYouRather
  },
  data() {
    return {
      wyrQuestion: 'Would you rather be the author of a popular book or a musician in a band who released a popular album?',
      wyrAnswer1: 'Author',
      wyrAnswer2: 'Musician',
      userSelectionMessage: ''
    }
  },
  methods: {
    answerChanged(choice) {
      this.userSelectionMessage = `Thanks you chose ${choice}`
    }
  }
}
</script>

<style>

body {
  background-color: coral;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: cornflowerblue;
}
</style>
