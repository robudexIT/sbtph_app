<template>
<div>
  {{getCallsDetails}}
</div>
</template>

<script>
export default {
  methods:{
    fetchCallDetials(){
      //const querystring = 'extension=6328&name=SHAIRA&startdate=2021-09-29&enddate=2021-09-29&tagname=all'
      
     // const querystring = 'extension=6364&name=DAISY&startdate=2021-09-29&enddate=2021-09-29&tagname=all'
      const querystring = 'extension=6340&name=WILLIAM&startdate=2021-09-29&enddate=2021-09-29&tagname=all'
     
     try {
       this.$store.dispatch('agentcdr/fetchCallsDetails',{querystring, calltype:'collectiondetails'})
     }catch(e){
       console.log(e.message)
     }
    }
  },
  computed: {
    getCallsDetails(){
      return this.$store.getters['agentcdr/getCollectionOutBoundAgentDetails']
    }
  },
  created(){
    this.fetchCallDetials()
  }
}
</script>