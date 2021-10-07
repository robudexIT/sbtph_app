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
            //context.commit('mutGeneratedMetrics',data)
            payload.data = data
            if(payload.option_metrics == 'tag'){
                context.dispatch('generateMetricsBasedOnTags', payload)
            }else{
                context.dispatch('generatedMetricsBasedCdr' , payload)
            }

        }
    },
    generateMetricsBasedOnTags(context,payload){
        //begin extracting the payload.data
        const data = payload.data
        const sortOrder = payload.sort_order
        const option = payload.data.option+ ' TAGS'

        const tagsOptions = []
        const listOfTags = []
        const listOfMonths = []
        

        for (let [key,value] of Object.entries(data)){
            for( let t=0; t <tagsOptions.length;t++ ){
                if(key == tagsOptions[t]){
                    tagsOptions.splice(t,1)
                }
            }
            //extact available months used for table header
            if(typeof value == 'object'){
                for(let key1 of Object.keys(value)){
                    
                    if(listOfMonths.includes(key1) === false){
                        listOfMonths.push(key1)
                    }
                }
            }
        }
        //create table header tag metrics
        const tableTagHeader = [option, ...listOfMonths, 'Total']
         
        //construct the value to be put on the table
        for (const [key, value] of Object.entries(data)){
            let listOfTag = []
            if (typeof value === 'object'){
            listOfTag.push(key)
            for (let value1 of Object.values(value)){
                if (value1 === 0){
                value1 === '';
                }
                listOfTag.push(value1)
            }
            listOfTags.push(listOfTag)
            }

        }

        //sort the tags base on the selected order
        let sortedTagRecords;
        if(sortOrder === "descending"){
            sortedTagRecords = listOfTags.sort(function(a,b){
            return b.filter(el =>{
                if(typeof el === 'number'){
                    return el
                }
            }).reduce((subtotal,nextVal) => {
                return subtotal + nextVal
            },0) - a.filter(el => {
                if(typeof el === 'number'){
                    return el
                }
            }).reduce((subtotal, nextVal) => {
                return subtotal + nextVal
            },0)
        })
        }else{
            sortedTagRecords = listOfTags.sort(function(a,b){
            return a.filter(el =>{
                if(typeof el === 'number'){
                    return el
                }
            }).reduce((subtotal,nextVal) => {
                return subtotal + nextVal
            },0) - b.filter(el => {
                if(typeof el === 'number'){
                    return el
                }
            }).reduce((subtotal, nextVal) => {
                return subtotal + nextVal
            },0)
            })
        }
        payload.tagMetricsData = {'tableTagHeader':tableTagHeader, 'tableTagRecords': sortedTagRecords  }
        context.commit('mutGeneratedMetrics', payload)

    },
    generatedMetricsBasedCdr(){
        console.log('test')
    }
}