import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Content } from 'src/app/core/models/missingPerson.model';
import { getMissingPersonLoading } from 'src/app/core/store/missingPerson/missingPerson.selectors';
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

    constructor(private readonly store: Store<missingPerson>)
    { }

    public details(item: Content): void
    {
        this.checkDetails.emit(item.id);
    }
}
