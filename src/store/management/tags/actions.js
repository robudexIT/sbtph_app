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
    }
}