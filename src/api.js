const HTTPADDR = 'http://103.5.6.2/sbtph_api/api'

const API = {
    phoneLoggedIn: `${HTTPADDR}/active.php`,
    phoneLogggedOut: `${HTTPADDR}/inactive.php`,
    phoneLogDetails : `${HTTPADDR}/login_logout_details.php`,
    missedCallsSummaries: `${HTTPADDR}/csdinbound/csd_inbound_missed_calls_summary_api.php`,
    missedCallsDetails: `${HTTPADDR}/csdinbound/csd_inbound_missed_calls_details_api.php`,
    voiceMails: `${HTTPADDR}/get_voicemail.php`,
    parkedCalls: `${HTTPADDR}/get_parked_calls.php`,


    getCallSummaries: {
        csdinbound:  `${HTTPADDR}/csdinbound/csd_inbound_call_summary_api.php`,
        csdoutbound: `${HTTPADDR}/csdoutbound/csd_outbound_call_summary_api.php`,
        collection: `${HTTPADDR}/collection/collection_call_summary_api.php`,
        sales: `${HTTPADDR}/sales/sales_call_summary_api.php`,
    },
    getCallDetails: {
        csdinbounddetails: `${HTTPADDR}/csdinbound/csd_inbound_call_agent_details_api.php`,
        csdoutbounddetails: `${HTTPADDR}/csdoutbound/csd_outbound_call_agent_details_api.php`,
        collectiondetails: `${HTTPADDR}/collection/collection_call_agent_details_api.php`,
        salesdetails: `${HTTPADDR}/sales/sales_call_agent_details_api.php`,
    },

    // Agent Manamentment Api
    getAllAgents: {
        csd: `${HTTPADDR}/csd_manage.php`,
        collection: `${HTTPADDR}/collection/collection_get_all_collection_agent_api.php`,
        sales:`${HTTPADDR}/sales/sales_manage.php`
    },
    getSingleAgent: {

    },
    createAgent: {
        csd: `${HTTPADDR}/create_csd_agent.php`,
        collection: `${HTTPADDR}/collection/create_collection_agent_api.php`,
        sales: `${HTTPADDR}/sales/create_sales_agent_api.php`
    },
    updateAgent:{
        csd: `${HTTPADDR}/updatecsd.php`,
        collection: `${HTTPADDR}/collection/update_collection_agent_api.php`,
        sales: `${HTTPADDR}/sales/update_sales_agent_api.php`
    },
    deleteAgent: {
        csd: `${HTTPADDR}/delete_csd.php`,
        collection: `${HTTPADDR}/collection/delete_collection_agent_api.php`,
        sales: `${HTTPADDR}/sales/delete_sales_agent_api.php`
    },
    getCommentTag: {
        csdinbounddetails: `${HTTPADDR}/csdinbound/get_inbound_call_comment_api.php`,
        csdoutbounddetails: `${HTTPADDR}/csdoutbound/get_outbound_call_comment_api.php`,
        collectiondetails: `${HTTPADDR}/collection/get_collection_call_comment_api.php`,
        salesdetails: `${HTTPADDR}/sales/get_sales_call_comment_api.php`,
        missedcalls: `${HTTPADDR}/csdinbound/get_inbound_call_comment_api.php`,
    },

    putCommentTag: {
        csdinbounddetails: `${HTTPADDR}/csdinbound/put_inbound_call_comment_api.php`,
        csdoutbounddetails: `${HTTPADDR}/csdoutbound/put_outbound_call_comment_api.php`,
        collectiondetails: `${HTTPADDR}/collection/put_collection_call_comment_api.php`,
        salesdetails: `${HTTPADDR}/sales/put_sales_call_comment_api.php`,
        missedcalls: `${HTTPADDR}/csdinbound/put_inbound_call_comment_api.php`,
    },

    getTags: `${HTTPADDR}/tag_manage.php`,
    createTag : `${HTTPADDR}/create_tag.php`,
    deleteTag: `${HTTPADDR}/delete_tag.php`,

    generateMetrics: `${HTTPADDR}/get_metrics.php`

}
export default API


