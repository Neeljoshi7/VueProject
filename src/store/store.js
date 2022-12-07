import {createStore} from 'vuex'

export default createStore ({
    state:{
        userName:"nsjoshi7",
        password:"neeljoshi"
    },
    mutations:{
        changeUserName(state, payload){
            state.userName =  payload
        }
    }
})