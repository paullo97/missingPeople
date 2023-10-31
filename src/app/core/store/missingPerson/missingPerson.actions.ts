import { createAction, props } from '@ngrx/store';
import { IFilter } from '../../models/filter.model';
import { Response } from '../../models/missingPerson.model';
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
