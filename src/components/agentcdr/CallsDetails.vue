<template>
<div>
    <base-container> 
       <h2 class="text-center font-weight-bold text-primary">{{callsDetails[0][0].name}}-<span class='text-danger'> CALLS DETAILS </span><button class="btn btn-secondary btn-sm" @click=" exportfetchDetails"> EXPORT </button></h2>
        
    </base-container>
     <base-table :theader="calltype" tableclass='cdr' :tags="callsDetails[1]">
          <calls-details-data-list :tdata="callsDetails[0]" :tags="callsDetails[1]" :calltype="calltype" @emittedData="putCommentTag"></calls-details-data-list>
      </base-table>
  
</div>
</template>

<script>
import CallsDetailsDataList from './data/CallsDetailsDataList.vue'

export default {
  emits:['emittedData'],
  components: {
    CallsDetailsDataList,
  },
  props:['calltype'],
  
  methods:{
    fetchCallDetials(){
     
      let querystring = window.location.search.substring(1)
     
     try {
       this.$store.dispatch('agentcdr/fetchCallsDetails',{querystring, calltype:this.calltype})
     }catch(e){
       console.log(e.message)
     }
    },
    exportfetchDetails(){
            let dataToBeExported
              dataToBeExported = this.$store.getters['agentcdr/getDetailsExportData']
        //    console.log(dataToBeExported)  
             window.Jhxlsx.export(dataToBeExported.tableData, dataToBeExported.options);
        
    },
    putCommentTag(data){
       let querystring = window.location.search.substring(1)
       console.log(data)
      this.$store.dispatch('agentcdr/putCommentTag',{querystring,data:data,calltype:this.calltype})

    },
  },
  computed: {
    callsDetails(){
       let calldetails
      if(this.calltype == 'csdinbounddetails'){
          calldetails =  this.$store.getters['agentcdr/getCsdInBoundAgentDetails']
      }else if(this.calltype == 'csdoutbounddetails'){
          calldetails = this.$store.getters['agentcdr/getCsdOutBoundAgentDetails']
      }else if(this.calltype == 'collectiondetails'){
           calldetails =  this.$store.getters['agentcdr/getCollectionOutBoundAgentDetails']
      }else if(this.calltype == 'salesdetails'){
          calldetails = this.$store.getters['agentcdr/getSalesOutBoundAgentDetails']
      }else {
          calldetails = 'no data'
      }

      return calldetails
    }
  },
  
  created(){
    this.fetchCallDetials()
  },
  watch:{
      calltype(){
          this.fetchCallDetials()
      }
  }
    
}
  

</script>