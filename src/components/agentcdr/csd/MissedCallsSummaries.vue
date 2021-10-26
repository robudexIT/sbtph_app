<template>
    <div>
    <base-container>
      <base-table theader="missedcalls"  @emittedData="searchResult" >
         <template v-slot:default>
             <missed-calls-summaries-data-list :tdata="missedCallsSummaries"  ></missed-calls-summaries-data-list>
          </template>
      </base-table>
   </base-container>
  
  </div>
</template>


<script>
import MissedCallsSummariesDataList from '../data/MissedCallsSummariesDataList.vue'
 export default {
     emits: ['searchResult'],
     components:{
         MissedCallsSummariesDataList,
     },
     methods:{
          searchResult(from,to,tag){
            this.$router.push({path:this.$route.path, query:{startdate:from ,enddate:to,tagname:tag}})
            
        },
         fetchMissedCallsSummaries(){
              let querystring = window.location.search.substring(1)
              console.log(querystring)
              if(querystring !== ''){
                  querystring = querystring + '&option=summary'
              }else{
                  querystring = 'startdate=2021-08-01&enddate=2021-08-23&tagname=all&option=summary'
              }
              console.log(querystring)
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
     },
     watch:{
         $route(){
              console.log('there is change fire it')
              this.fetchMissedCallsSummaries()
         }
     }
 }
</script>