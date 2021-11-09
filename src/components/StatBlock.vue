<template>

    <div class="row">
        
   
         
        <StatBox/>
      
    </div>


</template>

<script>
import StatBox from './StatBox.vue'
export default {
  name: 'CharacterTitle',
  props: {
    msg: String
  },
   components: {
       StatBox
   }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.characterTitle{
    background-color: chartreuse;
}

</style>
