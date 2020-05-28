<template>
  <v-toolbar
    color='#FFFFFF'
    dark="">
    <v-btn text @click="$router.push('/')">
    <v-img src="https://ik.imagekit.io/ugyodiq15/Covid_bWHTIi_6h.png" max-width="100" max-height="100"></v-img>
    </v-btn>
    <v-spacer></v-spacer>
     <v-app-bar-nav-icon large class='grey--text hidden-md-and-up nav' @click="drawer =!drawer">
    </v-app-bar-nav-icon>
    <v-col justify-end class='hidden-sm-and-down'>
      <v-btn class='text-center mx-4'
        @click="$router.push('/')"
        text
        color='#9A2222'>
        Home
      </v-btn>
      <v-btn class='text-center mx-4'
      @click="$router.push('/Test')"
      text
      color='#9A2222'>
        Test
      </v-btn>
      <v-btn class='text-center mx-4'
      @click="$router.push('/News')"
      text
      color='#9A2222'>
        News
      </v-btn>
      <v-btn class='text-center mx-4'
      @click="$router.push('/maps.vue')"
      text
      color='#9A2222'>
        Maps
      </v-btn>
      <v-btn class='text-center mx-4'
      @click="$router.push('/About')"
      text
      color='#9A2222'>
      About
      </v-btn>
    </v-col>
  <v-navigation-drawer app v-model='drawer' absolute temporary   class="nav" color='#9A2222 '>
      <v-list>
          <v-list-tile>
              <v-list-tile-content>
                  <v-layout column>
                      <v-list-item>
      <v-btn class='text-center mx-4'
      text
      @click="$router.push('/')"
      color='#FFFFFF'>
        Home
      </v-btn>
      </v-list-item>
      <v-list-item>
      <v-btn class='text-center mx-4'
      text
      @click="$router.push('/Test')"
      color='#FFFFFF'>
        Test
      </v-btn>
      </v-list-item>
      <v-list-item>
      <v-btn class='text-center mx-4'
      text
      @click="$router.push('/News')"
      color='#FFFFFF'>
        News
      </v-btn>
      </v-list-item>
      <v-list-item>
       <v-btn class='text-center mx-4'
      @click="$router.push('/maps.vue')"
      text
      color='#9A2222'>
        Maps
      </v-btn>
      </v-list-item>
      <v-list-item>
      <v-btn class='text-center mx-4'
      text
      @click="$router.push('/About')"
      color='#FFFFFF'>
      About
      </v-btn>
      </v-list-item>
                  </v-layout>
              </v-list-tile-content>
          </v-list-tile>
      </v-list>
  </v-navigation-drawer>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },

};
</script>

<style>

</style>
