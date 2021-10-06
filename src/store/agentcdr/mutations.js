export default {
    mutCallsSummaries(state, payload){
        if(payload.calltype === 'csdinbound'){
            state.csdInBoundSummaries = payload.data
        }else if(payload.calltype === 'csdoutbound'){
            state.csdOutBoundSummaries = payload.data
        }else if(payload.calltype === 'collection'){
            state.collectionOutBoundSummaries = payload.data
        }else if(payload.calltype == 'sales'){
            state.salesOutBoundSummaries = payload.data
        }
    },
    mutCallsDetails(state,payload){
        if(payload.calltype === 'csdinbounddetails'){
            state.csdInBoundAgentDetails = payload.data
        }else if( payload.calltype === 'csdoutbounddetails'){
            state.csdOutBoundAgentDetails = payload.data
        }else if(payload.calltype === 'collectiondetails'){
            state.collectionOutBoundAgentDetails = payload.data
        }else if(payload.calltype === 'salesdetails'){
           state.salesOutBoundAgentDetails = payload.data
        }
    },
    mutMissedCallsSummaries(state, payload){
        state.missedCallsSummaries = payload
    },
    mutMissedCallsDetails(state, payload){
        state.missedCallsDetails = payload
    }
}