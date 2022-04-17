
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const loginloading = () => ({ type: "LOGIN_LOADING"});
export const loginsuccess = (payload) => ({ type: "LOGIN_SUCCESS", payload });

export const loginfailed =()=>({ type: "LOGIN_FAILED"});