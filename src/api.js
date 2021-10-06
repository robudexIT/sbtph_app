const HTTPADDR = 'http://103.5.6.2/sbtph_api/api'

const API = {
    phoneLoggedIn: `${HTTPADDR}/active.php`,
    phoneLogggedOut: `${HTTPADDR}/inactive.php`,
    phoneLogDetails : `${HTTPADDR}/login_logout_details.php`,
    csdInBoundSummaries: `${HTTPADDR}/csdinbound/csd_inbound_call_summary_api.php`,
    csdOutBoundSummaries: `${HTTPADDR}/csdoutbound/csd_outbound_call_summary_api.php`,
    collectionSummaries: `${HTTPADDR}/collection/collection_call_summary_api.php`,
    csdInBoundAgentDetails : `${HTTPADDR}/csdinbound/csd_inbound_call_agent_details_api.php`,
    csdOutBoundAgentDetails: `${HTTPADDR}/csdoutbound/csd_outbound_call_agent_details_api.php`,
    collectionAgentDetails: `${HTTPADDR}/collection/collection_call_agent_details_api.php`,
    missedCallsSummaries: `${HTTPADDR}/csdinbound/csd_inbound_missed_calls_summary_api.php`,
    missedCallsDetails: `${HTTPADDR}/csdinbound/csd_inbound_missed_calls_details_api.php`,
    voiceMails: `${HTTPADDR}/get_voicemail.php`,
    parkedCalls: `${HTTPADDR}/get_parked_calls.php`,
    salesSummaries: `${HTTPADDR}/sales/sales_call_summary_api.php`,
    salesAgentDetails: `${HTTPADDR}/sales/sales_call_agent_details_api.php`,

    // Agent Manamentment Api
    getAllAgents: {
        csd: `${HTTPADDR}/csd_manage.php`,
        collection: `${HTTPADDR}/collection/collection_get_all_collection_agent_api.php`,
        sales:`${HTTPADDR}/sales/sales_manage.php`
    },
    getTags: `${HTTPADDR}/tag_manage.php`,

    generateMetrics: `${HTTPADDR}/get_metrics.php`

}
export default API


