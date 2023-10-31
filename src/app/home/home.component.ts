import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Response } from '../core/models/missingPerson.model';
import { loadMissingPersons } from '../core/store/missingPerson/missingPerson.actions';
import { getMissingPersonList } from '../core/store/missingPerson/missingPerson.selectors';
import { missingPerson } from '../core/store/missingPerson/missingPerson.store';

@Component({
    selector: 'home-root',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent
{
    public listMissingPerson$: Observable<Response> = this.store.select(getMissingPersonList);

    constructor(
        private readonly store: Store<missingPerson>,
        private readonly route: Router
    )
    { }

    public ngOnInit(): void
    {
        this.store.dispatch(loadMissingPersons());
    }

    public details(item: number)
    {
        this.route.navigateByUrl(`details/${item}`);
    }
}