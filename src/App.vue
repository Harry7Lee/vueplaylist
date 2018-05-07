// can use branch in git to save each lesson's code
// update the setting sync extension and log the git token

<template>
 <div>
   <addBlog></addBlog>
 </div>
</template>

<script>
import addBlog from './components/addBlog.vue'

export default {
  components: {
    'addBlog': addBlog   
  }
};

</script>

<style>
body{
  margin:0;
}
</style>
