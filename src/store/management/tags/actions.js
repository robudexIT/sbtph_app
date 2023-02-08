import API from '../../../api.js'

export default {
    async fetchAllTags(context){
        const response = await fetch(API.getTags)
        if(!response.ok){
            const error = new Error('Cannot Fetch Tags')
            throw error
        }else{
            const data = await response.json()
            context.commit('mutAllTags', data)
        }
    },
    async createTag(context, payload){
        const response = await fetch(API.createTag,{
            method: 'POST',
            body: JSON.stringify(payload)
        })
        console.log('test')
        const data = response.json()
        console.log(data)
        if(!response.ok){
            const error = new Error('Unable to create new Tag. Please Check if Tag was already exists')
            throw error
        }else{
            context.dispatch('fetchAllTags')
            
        }
    },
    async deleteTag(context,payload){
        const response = await fetch(API.deleteTag,{
            method:'DELETE',
            body: JSON.stringify(payload)
        })
        if(!response.ok){
            const error = new Error('Unable to delete tag')
            throw error
        }else{
            context.dispatch('fetchAllTags')
        }
    }
}