import API from '../../../api.js'

export default {
   async generateMetrics(context,payload){
       console.log(payload.querystring)
        const response = await fetch(`${API.generateMetrics}?${payload.querystring}`)
        if(!response.ok){
            const error = new Error('Error in generating metrics')
            throw error
        }else{
            const data = await response.json()
            context.commit('mutGeneratedMetrics',data)

        }
    }
}