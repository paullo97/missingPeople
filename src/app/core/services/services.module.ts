import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MissingPersonService } from './missingPerson.service';


@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        MissingPersonService
    ]
})
export class ServicesModule
{ }