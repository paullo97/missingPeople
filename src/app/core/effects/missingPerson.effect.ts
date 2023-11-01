import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, catchError, map, switchMap, withLatestFrom } from 'rxjs';
import { Content, Response } from '../models/missingPerson.model';
import { MissingPersonService } from '../services/missingPerson.service';
import { changePage, checkDetails, checkDetailsSuccess, filterList, loadMissingPersons, loadMissingPersonsSuccess } from '../store/missingPerson/missingPerson.actions';
import { getPageActual } from '../store/missingPerson/missingPerson.selectors';
import { missingPerson } from '../store/missingPerson/missingPerson.store';

@Injectable()
export class MissingPersonEffect
{
    getMissingPersonList$ = createEffect(() => this.actions$.pipe(
        ofType(loadMissingPersons),
        withLatestFrom(this.store.select(getPageActual)),
        switchMap(([_, page]) => this.service.getMissingPerson(page)),
        map((response) => loadMissingPersonsSuccess({ response })),
        catchError(() => EMPTY)
    ));

    getFilteredList$ = createEffect(() => this.actions$.pipe(
        ofType(filterList),
        switchMap(({ filter }) => this.service.getFiltered(filter)),
        map((response: Response) => loadMissingPersonsSuccess({ response })),
        catchError(() => EMPTY)
    ));

    getDetailsPerson$ = createEffect(() => this.actions$.pipe(
        ofType(checkDetails),
        switchMap(({ id }) => this.service.getDetails(id)),
        map((response: Content) => checkDetailsSuccess({ response }))
    ));

    changePage$ = createEffect(() => this.actions$.pipe(
        ofType(changePage),
        switchMap(({ page }) => this.service.getMissingPerson(page)),
        map((response) => loadMissingPersonsSuccess({ response }))
    ));

    constructor(
        private readonly actions$: Actions,
        private readonly service: MissingPersonService,
        private readonly store: Store<missingPerson>
    )
    { }
}