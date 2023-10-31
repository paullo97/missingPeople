import { createAction, props } from '@ngrx/store';
import { IFilter } from '../../models/filter.model';
import { Content, Response } from '../../models/missingPerson.model';
import { storeTag } from './missingPerson.store';

export const loadMissingPersons = createAction(
    `${storeTag} Load Missing Person List`
);

export const loadMissingPersonsSuccess = createAction(
    `${storeTag} Load Missing Person List Success`,
    props<{
        response: Response;
    }>()
);

export const loadMissingPersonsError = createAction(
    `${storeTag} Load Missing Person List Error`
);

export const filterList = createAction(
    `${storeTag} Filter List`,
    props<{
        filter: IFilter;
    }>()
);

export const checkDetails = createAction(
    `${storeTag} Load Details`,
    props<{
        id: string;
    }>()
);

export const checkDetailsSuccess = createAction(
    `${storeTag} Load Details Success`,
    props<{
        response: Content;
    }>()
);

export const clearDetails = createAction(
    `${storeTag} Clear Details Store`
);