import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsRootModule, EffectsModule as NGEffectsModule } from '@ngrx/effects';
import { MissingPersonEffect } from './missingPerson.effect';

const effects: ModuleWithProviders<EffectsRootModule> = NGEffectsModule.forRoot([
    MissingPersonEffect
]);

@NgModule({
    imports: [ effects ]
})
export class EffectsModule
{ }