
// can use branch in git to save each lesson's code
// update the setting sync extension and log the git token

<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTtitle($event)"></app-header>
    <formHelper>
    <div slot="form-header">
      <h3>This is the title of the form</h3>
      <p>Information about the form</p>
    </div>
<div slot="form-fields">
  <input type="text" placeholder="username" required>
  <input type="text" placeholder="password" required>
</div>
<div slot="form-controls">
  <button @click="handleSubmit">Submit</button>
</div>
    </formHelper>
    <app-ninja v-bind:ninjas='ninjas'></app-ninja>
    <app-footer v-bind:title="title"></app-footer>
 
 <keep-alive>
  <component v-bind:is="component"></component>
 </keep-alive>
  <button @click="compoent='formHelper'">Show form one</button>
  <button @click="component='formHeader'">Show form two</button>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Ninjas from "./components/ninja.vue";
import formHelper from "./components/formHelper.vue"

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-ninja": Ninjas,
    'formHelper': formHelper
  },
  data() {
    return {
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false }
      ],
      title: "Vue Ninjas",
      component: 'formHelper'
    };
  },
  methods: {
    updateTtitle: function(updatedTitle) {
      this.title = updatedTitle;
    }, handleSubmit: function(){
      submit();
    }
  }
};
</script>

<style>

</style>