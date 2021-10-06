<template>
     <tr v-for="(item, index) in tdata" :key="index">
       <td>{{index+1}}</td>
       <td v-if="calltype=='csdinbounddetails'">{{item.extension}}</td>
       <td>{{item.calledNumber}}</td>
       <td>{{item.caller}}</td>
       <td>{{item.callStatus}}</td>
       <td>{{item.startime}}</td>
       <td>{{item.endtime}}</td>
       <td>{{item.callDuration}}</td>
       <td>
			<audio :src="item.callrecording" controls="controls" style="width: 130px;"></audio>
		</td>
		<td>{{item.getDate}}</td>
		<td>
			<button >
				{{item.tag}} 
			</button>
		</td>
     </tr>
</template>

<script>
    export default {
        props:['tdata','tags','calltype'],
     
    }
    
</script>


