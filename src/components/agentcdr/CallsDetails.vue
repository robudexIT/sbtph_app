<template>
<div>
    <base-container>
      <base-table :theader="calltype" tableclass='cdr'>
          <calls-details-data-list :tdata="callsDetails[0]" :tags="callsDetails[0]" :calltype="calltype" ></calls-details-data-list>
      </base-table>
   </base-container>
  
</div>
</template>

<script>
import CallsDetailsDataList from './data/CallsDetailsDataList.vue'

export default {
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
    }
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