<template>
    <div>
    <base-container>
      <base-table theader="missedcalls">
          <missed-calls-summaries-data-list :tdata="missedCallsSummaries"  ></missed-calls-summaries-data-list>
      </base-table>
   </base-container>
  
  </div>
</template>


<script>
import MissedCallsSummariesDataList from '../data/MissedCallsSummariesDataList.vue'
 export default {
     components:{
         MissedCallsSummariesDataList,
     },
     methods:{
         fetchMissedCallsSummaries(){
         
            let querystring = 'startdate=2021-09-01&enddate=2021-09-10&option=summary'
             try{
                 this.$store.dispatch('agentcdr/fetchMissedCallsSummaries', {querystring})//short hand for querystring:querystring
             }catch(e){
                 console.log(e.message)
             }
         }
     },
     computed:{
         missedCallsSummaries(){
             return this.$store.getters['agentcdr/getMissedCallsSummaries']
         }
     },
     created(){
         this.fetchMissedCallsSummaries()
     }
 }
</script>