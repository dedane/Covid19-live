<template>
<div id='maps'>
  <Header></Header>
  <v-container>
    <v-row>
      <v-col>
        <MglMap class='ma-5'  :accessToken="accessToken" :mapStyle="mapStyle"
       :center="coordinates" :zoom="zoom">
       <MglMarker >
         <v-icon slot="marker">mdi-map-marker</v-icon>
       </MglMarker>
       </MglMap>
      </v-col>
    </v-row>
  </v-container>
  <Footer></Footer>
</div>
</template>

<script>
import Mapbox from 'mapbox-gl';
import { MglMap, MglMarker } from 'vue-mapbox';
import Header from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'maps',
  components: {
    Header,
    Footer,
    MglMap,
    MglMarker
  },
  data: () => ({
    accessToken: 'pk.eyJ1IjoiZXZhbnM2NjYiLCJhIjoiY2thaDllZno5MGUzYjJxdDllMmdhYjVoYiJ9.3oJSZ6QiZe3t0kugy69hmw',
    mapStyle: 'mapbox://styles/mapbox/dark-v10'
  })
};
</script>

<style>

</style>
