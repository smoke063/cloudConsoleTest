<template>
  <div class="form-logs">
    <table class="form-logs__table">
      <thead>
      <tr class="form-logs__tr">
        <td>Event type</td>
        <td>Event time</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="log in logs" :key="log.id">
        <td>{{log.eventType}}</td>
        <td>{{log.eventTime}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { getLogs, socket } from '../api/api'

  export default {
    name: "Logs",
    data: function () {
      return {
        logs:[]
      }
    },
    mounted() {
      this.fetchLogs()
      socket.on('logAdded', this.pushData)
    },
    beforeDestroy() {
      socket.off('logAdded', this.pushData)
    },
    methods: {
      pushData({ eventTime, eventType }){
        this.logs.push( {
          id: eventTime + '',
          eventTime: new Date(eventTime).toLocaleString(),
          eventType: eventType
        })
      },
      fetchLogs() {
        const vm = this
        getLogs()
          .then(({ data }) => {
            vm.logs = Object.keys(data || []).map(function (key) {
              return {
                id: key,
                eventTime: new Date(+key).toLocaleString(),
                eventType: data[key]
              }
            })
          })
          .catch((error) => alert(error))
      }
    }
  }
</script>

<style>
  .form-logs {
    padding: 50px;
  }
  .form-logs__table {
    width: 100%;
    border: 1px solid dodgerblue;
    text-align: center;
  }
</style>
