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

export const getDetailsPerson = createSelector(
    getMissingPersonState,
    (store: missingPerson) => store.details
);

export const getTotalElements = createSelector(
    getMissingPersonState,
    (store: missingPerson) => store.response.totalElements
);

export const getPageActual = createSelector(
    getMissingPersonState,
    (store: missingPerson) => store.pageActual
);