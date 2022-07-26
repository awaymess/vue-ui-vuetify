<template>
  <v-app>
      <sidebar ></sidebar>
      <v-card class="mt-16 mx-auto"> </v-card>
      <!-- <div :style="image" class="image"></div> -->

      <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->

      <v-main>
        <router-view />
      </v-main>
      <v-footer padless>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>Dev</strong>
        </v-col>
      </v-footer>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  components: { Sidebar },
  name: "App",
  // data() {
  //   return {
  //     image: "img/icons/apple-touch-icon-180x180.png",
  //   };
  // },
  data() {
    return {
      image: {
        backgroundImage:
          "url(https://img.freepik.com/free-vector/gradient-pastel-sky-background_23-2148917404.jpg?w=1060&t=st=1658482311~exp=1658482911~hmac=b145f52c942ccf20b338a3cac1dfb721004bd317909e7b27816189b8a52386da)",
      },
    };
  },
};
</script>

<style>
.image {
  height: 1000px;
  background-repeat: no-repeat;
}
/* @keyframes color {
  0%   { background: #ddfff9; }
  20%  { background: #c8faf2; }
  40%  { background: #d9dbfc; }
  60%  { background: #ddddff; }
  80%  { background: #ddf6ff; }
  100% { background: #ddfff9; }
} */

#app {
  height: 100%;
  /* background: #ddfff9;  */
  background: #eeeeee; 
  /* animation: color 9s infinite linear; */
  /* text-align: center; */
  /* padding: 2em; */
}
</style>