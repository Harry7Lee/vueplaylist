<template>
<div>
    <h1>Please fill out our form</h1>
    <form action="www.baidu.com" method=post id="ninjaForm">
        <div id="form-header">
            <slot name="form-header"></slot>
        </div>
        <div id = "form-fields">
            <slot name="form-fields"></slot>       
        </div>
        <div id = "form-controls">
            <slot name="form-controls"></slot>
        </div>
        <div id = "useful-link">
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                <li><a href="#">Link 4</a></li>
            </ul>
        </div>
    </form>
</div>
</template>

<script>

export default {
  props: {
 
  },
  data() {
    return {
    };
  },
  created() {
    
    }
};
</script>



<style scoped>

</style>