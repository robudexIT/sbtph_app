<template>
    <!-- <div>{{ metricsGenerated }}</div> -->
     <base-container>
        <base-table :theader="metricsHeader" tableclass='metrics' :metricsHeader="metricsGenerated.tableTagHeader">
             <generated-metrics-data-list :metrics="metricsGenerated" :sort_order="sort_order" :tdata="metricsGenerated.tableTagRecords"></generated-metrics-data-list>
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
    props: ['sort_order','option_metrics'],
    methods: {
        generateMetrics(){
            //get option_metrics from the querystring and add metrics word to it 
            //and assign it to this.metricsHeader to get the assign table header

            let querystring = window.location.search.substring(1)
          
            this.metricsHeader = 'metrics_'+ this.option_metrics
            try {
                this.$store.dispatch('metrics/generateMetrics',{querystring,sort_order:this.sort_order, option_metrics:this.option_metrics})
            }catch(e){
                console.log(e)
            }
        },
        
    },
    computed:{
            metricsGenerated(){
                let  metricsGenerated
                if(this.option_metrics == 'tag'){
                     metricsGenerated = this.$store.getters['metrics/getTagMetricsGeneratedData']
                }else{
                    metricsGenerated = 'no data'
                }
                console.log( metricsGenerated)
                return metricsGenerated
            }
    },
    created(){
       
        this.generateMetrics()
      
    }
}
</script>
