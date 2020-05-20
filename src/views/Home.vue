<template>
  <div id='home'>
    <Header></Header>
    <v-content>
      <v-col>
        <v-row>
          <v-col>
          </v-col>
          <v-col>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          </v-col>
          <v-col>
          </v-col>
        </v-row>
      </v-col>
    </v-content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },

};
</script>

<style>

</style>
