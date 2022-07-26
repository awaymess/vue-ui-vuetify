<template>
  <div>
    <!-- <Sidebar /> -->
    <!-- <hello-world /> -->
    <SlideShow />
    <catalog-bar/>
    <slide-group/>
    <product-home />
  </div>
</template>

<script>
import CatalogBar from '../components/CatalogBar.vue';
import ProductHome from "../components/ProductHome.vue";
import SlideGroup from '../components/SlideGroup.vue';
// import HelloWorld from '../components/HelloWorld'
// import Sidebar from "../components/Sidebar";
import SlideShow from "../components/SlideShow";

export default {
  name: "HomeView",

  components: {
    // HelloWorld,
    // Sidebar,
    SlideShow,
    ProductHome,
    SlideGroup,
    CatalogBar,
  },
};
</script>
