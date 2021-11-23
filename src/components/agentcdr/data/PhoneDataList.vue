<template>
     <tr v-for="(item, index) in tdata" :key="index">
       <td>{{index}}</td>
       <td>{{item.extension}}</td>
       <td>{{item.username}}</td>
       <td><router-link :to="agentphonelogsdetails+item.loginlogout">Click Details</router-link></td>
       <td>{{item.loginduration}}</td>
       <td>{{item.serverip}}</td>
       <td>{{item.serverstatus}}</td>
       <td>{{item.channelstat}}</td>
     </tr>
</template>

<script>
    export default {
        props:['tdata','tdatatype'],
        data() {
          return {
            agentphonelogsdetails: '/' +this.$store.getters.getAppName+'/agentphonelogsdetails?'
          }
        },
        created(){
      console.log(this.$route.path)
    }
    }
    
</script>


