<template>
    <base-container>
        
        <base-table theader="agent" tableclass='agent'>
            <agents-data-list :tdata="allAgents" @click="deleteAgent" :agent="agent" @emittedData="updateAgent"></agents-data-list>
        </base-table>
        <management-modal-form
            modalId="modalAgent"
            modalTitle="Add Agent"
            formId="addAgent"
            formMethod="POST"
            :agent="agent"
            @emittedData="addAgent"
           
        > </management-modal-form>
        <button type="button" class="btn btn-dark" data-bs-toggle="modal" :data-bs-target="dataBsTarget" dataset-backdrop="static" dataset-keyboard="false" id="add_tag">
            ADD AGENT
       </button>
    </base-container>

</template>

<script>
import AgentsDataList from '../../components/Management/data/AgentsDataList.vue'
import ManagementModalForm from './modal/ManagementModalForm.vue'
export default {
  props: ['agent'],
  emits:['emittedData'],
  data(){
      return {
          dataBsTarget: '#modalAgent',
          isUpdated: false
         
      }
  },
  components:{
      AgentsDataList,
      ManagementModalForm,
  },
  methods: {
     async fetchAllAgents(){
          try{
             await  this.$store.dispatch('agentinfo/fetchAllAgents',{agent:this.agent})
             
             
          }catch(e){
              console.log(e)
          }
           
      },
      async addAgent(data){
         
          try{
           await  this.$store.dispatch('agentinfo/createAgent',{data: data, agent: this.agent})
                
              
          }catch(e){
              console.log(e)
          }
      },
     async updateAgent(data){
         try {
            await this.$store.dispatch('agentinfo/updateAgent',{data:data, agent:this.agent})
            this.isUpdated = true
         }catch(e){
             console.log(e)
         }
      },
      deleteAgent(extension){
        alert(extension)
         try{
             this.$store.dispatch('agentinfo/deleteAgent',{extension: extension, agent: this.agent})
             
         }catch(e){
             console.log(e)
         }
      }
  },
  computed: {
      allAgents(){
          let agents 
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
      },
      
  },
  created(){
     
      this.fetchAllAgents()
      

  },
 
  watch:{
      agent(){
          this.fetchAllAgents()
      },
      
     
     
  }
}
</script>