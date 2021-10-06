export default {
    mutAgents(state, payload){
      if(payload.agent == 'csd'){
          state.csdAgents = payload.data
      }else if(payload.agent == 'collection'){
        state.collectionAgents = payload.data
      }else if(payload.agent == 'sales'){
          state.salesAgents = payload.data
      }
    }
}