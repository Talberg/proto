<template>
<div class="container" ></div>
  <div class='row'  >
    <div id="charTitle" >title</div>
    <h1 >{{ $route.params.id }}{{help}}</h1>
 <CharacterSheet obj={{}} msg='{{ $route.params.id }}' /> 
 <TextLog msg="Welcome to Your Vue.js App"/>
 <PartyCards msg=""/>
  </div>

  
 
 
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CharacterSheet from '../components/CharacterSheet.vue'
import TextLog from '../components/TextLog.vue'
import PartyCards from '../components/PartyCards.vue'
// let apiTOKEN = process.env.VUE_APP_ALCEMER_TOKEN
// let apiKEY = process.env.VUE_APP_ALCHEMER_KEY
let url= document.URL
let urlSplit= url.split('/')
let id = urlSplit[(urlSplit.length-1)]

console.log(id)
console.log(url)
console.log(urlSplit)
let characterSheet = `<CharacterSheet msg='${id}' /> `
let title= document.getElementById('#charTitle')
console.log(characterSheet)
setInterval(console.log(title),10)




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
