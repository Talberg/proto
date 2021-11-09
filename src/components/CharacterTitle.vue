<template>

    <div class="row">
        <div class="col">
            <h1 class="characterTitle">{{ msg }}</h1>
        </div>
        
      
    </div>


</template>

<script>
export default {
  name: 'CharacterTitle',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.characterTitle{
    background-color: chartreuse;
}

</style>
