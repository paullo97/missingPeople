import { createFeatureSelector, createSelector } from '@ngrx/store';
import { missingPerson } from './missingPerson.store';

const getMissingPersonState = createFeatureSelector<missingPerson>('missing');

export const getMissingPersonLoading = createSelector(
    getMissingPersonState,
    (store: missingPerson) => store.loading
);

export const getMissingPersonList = createSelector(
    getMissingPersonState,
    (store: missingPerson) => store.response
);
