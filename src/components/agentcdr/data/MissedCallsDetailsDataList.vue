<template>
     <tr v-for="(item, index) in tdata" :key="index">
        <td>{{index+1}}</td>
       <td>{{item.startime}}</td>
       <td>{{item.endtime}}</td>
       <td>{{item.caller}}</td>
       <td>{{item.callStatus}}</td>
       <td>
            <button v-if="item.comment != ''" type="button" class="btn btn-info btn-sm text-justify text-white" data-bs-toggle="modal" :data-bs-target="dataBsTarget" dataset-backdrop="static" dataset-keyboard="false" @click="getCallsDetails(item)">{{limitCommentTitle(item.comment)}}</button>
            
            <button v-else class="btn btn-outline-info btn-sm text-justify " type="button" data-bs-toggle="modal" :data-bs-target="dataBsTarget" dataset-backdrop="static" dataset-keyboard="false" id="comment_tag" @click="getCallsDetails(item)" >No Comment</button>
       </td>
       <td>{{item.commentby}}</td>
       <td>{{item.getdate}}</td>
     </tr>
     <teleport to='body'>
        <cdr-modal-form
            modalId="modalCommentTag"
            modalTitle="Add Comment"
            formId="commentTag"
            formMethod="POST"
            mode="comment"
            :callDetails="callDetails"
            :currentComment="comment"
            :tag="tag"
            @emittedData="putCommentTag"
        ></cdr-modal-form>
    </teleport>
</template>

<script>
   import CdrModalForm from '../modal/CdrModalForm.vue'
    export default {
        props:['tdata'],
        components: {
            CdrModalForm
        },
        data(){
            return {
                dataBsTarget: '#modalCommentTag',
                comment: null,
                callDetails: null,
            }
        },
        methods: {
            limitCommentTitle(comment, limit = 30)  {
                var newComment = [];
                if (comment.length > limit) {
                    comment.split(' ').reduce((acc, cur) => {
                        if (acc + cur.length <= limit) {
                            newComment.push(cur);
                        }
                        return acc + cur.length;
                    }, 0);

                    // return the result
                    return `${newComment.join(' ')} ...`;
                }
                return comment;
            }, 
            getCallsDetails(item){
                this.comment = item.comment
                this.callDetails = item
            },
            putCommentTag(data){
                this.$emit('emittedData',data)
            }
        },
        computed:{
            buttonText(item){
                return item.comment == '' ? 'No Comment' : item.comment
            }
        }
     
    }
    
</script>



