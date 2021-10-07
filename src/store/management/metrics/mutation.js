export default {
    mutGeneratedMetrics(state, payload){
       if(payload.option_metrics == 'tag'){
           state.tagMetricsGeneratedData = payload.tagMetricsData
       }
    }
}