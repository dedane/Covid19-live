<template>
  <line-chart :chart-data='datacollection'></line-chart>
  <button @click='fillData()'>Randomize</button>
</template>

<script>
import LineChart from './Linechart.js';
export default {
  components: {
    LineChart,
  },
  data () {
    return {
      dataCollection: null,
    };
  },
  mounted () {
    this.fillData();
  },
  methods: {
    fillData () {
      this.dataCollection = {
        labels: Object.keys(this.data.result),
        datasets: [
          {
            label: this.type[0].toUpperCase() + this.type.slice(1),
            backgroundColor: 'rgba(253, 1, 1, 0.3)',
            fontColor: 'red',
            borderWidth: 1,
            pointBorderColor: 'rgba(253, 1, 1, 0.5)',
            data: this.computeData(),
          },
        ],
      };
    },
    computeData () {
        var tempArray = []
        for (let [key, value] of object.entries(this.data.result)){
            console.log(key)
            if(this.type == 'case'){
                tempArray.push(value.confirmed)}
                else if (this.type == 'deaths'){
                    tempArray.push(value.deaths)
                }
            }
        return tempArray
        }
    },
    watch: {
        data: function() {
            this.fillData()
        }
    }
  },

};
</script>

<style>

</style>
