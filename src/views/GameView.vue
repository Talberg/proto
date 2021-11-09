<template>
<div class="container" ></div>
  <div class='row'  >
    <h1>{{ $route.params.id }}</h1>
 <CharacterSheet msg="test" /> 
 <TextLog msg="Welcome to Your Vue.js App"/>
 <PartyCards msg=""/>
  </div>

  
 
 
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CharacterSheet from '../components/CharacterSheet.vue'
import TextLog from '../components/TextLog.vue'
import PartyCards from '../components/PartyCards.vue'
let test ="test"
console.log(test)
console.log(process.env.TEST)

export default {
  name: 'App',
  components: {
    // HelloWorld,
    CharacterSheet,
    TextLog,
    PartyCards
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body {
  height: 100%;
}
.col{
    width: 33%;
    height: 100%;
    padding-bottom: .1%;
    background-color: black;
}


</style>
