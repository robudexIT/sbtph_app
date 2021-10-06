<template>
    <h1>Metrics</h1>
    <div>{{ metricsGenerated }}</div>
     <base-container>
        <base-table :theader="metricsHeader" tableclass='metrics'>
             <generated-metrics-data-list :metrics="metricsGenerated" :sort_order="sort_order"></generated-metrics-data-list>
        </base-table>
     </base-container>

   
</template>


<script>
import BaseContainer from '../layout/BaseContainer.vue'
import GeneratedMetricsDataList from './data/GeneratedMetricsDataList.vue'
export default {
    data(){
        return {
            metricsHeader: ''
        }
    },
    components: {
        GeneratedMetricsDataList,
        BaseContainer
    },
    props: ['sort_order'],
    methods: {
        generateMetrics(){
            //get option_metrics from the querystring and add metrics word to it 
            //and assign it to this.metricsHeader to get the assign table header

            let querystring = window.location.search.substring(1)
            let optionMetrics = querystring.split('&')[3].split("=")[1];
            this.metricsHeader = 'metrics_'+ optionMetrics
            try {
                this.$store.dispatch('metrics/generateMetrics',{querystring})
            }catch(e){
                console.log(e)
            }
        },
        
    },
    computed:{
            metricsGenerated(){
                return this.$store.getters['metrics/getGeneratedMetrics']
            }
    },
    created(){
       
        this.generateMetrics()
      
    }
}
</script>
