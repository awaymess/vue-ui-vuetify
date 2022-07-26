<template>
  <nav class="overflow-hidden" >
    <v-app-bar
      absolute
      color="gray lighten-1"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-8"
      style="border-radius: 0px 0px 20px 20px"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <!-- <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      style="border-radius: 20px"
    >
      <v-list nav dense rounded>
        <v-list-item-group
          
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/men/78.jpg"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <br />

          <v-list-item link :to="{ path: '/' }">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <!-- <router-link to="/cart"> -->
          <v-list-item link :to="{ path: '/cart' }">
            <v-list-item-icon>
              <v-icon>mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cart</v-list-item-title>
          </v-list-item>

          <v-list-item link :to="{ path: '/help' }">
            <v-list-item-icon>
              <v-icon>mdi-help</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Help</v-list-item-title>
          </v-list-item>

          <v-list-item link :to="{ path: '/about' }">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <!-- <template v-slot:append> -->
      <div class="pa-2">
        <v-btn
          block
          style="background-color: black; color: white; border-radius: 20px"
        >
          Logout
        </v-btn>
      </div>
      <!-- </template> -->
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  data: () => ({
    drawer: false,
  }),
};
</script>

<style>
</style>