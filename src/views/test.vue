<template>
  <div id='test'>
    <v-container fluid>
      <!-- <v-col hidden-sm-and-down>
      </v-col> -->
      <v-stepper v-model='el'>
       <v-stepper-header>
        <v-stepper-step :complete="el > 1" step="1">1 of 10</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="el > 2" step="2">2 of 10</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="el > 3" step="3">3 of 10</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="el > 4" step="4">4 of 10</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="el > 5" step="5">5 of 10</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="el > 6" step="6">6 of 10</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="el > 7" step="7">7 of 10</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="el > 8" step="8">8 of 10</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="el > 9" step="9">9 of 10</v-stepper-step>
        <v-divider/>
        <v-stepper-step  step="10">10 of 10</v-stepper-step>
        <v-divider/>
       </v-stepper-header>
       <v-stepper-items>
         <v-stepper-content step='1'>
           <v-card
            class="mb-12"
            flat>
            <v-row align="center"
            justify="center">
            <v-card-title class='text-center' >
              Have you experinced the following symptoms?
            </v-card-title>
            </v-row>
            <v-row align="center"
            justify="center" height='300' width='300'>
            <v-col>
            </v-col>
            <v-col xs12 md6>
            <v-img height='300' width='300' src='https://ik.imagekit.io/ugyodiq15/Kit_xMM2SPYyQ.svg'></v-img>
            </v-img>
            </v-col>
            <v-col>
            </v-col>
            </v-row>
            <v-row align="center"
            justify="center">
            <v-card-subtitle class='text-center' >
              'Fever, Cough, Sneezing, Sore Throat, Difficulty breathing'
            </v-card-subtitle>
            </v-row>
           </v-card>
            <v-btn block dark color='#9a2222' class='mb-6' @click="el = 2">
              Yes
            </v-btn>
            <v-btn block outlined color='#9a2222' @click="el = 2">
              No
            </v-btn>
         </v-stepper-content>
         <v-stepper-content step='2'>
           <v-card
            class="mb-12"
            flat>
            <v-row align="center"
            justify="center">
            <v-card-title class='text-center' >
              Have you been in any physical contact with an infected individual?
            </v-card-title>
            </v-row>
            <v-row align="center"
            justify="center" height='300' width='300'>
            <v-col>
            </v-col>
            <v-col xs12 md6>
            <v-img height='300' width='300' src='https://ik.imagekit.io/ugyodiq15/Patient_uCze1AeW5.svg'></v-img>
            </v-img>
            </v-col>
            <v-col>
            </v-col>
            </v-row>
            <v-row align="center"
            justify="center">
            <v-card-subtitle class='text-center' >
              face to face or in the same room
            </v-card-subtitle>
            </v-row>
           </v-card>
            <v-btn block dark color='#9a2222' class='mb-6' @click="el = 3">
              Yes
            </v-btn>
            <v-btn block outlined color='#9a2222' @click="el = 3">
              No
            </v-btn>
         </v-stepper-content>
         <v-stepper-content step='3'>
           <v-card
            class="mb-12"
            flat>
            <v-row align="center"
            justify="center">
            <v-card-title class='text-center' >
              Have you recently travelled to a highly infectious location?
            </v-card-title>
            </v-row>
            <v-row align="center"
            justify="center" height='300' width='300'>
            <v-col>
            </v-col>
            <v-col xs12 md6>
            <v-img height='300' width='300' src='https://ik.imagekit.io/ugyodiq15/International_Travel_2lvQF2gFe.svg'></v-img>
            </v-img>
            </v-col>
            <v-col>
            </v-col>
            </v-row>
            <v-row align="center"
            justify="center">
            <v-card-subtitle class='text-center' >
              Nairobi, Mombasa, Nyali
            </v-card-subtitle>
            </v-row>
           </v-card>
            <v-btn block dark color='#9a2222' class='mb-6' @click="el = 4">
              Yes
            </v-btn>
            <v-btn block outlined color='#9a2222' @click="el = 4">
              No
            </v-btn>
         </v-stepper-content>
         <v-stepper-content step='4'>
           <v-card
            class="mb-12"
            flat>
            <v-row align="center"
            justify="center">
            <v-card-title class='text-center' >
              Do you have a problem breathing?
            </v-card-title>
            </v-row>
            <v-row align="center"
            justify="center" height='300' width='300'>
            <v-col>
            </v-col>
            <v-col xs12 md6>
            <v-img height='300' width='300' src='https://ik.imagekit.io/ugyodiq15/hard_breathing_6p8nHx3Oyg.svg'></v-img>
            </v-img>
            </v-col>
            <v-col>
            </v-col>
            </v-row>
            <v-row align="center"
            justify="center">
            <v-card-subtitle class='text-center' >
              Shortness of breath, wheezing
            </v-card-subtitle>
            </v-row>
           </v-card>
            <v-btn block dark color='#9a2222' class='mb-6' @click="el = 5">
              Yes
            </v-btn>
            <v-btn block outlined color='#9a2222' @click="el = 5">
              No
            </v-btn>
         </v-stepper-content>
         <v-stepper-content step='5'>
           <v-card
            class="mb-12"
            flat>
            <v-row align="center"
            justify="center">
            <v-card-title class='text-center' >
              Do you experience blood droplets when you urinate?
            </v-card-title>
            </v-row>
            <v-row align="center"
            justify="center" height='300' width='300'>
            <v-col>
            </v-col>
            <v-col xs12 md6>
            <v-img height='300' width='300' src='https://ik.imagekit.io/ugyodiq15/blood_cyvPoXCIE.svg'></v-img>
            </v-img>
            </v-col>
            <v-col>
            </v-col>
            </v-row>
            <v-row align="center"
            justify="center">
            <v-card-subtitle class='text-center' >
              Any traces of blood in urine
            </v-card-subtitle>
            </v-row>
           </v-card>
            <v-btn block dark color='#9a2222' class='mb-6' @click="el = 6">
              Yes
            </v-btn>
            <v-btn block outlined color='#9a2222' @click="el = 6">
              No
            </v-btn>
         </v-stepper-content>
         <v-stepper-content step='6'>
           <v-card
            class="mb-12"
            flat>
            <v-row align="center"
            justify="center">
            <v-card-title class='text-center' >
              Do you have a continuos sore throat?
            </v-card-title>
            </v-row>
            <v-row align="center"
            justify="center" height='300' width='300'>
            <v-col>
            </v-col>
            <v-col xs12 md6>
            <v-img height='300' width='300' src='https://ik.imagekit.io/ugyodiq15/Throat_XjCOmc7PK.svg'></v-img>
            </v-img>
            </v-col>
            <v-col>
            </v-col>
            </v-row>
            <v-row align="center"
            justify="center">
            <v-card-subtitle class='text-center' >
              dry or with mucus
            </v-card-subtitle>
            </v-row>
           </v-card>
            <v-btn block dark color='#9a2222' class='mb-6' @click="el = 7">
              Yes
            </v-btn>
            <v-btn block outlined color='#9a2222' @click="el = 7">
              No
            </v-btn>
         </v-stepper-content>
         <v-stepper-content step='7'>
           <v-card
            class="mb-12"
            flat>
            <v-row align="center"
            justify="center">
            <v-card-title class='text-center' >
              Do you experience any body-aches?
            </v-card-title>
            </v-row>
            <v-row align="center"
            justify="center" height='300' width='300'>
            <v-col>
            </v-col>
            <v-col xs12 md6>
            <v-img height='300' width='300' src='https://ik.imagekit.io/ugyodiq15/Back_Body_kyFaEAlek.svg'></v-img>
            </v-img>
            </v-col>
            <v-col>
            </v-col>
            </v-row>
            <v-row align="center"
            justify="center">
            <v-card-subtitle class='text-center' >
              when you wake up or after some physical activity
            </v-card-subtitle>
            </v-row>
           </v-card>
            <v-btn block dark color='#9a2222' class='mb-6' @click="el = 8">
              Yes
            </v-btn>
            <v-btn block outlined color='#9a2222' @click="el = 8">
              No
            </v-btn>
         </v-stepper-content>
         <v-stepper-content step='8'>
           <v-card
            class="mb-12"
            flat>
            <v-row align="center"
            justify="center">
            <v-card-title class='text-center' >
              Do you have a have consistent headache?
            </v-card-title>
            </v-row>
            <v-row align="center"
            justify="center" height='300' width='300'>
            <v-col>
            </v-col>
            <v-col xs12 md6>
            <v-img height='300' width='300' src='https://ik.imagekit.io/ugyodiq15/Headache_DoZs4XyNwa.svg'></v-img>
            </v-img>
            </v-col>
            <v-col>
            </v-col>
            </v-row>
            <v-row align="center"
            justify="center">
            <v-card-subtitle class='text-center' >
              with fever or coincides with diziness
            </v-card-subtitle>
            </v-row>
           </v-card>
            <v-btn block dark color='#9a2222' class='mb-6' @click="el = 9">
              Yes
            </v-btn>
            <v-btn block outlined color='#9a2222' @click="el = 9">
              No
            </v-btn>
         </v-stepper-content>
         <v-stepper-content step='9'>
           <v-card
            class="mb-12"
            flat>
            <v-row align="center"
            justify="center">
            <v-card-title class='text-center' >
              Do you have a fever?
            </v-card-title>
            </v-row>
            <v-row align="center"
            justify="center" height='300' width='300'>
            <v-col>
            </v-col>
            <v-col xs12 md6>
            <v-img height='300' width='300' src='https://ik.imagekit.io/ugyodiq15/Fever_c6wH1fATz.svg'></v-img>
            </v-img>
            </v-col>
            <v-col>
            </v-col>
            </v-row>
            <v-row align="center"
            justify="center">
            <v-card-subtitle class='text-center' >
              when tested 38.8 C and above
            </v-card-subtitle>
            </v-row>
           </v-card>
            <v-btn block dark color='#9a2222' class='mb-6' @click="el = 10">
              Yes
            </v-btn>
            <v-btn block outlined color='#9a2222' @click="el = 10">
              No
            </v-btn>
         </v-stepper-content>
          <v-stepper-content step='10'>
           <v-card
            class="mb-12"
            flat>
            <v-row align="center"
            justify="center">
            <v-card-title class='text-center' >
              Are you experiencing fatigue?
            </v-card-title>
            </v-row>
            <v-row align="center"
            justify="center" height='300' width='300'>
            <v-col>
            </v-col>
            <v-col xs12 md6>
            <v-img height='300' width='300' src='https://ik.imagekit.io/ugyodiq15/Fatigue_tNPWiVV0-.svg'></v-img>
            </v-img>
            </v-col>
            <v-col>
            </v-col>
            </v-row>
            <v-row align="center"
            justify="center">
            <v-card-subtitle class='text-center' >
              always tired and feel like you cant do anything
            </v-card-subtitle>
            </v-row>
           </v-card>
            <v-btn block dark color='#9a2222' class='mb-6' @click="el = 10">
              Yes
            </v-btn>
            <v-btn block outlined color='#9a2222'>
              No
            </v-btn>
         </v-stepper-content>
      </v-stepper-items>
      </v-stepper>
      <!-- <v-col hide-sm-and-down>
      </v-col> -->
      </v-container>
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
  data() {
    return {
      el: 1,
      step: [1,2,3,4,5,6,7,8,9,10],
      tests: [
        {
          step: 1,
          title: 'Have you experinced the following symptoms?',
          src: 'https://ik.imagekit.io/ugyodiq15/Kit_xMM2SPYyQ.svg',
          symptoms: 'Fever, Cough, Sneezing, Sore Throat, Difficulty breathing',
        },
        {
          step: 2,
          title: 'Have you been in any physical contact with an infected individual?',
          src: 'https://ik.imagekit.io/ugyodiq15/Patient_uCze1AeW5.svg',
          symptoms: 'face to face or in the same room',
        },
        {
          step: 3,
          title: 'Have you recently travelled to a highly infectious location',
          src: 'https://ik.imagekit.io/ugyodiq15/International_Travel_2lvQF2gFe.svg',
          symptoms: 'Nairobi, Mombasa, Nyali',
        },
        {
          step: 4,
          title: 'Do you have a problem breathing?',
          src: 'https://ik.imagekit.io/ugyodiq15/hard_breathing_6p8nHx3Oyg.svg',
          symptoms: 'Shortness of breath, wheezing',
        },
        {
          step: 5,
          title: 'Do you experience blood droplets when you urinate?',
          src: 'https://ik.imagekit.io/ugyodiq15/blood_cyvPoXCIE.svg',
          symptoms: 'Any traces of blood in urine',
        },
        {
          step: 6,
          title: 'Do you have a continuos sore throat?',
          src: 'https://ik.imagekit.io/ugyodiq15/Throat_XjCOmc7PK.svg',
          symptoms: 'dry or with mucus',
        },
        {
          step: 7,
          title: 'Do you experience any body-aches',
          src: 'https://ik.imagekit.io/ugyodiq15/Back_Body_kyFaEAlek.svg',
          symptoms: 'when you wake up or after some physical activity',
        },
        {
          step: 8,
          title: 'Do you have a have consistent headache?',
          src: 'https://ik.imagekit.io/ugyodiq15/Headache_DoZs4XyNwa.svg',
          symptoms: 'with fever or coincides with diziness',
        },
        {
          step: 9,
          title: 'Do you have a fever?',
          src: 'https://ik.imagekit.io/ugyodiq15/Fever_c6wH1fATz.svg',
          symptoms: 'when tested 38.8 C and above',
        },
        {
          step: 10,
          title: 'Are you experiencing fatigue?',
          src: 'https://ik.imagekit.io/ugyodiq15/Fatigue_tNPWiVV0-.svg',
          symptoms: 'always tired and feel like you cant do anything',
        },
      ],
    };
  },
};
</script>

<style>

</style>
