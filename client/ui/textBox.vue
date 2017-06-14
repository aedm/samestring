<template>
  <div>
    <button @click="copy()">Copy to clipboard</button>
    <div>
      <textarea v-model="message"></textarea>
    </div>
    <!--<p>Mongo: {{text}}</p>-->
    <button @click="logout()">Logout</button>
  </div>
</template>

<script>
  import copyToClipboard from 'copy-to-clipboard';

  export default {
    props: {
      text: String,
    },
    data() {
      return {
        message: this.text,
      };
    },
    methods: {
      logout() {
        Meteor.logout();
      },
      copy() {
        copyToClipboard(this.message);
      }
    },
    watch: {
      message(value) {
        if (this.text === value) return;
        Meteor.call("updateText", value);
      },
      text(value) {
        if (this.message === value) return;
        this.message = value;
      },
    },
  };
</script>

<style lang="css">
  button {
    padding: 10px;
    margin: 10px;
    font-size: 16px;
  }

  textarea {
    width: 100%;
    max-width: 100%;
    min-height: 200px;
    font-family: sans-serif;
    font-size: 16px;
    padding: 5px;
    box-sizing: border-box;
  }
</style>