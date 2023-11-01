import { CommonModule, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { ContainerComponent } from './container/container.component';
import { FilterComponent } from './filter/filter.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    declarations: [
        ToolbarComponent,
        FilterComponent,
        ContainerComponent
    ],
    imports: [
        MatIconModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        NgIf,
        MatRadioModule,
        MatCardModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        CommonModule,
        MatPaginatorModule
    ],
    exports: [
        ToolbarComponent,
        FilterComponent,
        ContainerComponent
    ]
})
export class ComponentsModule { }