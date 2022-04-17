

import { GET_TEACHER, GET_TEACHER_LOADING, GET_TEACHER_ERROR } from "./action";

const initState = {
    loading: false,
    error: false,
    teachers: []
};


export const teacherReducer = (store=initState, { type,payload}) => {
    
    switch (type) {

        case GET_TEACHER_LOADING:
            return { ...store, loading: true };
        case GET_TEACHER:
            return { ...store, loading: false, error: false, teachers: [...payload] };
        case GET_TEACHER_ERROR:
            return { ...store, error: true, teachers: [], loading: false };
        default:
            return store;
    }
}