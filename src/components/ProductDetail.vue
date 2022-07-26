<template>
  <v-container>
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
              max-width="200"
              height="300"
              cycle
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>

        <v-col cols="12" sm="7" xs="7">
          <v-form>
            <v-container class="mx-auto ml-2">
              <h3>
                เซรั่มช่วยผลัดเซลล์ผิว ลดสิวอุดตัน สว่างกระจ่างใส The Skin
                Collection Serum AHA10% + BHA2% 30ml
              </h3>
              <br />
              <h3 style="color: red">฿159</h3>
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
              <!-- <div class="text-center"> -->
              <v-btn rounded color="black" dark
                ><v-icon color="white"> mdi-cart</v-icon> add to cart
              </v-btn>
              <!-- </div> -->
            </v-container>
          </v-form>
        </v-col>
      </v-row>
      <!-- </v-responsive> -->
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
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
};
</script>

<style>
</style>