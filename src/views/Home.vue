<template>
  <div id='home'>
    <Header></Header>
    <v-content>
      <v-col>
        <v-row>
          <v-col xs-6>
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
          <v-col xs-6>
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
      <v-row dark class='justify-center align-center' style='backgroundColor:#9a2222'>
        <v-card-title dark color= '#ffffff' class='text-center' ma-2>How Covid Spreads</v-card-title>
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
      <v-card
      ma-6
      flat
      height='300px'
      >
       <MglMap class='ma-5'  :accessToken="accessToken" :mapStyle="mapStyle"
       :center="coordinates" :zoom="zoom">
       <MglMarker :coordinates="coordinates" >
         <v-icon slot="marker">mdi-map-marker</v-icon>
       </MglMarker>
       </MglMap>
      </v-card>
      <kenyanCases></kenyanCases>
    </v-content>
    <Footer></Footer>
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl';
import { MglMap, MglMarker } from 'vue-mapbox';
import Header from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import kenyanCases from '@/components/kenyanCases.vue';

export default {
  components: {
    Header,
    Footer,
    MglMap,
    MglMarker,
    kenyanCases,
  },
  data: () => ({
    computed: {
      kenyaCases() {
        return this.$store.getters['kenyaCases/cases'];
      },
    },
    accessToken: 'pk.eyJ1IjoiZXZhbnM2NjYiLCJhIjoiY2thaDllZno5MGUzYjJxdDllMmdhYjVoYiJ9.3oJSZ6QiZe3t0kugy69hmw',
    mapStyle: 'mapbox://styles/mapbox/outdoors-v11',
    coordinates: [36.820231, -1.316538],
    /* marker: [ location.coordinates[0],location.coordinates[1] ], */
    zoom: 7,
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
    /* fetch('https://covid-193.p.rapidapi.com/statistics?country=KENYA',{
    'method':'GET',
          "headers":{
                "x-rapidapi-host":"covid-193.p.rapidapi.com",
                "x-rapidapi-key":"108791afbdmshde20c2a12045146p114b76jsnf965acd10bd9",
          }
        }) */
    fetch('https://kenyacovid19.api.ushahidi.io/api/v3/posts/geojson?has_location=mapped&limit=200&offset=200&order=desc&order_unlocked_on_top=true&orderby=created&source%5B%5D=sms&source%5B%5D=twitter&source%5B%5D=web&source%5B%5D=email&status%5B%5D=published&status%5B%5D=draft').then((response) => response.json())
      .then((data) => {
        const { features } = data;
        // eslint-disable-next-line no-shadow
        features.forEach((features) => {
          const geometrics = features.geometry.geometries;
          // eslint-disable-next-line no-console
          console.log(geometrics);
          // eslint-disable-next-line no-unused-vars
          const location = geometrics.find((coordinate) => coordinate === geometrics.coordinates);
          // eslint-disable-next-line no-console
          console.log(geometrics);
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  },
};
</script>

<style>
#map {
  height: 50vh;
}
</style>
