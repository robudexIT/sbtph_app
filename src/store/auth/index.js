import getters from './getters.js'
import mutations from './getters.js'
import actions from './actions.js'

const auth = {
    // namespaced:true,
    state(){
        return {
            userId: 'Rogmer'
        }
    },
    getters,
    mutations,
    actions
}

export default auth