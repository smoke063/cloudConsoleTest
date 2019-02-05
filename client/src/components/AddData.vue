<template>
  <div class="form-add-data">
    <input class="form-add-data__input" type="text" v-model="title" placeholder="Title" />
    <textarea class="form-add-data__textarea" v-model="text" placeholder="Text"></textarea>
    <button class="form-add-data__button" type="button" v-on:click="addData">Add</button>
  </div>
</template>

<script>
import axios from 'axios'

var port = 3000
axios.defaults.baseURL = location.protocol + '//' + location.hostname + ':' + port

export default {
  name: 'AddData',
  data: function () {
    return {
      title: '',
      text: ''
    }
  },
  methods: {
    addData() {
      axios.post('/api/data', {
        title: this.title,
        text: this.text
      }).then(function () {
        this.title = ''
        this.text = ''
      }).catch(function (error) {
        console.log(error);
      })
    }
  }
}
</script>

<style lang="css">
  .form-add-data {
    display: flex;
    flex-direction: column;
  }
  .form-add-data__input, .form-add-data__textarea {
    padding: 5px;
    margin: 20px;
  }
  .form-add-data__textarea {
    margin: 20px;
  }
</style>
