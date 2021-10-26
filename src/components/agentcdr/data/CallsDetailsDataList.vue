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
			<button v-if="item.tag != '' " class="btn btn-info btn-sm text-justify text-white" type="button" data-bs-toggle="modal" :data-bs-target="dataBsTarget" dataset-backdrop="static" dataset-keyboard="false" @click="getCallsDetails(item)">{{item.tag}}</button>
            <button v-else class="btn btn-outline-info btn-sm text-justify " type="button" data-bs-toggle="modal" :data-bs-target="dataBsTarget" dataset-backdrop="static" dataset-keyboard="false" @click="getCallsDetails(item)"> NO TAG</button>
		</td>
     </tr>
     <cdr-modal-form
         modalId="modalCommentTag"
         modalTitle="Add Comment"
         formId="commentTag"
         formMethod="POST"
         mode="tag"
         :tags="tags"
         :calltype="calltype"
         :callDetails="callDetails"
         :currentComment="comment"
         :currentTag="tag"
         @emittedData="putCommentTag"
     ></cdr-modal-form>

</template>

<script>
    import CdrModalForm from '../modal/CdrModalForm.vue'
    export default {
        props:['tdata','tags','calltype'],
        data(){
            return {
                 dataBsTarget: '#modalCommentTag',
                 comment: null,
                 tag: null,
                 callDetails: null
            }
        },
        
        components: {
            CdrModalForm
        },

        methods: {
            getCallsDetails(item){
                this.comment = item.comment
                this.tag = item.tag
                this.callDetails = item
            },
            putCommentTag(data){
                this.$emit('emittedData', data)
            }
        },
     
    }
    
</script>



