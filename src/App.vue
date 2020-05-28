<template>
  <v-app>
    <Header class="navigation">
      </Header>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.navigation{
  position: sticky;
  z-index: 10;
}
</style>
