<template>
  <div id='home'>
    <Header></Header>
    <v-content>
      <v-col>
        <v-row>
          <v-col>
            <v-card flat>
              <v-card-title color="#9a2222">
                COVID-19 Alert
              </v-card-title>
              <v-card-text>
                Covid-19 might as well be the biggest menace the world has
                had since the bubonic flu. with no specific medicine to prevent
                or treat Coronavirus Disease.
              </v-card-text>
              <v-card-actions>
                <v-btn rounded color="#9a2222" dark>
                  Learn More
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col>
           <!--  <v-card flat> -->
               <v-img src="https://ik.imagekit.io/ugyodiq15/keep-social-distance-2347821-1_LIKCr0Cc1qn.svg"></v-img>
            <!-- </v-card> -->
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card flat>
               <v-img src="https://ik.imagekit.io/ugyodiq15/virus-spread-in-world_upxyueLAmg7.svg"></v-img>
            </v-card>
          </v-col>
          <v-col>
            <v-card flat>
              <v-card-title color="#9a2222">
                What is Covid19
              </v-card-title>
              <v-card-text>
                Corona Viruses are A type of Virus. There are many different kinds.A newly identified type
                originally from wuhan china has caused a recent outbreak of respiratory diseases called COVID-19
              </v-card-text>
              <v-card-actions>
                <v-btn rounded color="#9a2222" dark>
                  Learn More
                </v-btn>
              </v-card-actions>
            </v-card>
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
