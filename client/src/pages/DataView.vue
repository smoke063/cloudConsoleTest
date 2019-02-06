<template>
  <div class="form-data-view">
    <table class="form-data-view__table">
      <thead>
      <tr class="form-data-view__tr">
        <td>Title</td>
        <td>Text</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="entry in entries">
        <td>{{entry.title}}</td>
        <td>{{entry.text}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { getData } from '../api/api'
  import io from 'socket.io-client'

  const socket = io.connect('http://localhost:3000')//io(location.protocol + '//' + location.hostname + ':' + 3000)

  export default {
    name: "Logs",
    data: function () {
      return {
        entries:[]
      }
    },
    mounted() {
      this.fetchData()

      socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
      })
    },
    methods: {
      fetchData() {
        const vm = this
        getData()
          .then(({data = []}) => {
            vm.entries = data
          })
          .catch((error) => alert(error))
      }
    }
  }
</script>

<style>
  .form-data-view {
    padding: 50px;
  }
  .form-data-view__table {
    width: 100%;
    border: 1px solid dodgerblue;
    text-align: center;
  }
</style>
