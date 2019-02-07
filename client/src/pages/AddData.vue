<template>
  <div class="form-add-data">
    <input class="form-add-data__input" type="text" v-model="title" placeholder="Title" />
    <textarea class="form-add-data__textarea" v-model="text" placeholder="Text"></textarea>
    <button class="form-add-data__button" v-bind:disabled="disabled" type="button" v-on:click="addData">Add</button>
  </div>
</template>

<script>
  import { postEntry, postLog } from '../api/api'

  export default {
    name: 'AddData',
    data: function () {
      return {
        title: '',
        text: ''
      }
    },
    mounted() {
      this.postLog()
    },
    computed: {
      disabled() {
        return !this.text || !this.title
      }
    },
    methods: {
      postLog() {
        postLog({ eventTime: +new Date(), eventType: 'login' }).catch((error) => alert(error))
      },
      addData() {
        const vm = this;
        postEntry({
          entry: {
            title: this.title,
            text: this.text
          }
        })
          .then(() => {
            vm.title = ''
            vm.text = ''
          })
          .catch((error) => alert(error))
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
    height: 200px;
    resize: none;
  }
  .form-add-data__button {
    width: 100px;
    align-self: center;
  }
</style>
