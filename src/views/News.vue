<template>
  <div id='News'>
    <Header></Header>
    <v-container fill-height>
      <v-row align='center' justify='center'>
        <v-col>
          <v-img src='https://ik.imagekit.io/ugyodiq15/Group_35_iGcYmvx4nr.svg'></v-img>
        </v-col>
      </v-row>
      <v-content>
      </v-content>
    </v-container>
    <v-container fluid>
      <newsContent :articles="articles"></newsContent> 
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import newsContent from '@/components/newsContent.vue';
import Header from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';

export default {
  components: {
    Header,
    Footer,
    newsContent,
  },
  data() {
    return {
      api_key: 'dfbf66c2e49e413f815493216fa86501',
      articles: [],
      errors: []
    }
  },
  created() {
    axios.get ('https://newsapi.org/v2/everything?q=coronavirus-kenya&apikey='+this.api_key)
    .then(response => {
      this.articles = response.data.articles
      console.log('data:')
      console.log(response.data.articles)
})  
    .catch(e => {
      this.errors.push(e)
    })
  },

};
</script>

<style>

</style>
