import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent
{
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
    }

    public searchPerson(): void
    {
        console.log(
            this.name, this.initialAge, this.finalAge, this.gender
        );

        if(this.name === '' && this.initialAge === '' && this.finalAge === '' && this.gender === '')
        {
            console.log('FIX ME -> You not search with parameters empty')
        }

        if(this.initialAge > this.finalAge)
        {
            console.log("FIX ME -> You not set up initial age smaller to final age")
        }
    }
}
