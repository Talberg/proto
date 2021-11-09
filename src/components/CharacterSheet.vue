<template>
<div class='col'  >
  <h1>{{ msg }}</h1>
    <CharacterTitle />
    <StatBlock/>
  </div>

</template>

<script>
import CharacterTitle from './CharacterTitle.vue'
import StatBlock from './StatBlock.vue'
export default {
  name: 'CharacterSheet',
  props: {
    msg: String
  },
   components: {
    // HelloWorld,
    CharacterTitle,
    StatBlock
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
    height: 100vh;
    background-color: black;
}


</style>
