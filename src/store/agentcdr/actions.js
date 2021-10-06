import API from '../../api.js'

export default {
    async fetchCallsSummaries(context,payload){
        let apiPath;
        if(payload.calltype == "csdinbound"){
            apiPath = `${API.csdInBoundSummaries}?${payload.querystring}`
        }else if(payload.calltype == "csdoutbound"){
            apiPath =  `${API.csdOutBoundSummaries}?${payload.querystring}` 
        }else if(payload.calltype == "collection"){
            apiPath = `${API.collectionSummaries}?${payload.querystring}`
           
        }else if(payload.calltype == "sales"){
            apiPath = `${API.salesSummaries}?${payload.querystring}`
        }
        const response = await fetch(apiPath)

        if(!response.ok){
            const error = new Error('Error in fetch Calls Summary')
            throw error
        }

        const data = await response.json()
        payload.data = data

        
        context.commit('mutCallsSummaries', payload)

    },
    async fetchCallsDetails(context,payload){
        let apiPath;
        if(payload.calltype == "csdinbounddetails"){
            apiPath = `${API.csdInBoundAgentDetails}?${payload.querystring}`
        }else if(payload.calltype == "csdoutbounddetails"){
            apiPath =  `${API. csdOutBoundAgentDetails}?${payload.querystring}` 
        }else if(payload.calltype == "collectiondetails"){
            apiPath = `${API.collectionAgentDetails}?${payload.querystring}`
           
        }else if(payload.calltype == "salesdetails"){
            apiPath = `${API.salesAgentDetails}?${payload.querystring}`
        }
        const response = await fetch(apiPath)

        if(!response.ok){
            const error = new Error('Error in fetch Calls Details')
            throw error
        }

        const data = await response.json()
        payload.data = data
        
        context.commit('mutCallsDetails', payload)
    }, 
    async fetchMissedCallsSummaries(context,payload){
        console.log(payload.querystring)
        const response = await fetch(`${API.missedCallsSummaries}?${payload.querystring}`)
        
        if(!response.ok){
            const error = new Error('Cannot Fetcch Summaries of MissedCalls')
            throw error
        }else{
            const data = await response.json()

            // tranform misscalls_details fields from
            // "misscalls_details": "csd_missed_calls_details.php?startdate=2021-09-01&enddate=2021-09-10"
            // to "misscalls_details": "/missedcallsdetails?startdate=2021-09-01&enddate=2021-09-10"
            const transformdata = data.map(d => {
                const getquery = d.misscalls_details.split('?')[1]
                d.misscalls_details = `/missedcallsdetails?${getquery}`
                return d
            })
            context.commit('mutMissedCallsSummaries',transformdata)
        }
    },
    async fetchMissedCallsDetails(context, payload){
        const response = await fetch(`${API.missedCallsDetails}?${payload.querystring}`)

        if(!response.ok){
            const error = new Error('Cannot Fetch MisseCalls Details')
            throw error
        }else{
            const data = await response.json()
            context.commit('mutMissedCallsDetails',data)
        }
    }
      
}