import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, map, switchMap } from 'rxjs';
import { MissingPersonService } from '../services/missingPerson.service';
import { filterList, loadMissingPersons, loadMissingPersonsSuccess } from '../store/missingPerson/missingPerson.actions';

@Injectable()
export class MissingPersonEffect
{
    getMissingPersonList$ = createEffect(() => this.actions$.pipe(
        ofType(loadMissingPersons),
        switchMap(() => this.service.getMissingPerson()),
        map((response) => loadMissingPersonsSuccess({ response })),
        catchError(() => EMPTY)
    ));

    getFilteredList$ = createEffect(() => this.actions$.pipe(
        ofType(filterList),
        switchMap(({ filter }) => this.service.getFiltered(filter)),
        map((response) => loadMissingPersonsSuccess({ response })),
        catchError(() => EMPTY)
    ))

    constructor(
        private readonly actions$: Actions,
        private readonly service: MissingPersonService
    )
    { }
}