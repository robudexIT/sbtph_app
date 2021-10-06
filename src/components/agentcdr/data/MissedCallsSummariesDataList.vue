<template>
     <tr v-for="(item, index) in tdata" :key="index">
       <td>{{index+1}}</td>
       <td>{{item.total_missed_calls}}</td>
       <td><router-link :to="item.misscalls_details">{{item.getdate}}</router-link></td>
     </tr>
</template>

<script>
    export default {
        props:['tdata','tags'],
     
    }
    
</script>

