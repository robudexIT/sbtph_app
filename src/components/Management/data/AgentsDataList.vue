<template>
     <tr v-for="(item, index) in tdata" :key="index">
       <td >{{index+1}}</td>
       <td class="lead text-justify">{{item.extension}}</td>
       <td class="lead text-justify">{{item.name}}</td>
       <td class="text-primary lead text-justify">{{item.email}}</td>
        <td>
            <button class="btn btn-primary btn-sm font-weight-normal lead" style="margin: 0px 5px;">UPDATE</button>
            <button class="btn btn-danger btn-sm font-weight-normal lead">DELETE</button>
        </td>
     </tr>
     <button>Add AGENT</button>
</template>

<script>
    export default {
        props:['tdata'],
     
    }
    
</script>