import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { checkDetails, checkDetailsSuccess, clearDetails, filterList, loadMissingPersons, loadMissingPersonsError, loadMissingPersonsSuccess } from './missingPerson.actions';
import { missingPerson } from './missingPerson.store';


export const initialState: Partial<missingPerson> = {
    loading: false
};

const reducer: ActionReducer<Partial<missingPerson>, Action> = createReducer(
    initialState,
    on(loadMissingPersons, (state) => ({
        ...state,
        loading: true
    })),
    on(loadMissingPersonsSuccess, (state, action) => ({
        ...state,
        loading: false,
        response: action.response
    })),
    on(loadMissingPersonsError, (state) => ({
        ...state,
        loading: false
    })),
    on(filterList, (state) => ({
        ...state,
        loading: true
    })),
    on(checkDetails, (state) => ({
        ...state,
        loading: true
    })),
    on(checkDetailsSuccess, (state, action) => ({
        ...state,
        loading: false,
        details: action.response
    })),
    on(clearDetails, (state) => ({
        ...state,
        details: undefined
    }))
);

export function missingPersonReducer(
    state: Partial<missingPerson> = initialState,
    action: Action
): Partial<missingPerson>
{
    return reducer(state, action);
}