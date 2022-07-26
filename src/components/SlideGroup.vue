<template>
  <v-container >
    <h3>PROMOTION</h3>
    <v-sheet class="mx-auto" elevation="5" style="border-radius: 20px" cycle >
      <v-slide-group v-model="model" class="pa-2" center-active show-arrows>
        <v-slide-item v-for="n in 6" :key="n" v-slot="{ toggle }">
          <v-card
            :color="'gray lighten-1'"
            class="ma-1"
            height="200"
            width="370"
            @click="toggle"
            style="border-radius: 20px" 
          >
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "SlideGroup",
  data: () => ({
    model: null,
  }),
};
</script>

<style>
</style>