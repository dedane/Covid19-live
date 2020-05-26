<template>
  <div id='test'>
    <Header></Header>
      <v-stepper v-model="el">
       <v-stepper-header>
        <v-stepper-step :complete="el > 1" step="1">1 of 10</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="el > 1" step="2">2 of 10</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="el > 1" step="3">3 of 10</v-stepper-step>
        <v-divider/>
       </v-stepper-header>
       <v-stepper-items>
         <v-stepper-content step="1">
           <v-card
            class="mb-12"
            height="200px">
            <v-card-title>
              Have you experinced the following<br>
              symptoms?
            </v-card-title>
            <v-img src="">
            </v-img>
            <v-card-subtitle>
            </v-card-subtitle>
           </v-card>
         </v-stepper-content>
      </v-stepper-items>
      </v-stepper>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {
      el: 1,
    }
  },
  components: {
    Header,
    Footer,
  },

};
</script>

<style>

</style>
