<template>
  <div class="chat">
    <h2>Containers</h2>

    <div v-if="!$subReady.containers">Loading...</div>

    <div class="message" v-for="container in containers">
      <span>{{ container.image }} ({{ container.state }})</span>
      <!--<button @click="removeMessage(container._id)">x</button>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'chat',
    data () {
      return {
        newMessage: '',
        messages: [],
      }
    },
    meteor: {
      subscribe() {
        return {
          containers: [],

        };
      },
      containers() {
        return Containers.find({}, {
          sort: {imageid: 1},
        });
      },
    },
    methods: {
      sendMessage() {
        Meteor.call('addMessage', this.newMessage);
        this.newMessage = '';
      },
      removeMessage(_id) {
        Meteor.call('removeMessage', _id);
      },
    },
  };
</script>

<style scoped>
  .chat {
    max-width: 300px;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 6px 12px;
    border: solid 1px #ccc;
    border-radius: 3px;
    margin-bottom: 4px;
  }

  .message {
    margin: 4px 2px;
    display: flex;
    flex-direction: row;
  }

  .message .content {
    flex: auto 1 1;
  }
</style>
