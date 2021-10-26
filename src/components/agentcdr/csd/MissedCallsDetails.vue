<template>
   <base-container>
         <h2 class="text-center font-weight-bold text-primary"><span class='text-danger'> MISSED-CALLS DETAILS </span><button class="btn btn-secondary btn-sm" @click="exportMissedCallsDetails"> EXPORT </button></h2>
   </base-container>
    <base-table theader="detailedmissedcalls" @emittedData="searchResult">
        <missed-calls-details-data-list :tdata="missedCallsDetais" @emittedData="putCommentTag"></missed-calls-details-data-list>
    </base-table> 
  
</template>


<script>
 import MissedCallsDetailsDataList from '../data/MissedCallsDetailsDataList.vue'

export default {
    emits:['emittedData'],
    components:{
        MissedCallsDetailsDataList
    },
    methods:{
         searchResult(from,to,tag){
            this.$router.push({path:this.$route.path, query:{startdate:from ,enddate:to,tagname:tag}})
        },
        fetcthMissedCallsDetails(){
            try{
                let option = '&option=details'
                let querystring = window.location.search.substring(1) + option
                console.log(querystring)
                this.$store.dispatch('agentcdr/fetchMissedCallsDetails',{querystring})
            }catch(e){
                console.log(e)
            }
            
        },
        putCommentTag(data){
          
           this.$store.dispatch('agentcdr/putCommentTag',{data:data,calltype:'missedcalls'})
        },
         exportMissedCallsDetails(){
            let dataToBeExported
              dataToBeExported = this.$store.getters['agentcdr/getMissedCallsDetailsExport']
        //    console.log(dataToBeExported)  
             window.Jhxlsx.export(dataToBeExported.tableData, dataToBeExported.options);
         }     
    },
    computed:{
        missedCallsDetais(){
            return this.$store.getters['agentcdr/getMissedCallsDetails']
        },
      

    },
    created(){
        this.fetcthMissedCallsDetails()
    },
    watch:{
        $route(){
            this.fetcthMissedCallsDetails()
        }
    }

}
</script>