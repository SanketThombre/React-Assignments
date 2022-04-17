
import { LOGIN_LOADING, LOGIN_FAILED, LOGIN_SUCCESS } from "./action";


const initState = {
    loading: false,
    isauthenticated: false,
    token: '',
    error: false
}


export const loginreducer = (store = initState, { type, payload })=>{
    
    switch (type) {
        case LOGIN_LOADING:
            return { ...store, loading: true }
        case LOGIN_SUCCESS:
            return { ...store, loading: false, isauthenticated: true, error: false, token: payload };
        case LOGIN_FAILED:
            return { ...store, loading: false, isauthenticated: false,error:true}
        default:
            return store;
    
    }
}