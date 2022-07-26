<template>
  <v-tabs
  v-model="tab"
      background-color="#FFFFF"
      color="black"
      grow
      class="mb-2"
      style="border-radius: 20px 20px 0px 0px">
    <v-tab link :to="{ path: '/cart/111' }">Cart</v-tab>
    <v-tab link :to="{ path: '/shipping/111' }">To Ship</v-tab>
    <v-tab link :to="{ path: '/devivered/111' }">Completed</v-tab>
  </v-tabs>
</template>
<script>
  export default {
  }
</script>
