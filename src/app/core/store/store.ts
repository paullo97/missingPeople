import { Action, ActionReducerMap } from '@ngrx/store';
import { missingPersonReducer } from './missingPerson/missingPerson.reducer';
import { missingPerson } from './missingPerson/missingPerson.store';

export interface AppState
{
    missing: missingPerson
}

/**
 * App root store containing all reducers.
 */
export const reducers: ActionReducerMap<object, Action> = {
    missing: missingPersonReducer
};