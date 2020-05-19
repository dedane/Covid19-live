<template>
<v-footer
  dark
  padless>
  <v-container fluid>
      <v-row>
          <v-col>
              <v-row>
              <h2> About Project</h2>
              <h3>
                  Due to the recent pandemic of covid-19
                  i was inspired to develop this project
                  as a illustration that whatever happens
                  to one of us happens to all of us
              </h3>
              </v-row>
              <v-row>
                  <v-col>
                  <v-text class='ma-2'>Copyright &copy; Evans Kimathi</v-text>
                  </v-col>
                  <v-col>
                      <v-btn
                      text
                      v-for='icon in icons'
                      :key='icon'>
                      <v-icon size='25px'>{{icon}}</v-icon>
                      </v-btn>
                  </v-col>
              </v-row>
          </v-col>
      </v-row>
  </v-container>
</v-footer>
</template>
<script>
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-github',
        ]
    })
}
</script>
<style>
</style>
