<template>
   <base-container>
     <button class="btn btn-primary h-25 p-1 w-100 " @click="exportfetchSummries">
         Export 
    </button>
    <base-table :theader="calltype" tableclass='cdr' :tags="callSummaries[1]" @emittedData="searchResult">
        <call-summary-data-list :tdata="callSummaries[0]" :tags="callSummaries[1]" ></call-summary-data-list>
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
            querystring: null
            
        }
    },
    methods:{
        searchResult(from,to,tag){
            this.$router.push({path:this.$route.path, query:{startdate:from ,enddate:to,tagname:tag}})
        },
        fetchSummaries(){
            this.querystring = window.location.search.substring(1)
       
            this.ctype = this.calltype
            try{
                this.$store.dispatch('agentcdr/fetchCallsSummaries',{querystring:this.querystring,calltype:this.calltype})
                
            }catch(e){
                this.error = e.message || 'Error fetch call summary'
            }

        },
          exportfetchSummries(){
            let dataToBeExported
              dataToBeExported = this.$store.getters['agentcdr/getSummariesExportData']
        //    console.log(dataToBeExported)  
             window.Jhxlsx.export(dataToBeExported.tableData, dataToBeExported.options);
        
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
        },
       $route(){
           this.fetchSummaries()
       }
    }
}
</script>