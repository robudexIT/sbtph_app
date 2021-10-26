<template>
    <base-container>
            <base-table theader="tags" tableclass='tags'>
                <tags-data-list :tdata="allTags" @click="deleteTag"></tags-data-list>
            </base-table>
            <management-modal-form 
                modalId="modalTag"
                modalTitle="Add Tag"
                formId="addTag"
                formMethod="POST"
                @emittedData="addTag"   
            >
            </management-modal-form>

            <button type="button" class="btn btn-dark" data-bs-toggle="modal" :data-bs-target="dataBsTarget" dataset-backdrop="static" dataset-keyboard="false" id="add_tag">
            ADD TAG
            </button>

    </base-container>
</template>

<script>
import TagsDataList from './data/TagsDataList.vue'
import ManagementModalForm from './modal/ManagementModalForm.vue'

export default {
    data(){
        return { 
            dataBsTarget: '#modalTag'
        }
    },
    components: {
        TagsDataList,
        ManagementModalForm
    },
    methods:{
        fetchtAllTags(){
            try{
                this.$store.dispatch('tags/fetchAllTags')
            }catch(e){
                console.log(e)
            }
        },
        addTag(data){
            try {
                if(this.$store.dispatch('tags/createTag',data)){
                   alert('New Tag Was Successfully Added')
                }
            }catch(e){
                console.log(e)
            }
            
        },
        deleteTag(tagId){
            try{
                if(confirm(`Are you sure you want delete ${tagId} Tag? `)){
                    if(this.$store.dispatch('tags/deleteTag',{tagId})){
                      alert('Tag was successfully deleted')
                     }
                }
                
            }catch(e){
                console.log(e)
            }
        }
    },
    computed:{
        allTags(){
            return this.$store.getters['tags/getAllTags']
        
        }
    },
    created(){
        this.fetchtAllTags()
    }


}
</script>