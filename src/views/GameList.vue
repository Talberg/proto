<template>
<div class="container" >
<div class='col'  >
  This is where all the games will be listed 
  </div></div>
</template>

<script>
export default {
  name: 'TextLog',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body {
  height: 100%;
}
.gameListContainer{
    
    
    width: 100%;
    height: 100vh;
    background-color: rgb(219, 21, 21);
}

</style>
