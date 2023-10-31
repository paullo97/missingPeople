import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Response } from './core/models/missingPerson.model';
import { loadMissingPersons } from './core/store/missingPerson/missingPerson.actions';
import { getMissingPersonList } from './core/store/missingPerson/missingPerson.selectors';
import { missingPerson } from './core/store/missingPerson/missingPerson.store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
    public listMissingPerson$: Observable<Response> = this.store.select(getMissingPersonList);

    constructor(private readonly store: Store<missingPerson>)
    { }

    public ngOnInit(): void
    {
        this.store.dispatch(loadMissingPersons());
    }

    public details(item: number)
    {
        console.log(item);
    }

}
