<template>
<div id='maps'>
  <v-container fill-height>
    <v-row>
      <v-col>
        <v-card
      flat
      height='400px'
      >
        <MglMap   :accessToken="accessToken" :mapStyle="mapStyle" zoom='1.5'>
       <MglMarker >
         <v-icon slot="marker">mdi-map-marker</v-icon>
       </MglMarker>
       </MglMap>
       </v-card>
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
    MglMarker,
  },
  data: () => ({
    accessToken: 'pk.eyJ1IjoiZXZhbnM2NjYiLCJhIjoiY2thaDllZno5MGUzYjJxdDllMmdhYjVoYiJ9.3oJSZ6QiZe3t0kugy69hmw',
    mapStyle: 'mapbox://styles/mapbox/dark-v10',
  }),
  created() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://api.covid19api.com/all', requestOptions)
      .then((response) => response.json())
      // eslint-disable-next-line no-shadow
      .then((data) => data
        .filter(data => {
          return data.Date='2020-05-27T00:00:00Z';
        })
        .forEach((data) => {
        // eslint-disable-next-line no-console
          console.log(data.country);
        }),
      // .catch((error) => console.log('error', error))
      // eslint-disable-next-line function-paren-newline
      );
  },
};
</script>

<style>

</style>
