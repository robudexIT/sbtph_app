import API from '../../../api.js'

export default {
    async fetchAllAgents(context,payload){
        const agent = payload.agent
        const response = await fetch(API.getAllAgents[agent])
        if(!response.ok){
            const error = new Error('Cannot fetch ' + agent + ' data')
            throw error
        }else{
            
            const data = await response.json()
            payload.data = data
            context.commit('mutAgents', payload)
        }


    },
    async createAgent(context,payload){
        const agent = payload.agent
        
        const response = await fetch(API.createAgent[agent],{
            method: 'POST',
            body: JSON.stringify(payload.data)
        })
        if(!response.ok){
            const error = new Error('Error in creating new '  + agent + ' Agent')
            throw error
        }else{
            //const data = await response.json()
            context.dispatch('fetchAllAgents',payload)
        }
    },
    async updateAgent(context, payload){
        const agent = payload.agent
        const response = await fetch(API.updateAgent[agent],{
            method: 'POST',
            body: JSON.stringify(payload.data)
        })
        if(!response.ok){
            const error = new Error('Error updating '+ agent+ ' agent  info')
            throw error
        }else{
            const data = await response.json()
            console.log(data)

            //copy response to the payload
            payload.name = data[0].name
            payload.extension =data[0].extension
            payload.email = data[0].email
            payload.method = 'update'
            
          
           context.dispatch('fetchAllAgents',payload)
        }
    },
    async deleteAgent(context, payload){
        const agent = payload.agent
        const response = await fetch(API.deleteAgent[agent],{
            method: 'DELETE',
            body: JSON.stringify(payload)
        })
        if(!response.ok){
            const error = new Error('Error in deleting ' +agent + 'Agent')
            throw error
        }else{
            const data = await response.json()
            
            payload.extension = data[0].extension
            payload.method = 'delete'
           // context.commit('mutSingleAgent',payload)

            context.dispatch('fetchAllAgents',payload)
        }
    }
}
