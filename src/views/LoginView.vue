<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center" dense>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card>
            <v-card-title>Long Area</v-card-title>
            <v-card-text>
              <v-text-field
                label="Username"
                placeholder="Username"
                :rules="[rules.required]"
                filled
                rounded
                dense
              ></v-text-field>
              <v-text-field
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                counter
                filled
                rounded
                dense
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions>
              <v-btn class="mr-4" type="submit" :disabled="invalid">
                submit
              </v-btn>
              <v-btn color="success">Register</v-btn>
              <v-btn color="info">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  methods: {
    submit() {
      this.$refs.observer.validate();
    },
  },
};
</script>

<style></style>
