<template>
  <div class="app">
    <!--<p>user: {{user}}</p>-->
    <TextBox v-if="user" v-bind:text="text"/>
    <LoginButtons v-else/>
  </div>
</template>


<script>
  import Containers from './containers.vue';
  import Test from './Test.vue';
  import LoginButtons from './loginButtons.vue';
  import TextBox from "./textBox.vue";

  export default {
    data() {
      return {
        buttonLabel: 'Click me!',
        count: 0,
        user: null,
      }
    },
    meteor: {
      subscribe: {
        "pub/text": [],
      },
      data: {
        user() {
          return Meteor.user();
        },
        text() {
          let doc = Texts.findOne();
          return !!doc ? doc.text : "";
        },
      }
    },
    components: {
      Containers,
      Test,
      LoginButtons,
      TextBox,
    },
    metaInfo: {
      title: 'Textbox',
    },
  };
</script>


<style lang="css">
  body {
    margin: 30px;
  }

  .app {
    text-align: center;
    max-width: 768px;
    margin: 0 auto;
  }

  a {
    color: #40b883;
    text-decoration: none;
  }

  h1, h2 {
    font-weight: normal;
  }
</style>
