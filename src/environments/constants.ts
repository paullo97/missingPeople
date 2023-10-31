import { ModuleWithProviders } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MonoTypeOperatorFunction, filter } from "rxjs";

export const storeTools: Array<ModuleWithProviders<any>> = [
    StoreDevtoolsModule.instrument({
        maxAge: 26,
        name: 'Missing Person'
    })
];

export const BASE_API: string = 'https://abitus-api.pjc.mt.gov.br/v1/pessoas/';
export const BASE_API_1: string = `${BASE_API}aberto/filtro?porPagina=12&status=DESAPARECIDO&pagina=0`;

export const notNullPipe: MonoTypeOperatorFunction<any> = filter((data: any) => !!data);