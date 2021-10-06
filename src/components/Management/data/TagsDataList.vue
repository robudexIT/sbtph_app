<template>
     <tr v-for="(item, index) in tdata" :key="index">
       <td >{{index+1}}</td>
       <td :style="tagNameStyle(item.tagtype)" >{{item.tagtype}}</td>
       <td >{{item.tagname}}</td>
       <td >{{item.createdby}}</td>
       <td >{{item.createddate}}</td>
        <td>
            <button class="btn btn-danger btn-sm font-weight-normal lead">DELETE</button>
        </td>
     </tr>
     <button>Add TAG</button>
</template>

<script>
    export default {
        props:['tdata'],

        methods:{       
            tagNameStyle(tagtype){
                let tagnameColor
                if(tagtype== 'CSDINBOUND'){
                    tagnameColor = 'green'
                }else if(tagtype =='CSDOUTBOUND'){
                    tagnameColor = 'blue'
                }else if(tagtype == 'COLLECTION'){
                    tagnameColor = 'purple'
                }else {
                    tagnameColor = 'purple'
                }  
                return { color: tagnameColor, fontWeight : 700 }
            }
        }
     
    }
    
</script>