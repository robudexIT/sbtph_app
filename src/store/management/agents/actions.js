import API from '../../../api.js'

export default {
    async fetchAllAgents(context,payload){
        const agent = payload.agent
        const response = await fetch(API.getAllAgents[agent])
        if(!response.ok){
            const error = new Error('Cannot fetch ' + agent + ' data')
            throw error
        }else{
            console.log('if no errors jump here')
            const data = await response.json()
            payload.data = data
            context.commit('mutAgents', payload)
        }


    }
}
