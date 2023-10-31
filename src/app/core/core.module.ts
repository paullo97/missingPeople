import { NgModule } from '@angular/core';
import { EffectsModule } from './effects/effects.module';
import { ServicesModule } from './services/services.module';
import { StoreModule } from './store/store.module';

@NgModule({
    imports: [
        StoreModule,
        EffectsModule,
        ServicesModule
    ]
})
export class CoreModule
{ }