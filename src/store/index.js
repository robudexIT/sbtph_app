import { createStore } from 'vuex'

import authModules from './auth/index.js'
import csdPhoneModules from './csdphone/index.js'
import agentCdrModules from './agentcdr/index.js'
import agentInfoModules  from './management/agents/index.js'
import tagModules from './management/tags/index.js'
import metricsModules from './management/metrics/index.js'


const store = createStore({
    modules: {
        auth: authModules,
        csdphone: csdPhoneModules,
        agentcdr: agentCdrModules,
        agentinfo: agentInfoModules,
        tags: tagModules,
        metrics: metricsModules,
    },
    state(){
        return {
            localUserId: 'local',
             userName: 'Rogmer'
        }
    },
    getters:{
        getLocal(state){
            return state.localUserId
        },
        getUserName(state){
            return state.userName
        }
    }
})

export default store