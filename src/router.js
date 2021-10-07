import { createRouter, createWebHistory } from 'vue-router'

import CallsSummaries from './components/agentcdr/CallsSummaries.vue'
import CallsDetails from './components/agentcdr/CallsDetails.vue'
import ActiveInactive from './components/agentcdr/csd/phoneAuth/ActiveInactive.vue'
import MissedCallsSummies from './components/agentcdr/csd/MissedCallsSummaries.vue'
import MissedCallsDetails from './components/agentcdr/csd/MissedCallsDetails.vue'
import ParkedCalls from './components/agentcdr/csd/ParkedCalls.vue'
import VoiceMails from './components/agentcdr/csd/VoiceMails'
import ManagementMenu from './components/Management/ManagementMenu.vue'
import ManageAgents from './components/Management/ManageAgents.vue'
import ManageTags from './components/Management/ManageTags.vue'
import GeneratedMetrics from './components/Management/GeneratedMetrics.vue'
import TheMetrics from './components/Management/TheMetrics.vue'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/callsummaries/:calltype', component: CallsSummaries, props:true
        },
        {
            path: '/calldetails/:calltype', component: CallsDetails, props:true
        },
        {
            path: '/phone/:phonestatus', component: ActiveInactive,props: true
        },
        {
            path: '/missedcalls', component: MissedCallsSummies, props: true
        },
        {
            path: '/missedcallsdetails', component: MissedCallsDetails, props: true
        },
        {
            path: '/parkedcalls', component: ParkedCalls
        },
        {
            path: '/voicemails', component: VoiceMails
        },
 
        {
            path: '/management', component: ManagementMenu , children:[
                { path: 'manage/:agent', component: ManageAgents , props : true},
                { path: 'tags', component: ManageTags, props: true},
                { path: 'metrics', component: GeneratedMetrics, props: true}
            ]
        },
        { path: '/manage/getallagents/:agent', component: ManageAgents, props: true},
        { path: '/tags', component: ManageTags, props: true},
        { path: '/metrics', component: TheMetrics, props: true},
        {name:'generatedmetrics', path: '/generatedmetrics/:sort_order/:option_metrics', component: GeneratedMetrics, props: true},

        


    ]
    
})


export default router