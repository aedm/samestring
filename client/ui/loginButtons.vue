<template>
  <div>
    <button @click="login()">Login with Facebook</button>
  </div>
</template>

<script>
  import {Helpers} from "/client/helpers.js";

  export default {
    methods: {
      login() {
        Helpers.facebookLogin();
      }
    }
  }
</script>
