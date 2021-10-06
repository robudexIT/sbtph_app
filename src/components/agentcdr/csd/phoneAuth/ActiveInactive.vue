<template>
     <base-container>
        <base-table theader="phoneloginheader" tableclass='cdr'>
            <phone-data-list :tdata="getPhoneList"></phone-data-list>
        </base-table>
     </base-container>
    
</template>

<script>
import PhoneDataList from '../../data/PhoneDataList.vue'
export default {
    components: {
        PhoneDataList,
    },
    props: ['phonestatus'],
    data(){
        return{
            error: null
        }
    },
    methods: {
        fetchPhoneStatus(){
             try {
                 this.$store.dispatch('csdphone/fetchPhoneStatus', {phone: this.phonestatus})
            }catch(e){
                this.error = e.message
             
            }
        }
    },
    computed:{
        getPhoneList(){
            let phoneLists
            if(this.phonestatus == 'loggedin'){
                phoneLists = this.$store.getters['csdphone/getPhoneLoggedIn']
            }else if(this.phonestatus == 'loggedout'){ 
                 phoneLists = this.$store.getters['csdphone/getPhoneLoggedOut']
            }
            
            return phoneLists
        }
    },
    created(){
       this.fetchPhoneStatus()
       
    },
    watch:{
        phonestatus(newvalue, value){
            if(newvalue != value){
                 this.fetchPhoneStatus()
            }
           

        }
    }
}
</script>