<template>
  <v-container>
    <!-- <v-row no-gutters>
        <v-col cols="12" sm="12" md="12">
          <v-col sm="6" md="4">
            <v-card class="pa-2" outlined tile> .col-md-6 .offset-md-3 </v-card>
          </v-col>
        </v-col>
      </v-row> -->
      <h3>DAILY DISCOVER</h3>

    <v-row>
      <v-col v-for="n in 10" :key="n" cols="12" sm="6" md="4">
        <v-card style="border-radius: 20px" class="mx-auto" max-width="95%">
          <v-img
            style="border-radius: 20px"
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title>Cafe Badilico</v-card-title>
          <v-card-text>
            <div class="text-subtitle-1">฿ 1000</div>
            <p class="text-subtitle-2">Amount : 10 ชิ้น</p>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="deep-purple lighten-2" rounded text @click="reserve" >
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>