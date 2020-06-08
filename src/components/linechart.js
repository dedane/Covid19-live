import { line, mixins} from 'vue-chartjs'
cosnt { reactiveProp } = mixins

export default {
    extends: line,
    mixins: [reactiveProp],
    props: ['OPTIONS'],
    mounted () {
        this.renderChart(this.charData, this.options = {responsive: true, maintainAspectRatio: false,
            xAxes: [{type: 'time',
            ticks: {
                autoSkip: true,
                maxTicksLimit: 8
            },
            legend: {
                labels: {
                    fontcolor: 'white',
                    fontSize: 18
                }
            }
        }]
    }
    )
    }
}