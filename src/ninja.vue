<template>
  <div>
￼     <h1>List of Ninjas</h1>
    <li v-for='ninja in ninjas'>{{ninja}}</li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ["Finn", "Tyrel", "Clementine", "Elwyn"]
    };
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>