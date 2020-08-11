import {
    GET_ERRORS,
    SET_SLEEPS,
    SET_FOODS, 
    SET_DIAPERS, 
    ADD_SLEEPS,
    ADD_FOODS, 
    ADD_DIAPERS, 
    REMOVE_LOG
} from './types';
import axios from 'axios';

export const setSleeps = nursingLogs => {
    return {
        type: SET_SLEEPS,
        payload: nursingLogs
    };
};

export const setFoods = nursingLogs => {
    return {
        type: SET_FOODS,
        payload: nursingLogs
    };
};

export const setDiapers = nursingLogs => {
    return {
        type: SET_DIAPERS,
        payload: nursingLogs
    };
};

export const addSleep = nursingLog => dispatch => {
    axios
        .post('/api/sleep/', nursingLog)
        .then(res => {
            dispatch({
                type: ADD_SLEEPS,
                payload: res.data
            });
        })
        .catch(e => {
            dispatch({
                type: GET_ERRORS,
                payload: e.response.data
            });
        });
};

export const addFood = nursingLog => dispatch => {
    axios
        .post('/api/food/', nursingLog)
        .then(res => {
            dispatch({
                type: ADD_FOODS,
                payload: res.data
            });
        })
        .catch(e => {
            dispatch({
                type: GET_ERRORS,
                payload: e.response.data
            });
        });
};

export const addDiaper = nursingLog => dispatch => {
    axios
        .post('/api/diaper/', nursingLog)
        .then(res => {
            dispatch({
                type: ADD_DIAPERS,
                payload: res.data
            });
        })
        .catch(e => {
            dispatch({
                type: GET_ERRORS,
                payload: e.response.data
            });
        });
};

export const deleteNursingLog = nursingLog => dispatch => {
    const { type, _id } = nursingLog;
    let request;
    if (type === 'Sleep') {
        request = axios.delete(`/api/sleep/${_id}`);
    } else if (type === 'Food') {
        request = axios.delete(`/api/food/${_id}`);
    } else request = axios.delete(`api/diaper/${_id}`);
    request.then(res => {
        dispatch({
            type: REMOVE_LOG,
            payload: nursingLog
        });
    });
};

export const getErrors = errors => {
    return {
        type: GET_ERRORS,
        payload: errors
    };
};