<template>
  <div id="app" class="form-application">

    <SideBar class="form-application__sidebar"/>
    <keep-alive>
      <router-view class="form-application__content"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import SideBar from './components/SideBar.vue'

  export default {
    name: 'app',
    components: {
      SideBar
    }
  }
</script>

<style lang="css">
  html, body, form {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .form-application {
    display: flex;
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    line-height: 1.4;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: darkcyan;
  }
  .form-application__sidebar, .form-application__content {
    border: 1px solid lightseagreen;
    border-radius: 8px;
    margin: 50px;
  }
  .form-application__sidebar {
    width: 30%;
  }
  .form-application__content {
    width: 70%;
    margin-left: 0;
    overflow: auto;
  }
</style>
