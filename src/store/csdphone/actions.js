import API from '../../api.js'

export default {
   async fetchPhoneStatus(context,payload){
        let phoneApi;
        console.log(payload.phone)
        if(payload.phone == 'loggedin'){
            phoneApi = API.phoneLoggedIn
        }else if(payload.phone == 'loggedout'){
            phoneApi = API.phoneLogggedOut
        }
        console.log(phoneApi)
        const respone = await fetch(phoneApi)
        if(!respone.ok ){
            const error =  Error('Error in Fetching PhoneUser Status')
            throw  error
        }
        const data = await respone.json()

        //data array to payload object
        payload.data  = data.map(d => {
            d.loginlogout = d.loginlogout.split('?')[1]
            return d
        })
        context.commit('getPhoneStatus', payload)

    },
   
}