<template>
  <v-container >
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <tabs-cart />
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="12"
            md="12"
            lg="12"
          >
            <v-card style="border-radius: 20px">
              <!-- <v-responsive :aspect-ratio="16 / 9"> -->
              <v-row no-gutters align="center">
                <v-col cols="12" sm="5" xs="5">
                  <v-card
                    style="
                      border-radius: 20px;
                      margin-top: 20px;
                      margin-left: 20px;
                      margin-right: 20px;
                      margin-bottom: 20px;
                    "
                  >
                    <v-carousel
                      class="mx-auto"
                      max-width="100"
                      height="250"
                      cycle
                      hide-delimiter-background
                      show-arrows-on-hover
                    >
                      <v-carousel-item
                        v-for="(item1, i) in items1"
                        :key="i"
                        :src="item1.src"
                      ></v-carousel-item>
                    </v-carousel>
                  </v-card>
                </v-col>

                <v-col cols="12" sm="7" xs="7">
                  <v-form>
                    <v-container class="mx-auto ml-2">
                      <h3>
                        {{ item.name }}
                      </h3>
                      <br />
                      <h4 style="color: red">฿159</h4>
                      <p>
                        9999 pieces available <br />
                        Quantity
                      </p>

                      <v-row class="mb-6" no-gutters>
                        <v-col cols="6" sm="6" xs="6">
                          <v-text-field v-model="message2" filled rounded dense>
                            <template v-slot:prepend>
                              <v-btn fab small color="black" style="top: -8px">
                                <v-icon color="white"> mdi-minus </v-icon>
                              </v-btn>
                            </template>

                            <template v-slot:append-outer>
                              <v-btn fab small color="black" style="top: -9px">
                                <v-icon color="white"> mdi-plus</v-icon>
                              </v-btn>
                            </template>
                          </v-text-field>
                        </v-col>
                      </v-row>
                      <h3>Order Total : ฿50</h3>
                    </v-container>
                  </v-form>
                </v-col>
              </v-row>

              <!-- </v-responsive> -->
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="black--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="black"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span class="mr-4 black--text">
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="black darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="black darken-3" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import TabsCart from "../components/TabsCart.vue";
export default {
  components: { TabsCart },
  data() {
    return {
      itemsPerPageArray: [5, 10, 15],
      sortDesc: false,
      page: 1,
      itemsPerPage: 5,
      sortBy: "name",
      keys: ["Name", "Calories", "Fat"],
      items: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: "7%",
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: "0%",
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: "0%",
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: "0%",
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: "2%",
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: "12%",
          iron: "6%",
        },
      ],
      items1: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
      ],
      message2: "1",
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>

<style>
</style>