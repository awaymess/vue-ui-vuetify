<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item._id">
          <td>{{ item.product_name }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    const apiURL = "http://localhost:3000/products";
    axios
      .get(apiURL)
      .then((res) => {
        this.products = res.data.data;
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    // deleteStudent(id) {
    //     let apiURL = `http://localhost:4000/api/delete-student/${id}`;
    //     let indexOfArrayItem = this.Students.findIndex(i => i._id === id);
    //     if (window.confirm("Do you really want to delete?")) {
    //         axios.delete(apiURL).then(() => {
    //             this.Students.splice(indexOfArrayItem, 1)
    //         }).catch(error => {
    //             console.log(error)
    //         })
    //     }
    // }
  },
};
</script>