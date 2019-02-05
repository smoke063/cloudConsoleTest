<template>
  <div class="side-bar">
    <router-link class="side-bar__button" active-class="side-bar__button_active" to="/logs">Logs</router-link>
    <router-link class="side-bar__button" active-class="side-bar__button_active" to="/data">Data</router-link>
    <router-link class="side-bar__button" active-class="side-bar__button_active" to="/addData">Add data</router-link>
  </div>
</template>

<script>
  export default {
    name: "SideBar"
  }
</script>

<style lang="css">
  .side-bar__button {
    padding: 20px;
    display: block;
    margin: auto;
    text-align: center;
    text-decoration: none;
    color: lightseagreen;
  }
  .side-bar__button:hover {
    background-color: aliceblue;
  }
  .side-bar__button_active, .side-bar__button_active:hover {
    color: white;
    background-color: dodgerblue;
  }
</style>
