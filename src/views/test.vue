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
        <v-stepper-step :complete="el > 1" step="4">4 of 10</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="el > 1" step="5">5 of 10</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="el > 1" step="6">6 of 10</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="el > 1" step="7">7 of 10</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="el > 1" step="8">8 of 10</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="el > 1" step="9">9 of 10</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="el > 1" step="10">10 of 10</v-stepper-step>
        <v-divider/>
       </v-stepper-header>
       <v-stepper-items>
         <v-stepper-content :step='test.step'
             v-for='test in tests'
            :key='test.src'>
          <v-container fill-height fluid>
           <v-card
            class="mb-12">
            <v-row align="center"
            justify="center">
            <v-card-title class='text-center' v-text='test.title'>
            </v-card-title>
            </v-row>
            <v-row align="center"
            justify="center">
              <v-col 2>
            <v-img height='300' width='300' :src='test.src'></v-img>
              </v-col>
            </v-img>
            </v-row>
            <-row>
            <v-card-subtitle class='text-center' v-text='test.symptoms'>
            </v-card-subtitle>
            </v-row>
            <v-row>
            <v-btn block dark color='#9a2222' class='mb-6'>
              Yes
            </v-btn>
            </v-row>
            <v-row>
            <v-btn block outlined color='#9a2222'>
              No
            </v-btn>
            </v-row>
           </v-card>
          </v-container>
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
      tests: [
      {
        step: 1,
        title: 'Have you experinced the following symptoms?',
        src: 'https://ik.imagekit.io/ugyodiq15/Kit_xMM2SPYyQ.svg',
        symptoms: 'Fever, Cough, Sneezing, Sore Throat, Difficulty breathing'
      },
      {
        step: 2,
        title: 'Have you been in any physical contact with an infected individual?',
        src: 'https://ik.imagekit.io/ugyodiq15/Patient_uCze1AeW5.svg',
        symptoms: 'face to face or in the same room'
      },
      {
        step: 3,
        title: 'Have you recently travelled to a highly infectious location',
        src: 'https://ik.imagekit.io/ugyodiq15/International_Travel_2lvQF2gFe.svg',
        symptoms: 'Nairobi, Mombasa, Nyali'
      },
      {
        step: 4,
        title: 'Do you have a problem breathing?',
        src: 'https://ik.imagekit.io/ugyodiq15/hard_breathing_6p8nHx3Oyg.svg',
        symptoms: 'Shortness of breath, wheezing'
      },
      {
        step: 5,
        title: 'Do you experience blood droplets when you urinate?',
        src: 'https://ik.imagekit.io/ugyodiq15/blood_cyvPoXCIE.svg',
        symptoms: 'Any traces of blood in urine'
      },
      {
        step: 6,
        title: 'Do you have a continuos sore throat?',
        src: 'https://ik.imagekit.io/ugyodiq15/Throat_XjCOmc7PK.svg',
        symptoms: 'dry or with mucus'
      },
      {
        step: 7,
        title: 'Do you experience any body-aches',
        src: 'https://ik.imagekit.io/ugyodiq15/Back_Body_kyFaEAlek.svg',
        symptoms: 'when you wake up or after some physical activity'
      },
      {
        step: 8,
        title: 'Do you have a have consistent headache?',
        src: 'https://ik.imagekit.io/ugyodiq15/Headache_DoZs4XyNwa.svg',
        symptoms: 'with fever or coincides with diziness'
      },
      {
        step: 9,
        title: 'Do you have a fever?',
        src: 'https://ik.imagekit.io/ugyodiq15/Fever_c6wH1fATz.svg',
        symptoms: 'when tested 38.8 C and above'
      },
      {
        step: 10,
        title: 'Are you experiencing fatigue?',
        src: 'https://ik.imagekit.io/ugyodiq15/Fatigue_tNPWiVV0-.svg',
        symptoms: 'always tired and feel like you cant do anything'
      }
    ]
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
