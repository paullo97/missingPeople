import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Content } from 'src/app/core/models/missingPerson.model';
import { changePage } from 'src/app/core/store/missingPerson/missingPerson.actions';
import { getMissingPersonLoading, getPageActual, getTotalElements } from 'src/app/core/store/missingPerson/missingPerson.selectors';
import { missingPerson } from 'src/app/core/store/missingPerson/missingPerson.store';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent
{
    @Input()
    public listMissingPerson: Array<Content> = [];

    @Output()
    public checkDetails: EventEmitter<number> = new EventEmitter();

    public loading$: Observable<boolean> = this.store.select(getMissingPersonLoading);
    public pageIndex$: Observable<number> = this.store.select(getPageActual);
    public pageLength$: Observable<number> = this.store.select(getTotalElements);

    constructor(private readonly store: Store<missingPerson>)
    { }

    public details(item: Content): void
    {
        this.checkDetails.emit(item.id);
    }

    public handlePageEvent(args: PageEvent): void
    {
        this.store.dispatch(changePage({
            page: args.pageIndex
        }));
    }
}
