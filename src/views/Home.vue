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
                Corona Viruses are A type of Virus.
                There are many different kinds.A newly identified type
                originally from wuhan china has caused a recent outbreak
                of respiratory diseases called COVID-19
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
      <v-row class='justify-center align-center' style='backgroundColor:#9a2222'>
        <v-card-title color= '#ffffff' class='text-center' ma-2>How Covid Spreads</v-card-title>
      </v-row>
      <v-row class='justify-center align-center'
      style='backgroundColor:#9a2222'
      v-for="spread in spreads"
      :key="spread.img">
      <v-col>
        <v-card  class='text-center' color='#2D2C2C' dark text>
          <div class='d-flex justify-space-between'>
            <v-img height='300' width='300' size='200' class='ma-3' :src='spread.img'></v-img>
          <div>
          <v-card-sub-title
          class='headline'
          v-text='spread.title'>
          </v-card-sub-title>
          <v-card-text v-text='spread.text'>
          </v-card-text>
          </div>
          </div>
        </v-card>
      </v-col>
      </v-row>
      <v-row class='justify-center align-center'>
        <v-card class='text-center' flat>
        <v-card-title class='text-center' ma-2>How To Stop It</v-card-title>
        </v-card>
      </v-row>
      <v-row class='justify-center align-center ma-4'>
      <v-col
      v-for='avoid in avoids'
      :key='avoid.img'>
        <v-card color='#1a61a3' class='text-center' dark>
          <v-img height='300' width='300' :src='avoid.img'></v-img>
          <v-card-sub-title v-text='avoid.text'>
          </v-card-sub-title>
        </v-card>
      </v-col>
      </v-row>
       <MglMap id='map' :accessToken="accessToken" :mapStyle="mapStyle" latitude="37.9062"
                    longitude="0.0236"/>
    </v-content>
    <Footer></Footer>
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl';
import { MglMap } from 'vue-mapbox';
import Header from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
    MglMap,
  },
  data: () => ({
    accessToken: 'pk.eyJ1IjoiZXZhbnM2NjYiLCJhIjoiY2thaDllZno5MGUzYjJxdDllMmdhYjVoYiJ9.3oJSZ6QiZe3t0kugy69hmw',
    mapStyle: 'mapbox://styles/mapbox/dark-v10',
    spreads: [
      {
        title: 'Symptomatic symptoms',
        img: 'https://ik.imagekit.io/ugyodiq15/cough_No0M89PchPs.svg',
        text: 'This means that you get infected by someone who has already contracted covid 19. This will mostly be coughed or sneezed droplets.',
      },
      {
        title: 'Pre-Symptomatic Symptoms',
        img: 'https://ik.imagekit.io/ugyodiq15/sick_5s39IwrhvaI.svg',
        text: 'The pre-symptomatic period is the one of the hardest to recognise. one has to await the incubation days for them to confirm from the lab whether they are infected or not',
      },
      {
        title: 'Asymptoatic Symptoms',
        img: 'https://ik.imagekit.io/ugyodiq15/research-virus_TA0y8IKF3EX.svg',
        text: 'Asymptomatic individuals are infected people who essentially carry the virus but dont display any inherent symptoms since the disease remains dormant in their bodies, its extremely rare and can only be recognized via lab test.',
      },
    ],
    avoids: [
      { img: 'https://ik.imagekit.io/ugyodiq15/facial-mask_G3rp6wEiGxd.svg', text: 'Wear masks' },
      { img: 'https://ik.imagekit.io/ugyodiq15/stay-home_1M2cOY2NAkK.svg', text: 'Stay Home' },
      { img: 'https://ik.imagekit.io/ugyodiq15/avoid-crowd_N6YAgJM-5qZ.svg', text: 'Avoid Crowds' },
      { img: 'https://ik.imagekit.io/ugyodiq15/social-distance_TZ_nX945z9f.svg', text: 'Social Distance' },
      { img: 'https://ik.imagekit.io/ugyodiq15/hand-cleaning_YBYOpnHpxo2.svg', text: 'Wash Hands Oftenly' },
    ],
  }),
  created() {
    this.mapbox = Mapbox;
  },

};
</script>

<style>
#map {
  width: 100vw;
  height: 100vh;
}
</style>
