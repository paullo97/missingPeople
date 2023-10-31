import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filterList, loadMissingPersons } from 'src/app/core/store/missingPerson/missingPerson.actions';
import { missingPerson } from 'src/app/core/store/missingPerson/missingPerson.store';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent
{
    constructor(private readonly store: Store<missingPerson>)
    { }

    public name: string = '';
    public initialAge: string = '';
    public finalAge: string = '';
    public gender: string = '';

    public clear(): void
    {
        this.name = '';
        this.initialAge = '';
        this.finalAge = '';
        this.gender = '';

        this.store.dispatch(loadMissingPersons());
    }

    public searchPerson(): void
    {
        if(!this.name.length && !this.initialAge.length && !this.finalAge.length && !this.gender.length)
        {
            console.log('FIX ME -> You not search with parameters empty');
            return;
        }

        if(this.initialAge > this.finalAge)
        {
            if(this.finalAge.length !== 0)
            {
                console.log("FIX ME -> You not set up initial age smaller to final age");
                return;
            }
        }

        this.store.dispatch(filterList({
            filter: {
                ...(this.name.length !== 0 && { name: this.name }),
                ...(this.initialAge.length !== 0 && { minimumAge: this.initialAge }),
                ...(this.finalAge.length !== 0 && { maximumAge: this.finalAge }),
                ...(this.gender.length !== 0 && { gender: this.gender })
            }
        }));

    }
}
