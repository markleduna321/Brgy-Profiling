

import { create_profiling_service, get_profiling_by_id_service, get_profiling_service } from '@/app/services/profiling-service';
import { profilingSlice } from './profiling-slice';

export function create_profiling_thunk(data) {
    return async function (dispatch) {
        try {
            const result = await create_profiling_service(data);
            // Optionally dispatch a success action or return result
            return result;
        } catch (error) {
            console.error('Error creating account:', error);
            // Optionally dispatch an error action
        }
    };
}

export function get_profiling_thunk() {
    return async function (dispatch) {
        try {
            const result = await get_profiling_service();
            console.log('Fetched profiling:', result);
            dispatch(profilingSlice.actions.setProfilings(result));
        } catch (error) {
            console.error('Error fetching accounts:', error);
            // Optionally dispatch an error action
        }
    };
}

export function get_profiling_by_id_thunk(profiling_id) {
    return async function (dispatch) {
        try {
            const result = await get_profiling_by_id_service(profiling_id);
            console.log('Fetched id:', result);
            dispatch(profilingSlice.actions.setProfiling(result)); // Assuming you have setAccount for a single account
        } catch (error) {
            console.error('Error fetching account by ID:', error);
            // Optionally dispatch an error action
        }
    };
}
