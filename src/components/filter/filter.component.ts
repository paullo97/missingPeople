import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    constructor(
        private readonly store: Store<missingPerson>,
        private _snackBar: MatSnackBar
    )
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
        if((!this.name || this.name.length === 0) && (!this.initialAge || this.initialAge.length === 0) && (!this.finalAge || this.finalAge.length === 0) && (!this.gender || this.gender.length === 0))
        {

            this._snackBar.open('You not search with parameters empty', 'OK', { duration: 1500, horizontalPosition: 'center', verticalPosition: 'top' });
            return;
        }

        if(this.initialAge > this.finalAge)
        {
            if(this.finalAge.length !== 0)
            {
                this._snackBar.open('You not set up initial age smaller to final age', 'OK', { duration: 1500, horizontalPosition: 'center', verticalPosition: 'top' });
                return;
            }
        }

        this.store.dispatch(filterList({
            filter: {
                ...((!!this.name && this.name.length !== 0) && { name: this.name }),
                ...((!!this.initialAge && this.initialAge.length !== 0) && { minimumAge: this.initialAge }),
                ...((!!this.finalAge && this.finalAge.length !== 0) && { maximumAge: this.finalAge }),
                ...((!!this.gender && this.gender.length !== 0) && { gender: this.gender })
            }
        }));
    }
}
