<template>
<base-container>
        <base-table theader="tags" tableclass='tags'>
            <tags-data-list :tdata="allTags"></tags-data-list>
        </base-table>
    </base-container>
</template>

<script>
import TagsDataList from './data/TagsDataList.vue'
export default {
    components: {
        TagsDataList,
    },
    methods:{
        fetchtAllTags(){
            try{
                this.$store.dispatch('tags/fetchAllTags')
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