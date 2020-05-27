<template>
  <div id='News'>
    <Header></Header>
    <v-container fill-height>
      <v-row align='center' justify='center'>
        <v-col>
          <v-img src='https://ik.imagekit.io/ugyodiq15/Group_35_iGcYmvx4nr.svg'></v-img>
        </v-col>
      </v-row>
    </v-container>
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
