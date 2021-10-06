<template>
   <base-container>
     <base-table theader="detailedmissedcalls">
        <missed-calls-details-data-list :tdata="missedCallsDetais"></missed-calls-details-data-list>
    </base-table> 
   </base-container>
  
</template>


<script>
 import MissedCallsDetailsDataList from '../data/MissedCallsDetailsDataList.vue'

export default {
    components:{
        MissedCallsDetailsDataList
    },
    methods:{
        fetcthMissedCallsDetails(){
            try{
                let option = '&option=details'
                let querystring = window.location.search.substring(1) + option
                console.log(querystring)
                this.$store.dispatch('agentcdr/fetchMissedCallsDetails',{querystring})
            }catch(e){
                console.log(e)
            }
            
        }
    },
    computed:{
        missedCallsDetais(){
            return this.$store.getters['agentcdr/getMissedCallsDetails']
        }

    },
    created(){
        this.fetcthMissedCallsDetails()
    }

}
</script>