<template>
   <base-container>
    <!-- <div>{{callSummaries}}</div> -->
    <base-table :theader="calltype" tableclass='cdr'>
        <call-summary-data-list :tdata="callSummaries[0]" :tag="callSummaries[1]"></call-summary-data-list>
    </base-table>
   </base-container>
  
</template>


<script>
import CallSummaryDataList from './data/CallSummaryDataList.vue'
export default {
    components: {
       CallSummaryDataList
    },
    props: ['calltype'],
    data(){
        return {
            error: null,
            ctype: null,
            
        }
    },
    methods:{
        fetchSummaries(){
            let querystring = window.location.search.substring(1)
            this.ctype = this.calltype
            try{
                this.$store.dispatch('agentcdr/fetchCallsSummaries',{querystring,calltype:this.calltype})
                
            }catch(e){
                this.error = e.message || 'Error fetch call summary'
            }

        }
    },
    computed:{
        callSummaries(){
           let callsummary ;
           if(this.calltype == 'csdinbound'){
                callsummary = this.$store.getters['agentcdr/getCsdInBoundSummaries']
                 
           }else if(this.calltype == 'csdoutbound'){
               callsummary =  this.$store.getters['agentcdr/getCsdOutBoundSummaries']
           }else if(this.calltype == "collection"){
               callsummary =  this.$store.getters['agentcdr/getCollectionOutBoundSummaries']
           }else if(this.calltype == "sales"){
               callsummary =  this.$store.getters['agentcdr/getSalesOutBoundSummaries']
           }
           
           return callsummary
          
        },
       
    },
    created(){

        this.fetchSummaries()
    },
    watch:{
        calltype(){
            this.fetchSummaries()
        }
    }
}
</script>