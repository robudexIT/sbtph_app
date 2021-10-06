<template>
    <base-container>
        <base-table theader="agent" tableclass='agent'>
            <agents-data-list :tdata="allAgents"></agents-data-list>
        </base-table>
    </base-container>
</template>

<script>
import AgentsDataList from '../../components/Management/data/AgentsDataList.vue'
export default {
  props: ['agent'],
  components:{
      AgentsDataList,
  },
  methods: {
      fetchAllAgents(){
          try{
               this.$store.dispatch('agentinfo/fetchAllAgents',{agent:this.agent})
          }catch(e){
              console.log(e)
          }
           
      },
  },
  computed: {
      allAgents(){
          let agents ;
          if(this.agent == 'csd'){
              agents = this.$store.getters['agentinfo/getCsdAgents']
          }else if(this.agent == 'collection'){
              agents = this.$store.getters['agentinfo/getCollectionAgents']
          }else if(this.agent == 'sales'){
              agents = this.$store.getters['agentinfo/getSalesAgents']
          }else{
              agents = 'No Agent Found'
          }
          return agents
      }
  },
  created(){
      console.log(this.agent)
      this.fetchAllAgents()
  },
  watch:{
      agent(){
          this.fetchAllAgents()
      }
  }
}
</script>