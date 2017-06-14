<template>
<div class="test">
  <h1>test {{ message }}</h1>
  <input v-model="message" />
</div>
</template>

<script>
export default {
  data: () => ({
    message: 'hello world',
  }),
}
</script>
