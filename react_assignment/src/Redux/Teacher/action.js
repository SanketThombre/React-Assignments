import axios from 'axios'

export const GET_TEACHER = "GET_TEACHER";

export const GET_TEACHER_LOADING = "GET_TEACHER_LOADING";

export const GET_TEACHER_ERROR = "GET_TEACHER_ERROR";

export const getTeacher = (payload) => ({ type: GET_TEACHER, payload });

export const getTeacherloading = () => ({ type: GET_TEACHER_LOADING })

export const getTeachererror = () => ({ type: GET_TEACHER_ERROR });

export const getTeacherData = () => (dispatch) => {
    dispatch(getTeacherloading());
    axios.get("http://localhost:8080/teachers")
        .then((res) => dispatch(getTeacher(res.data)))
        .catch((er) => dispatch(getTeachererror()));

}
