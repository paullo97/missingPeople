import { CommonModule, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { DetailsComponent } from './details.component';

@NgModule({
    declarations: [
        DetailsComponent
    ],
    imports: [
        MatIconModule,
        FormsModule,
        MatButtonModule,
        NgIf,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        CommonModule,
        ShareButtonsModule,
        ShareIconsModule
    ],
    exports: [
        DetailsComponent
    ]
})
export class DetailsModule { }