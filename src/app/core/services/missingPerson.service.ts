import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API, BASE_API_1 } from 'src/environments/constants';
import { IFilter } from '../models/filter.model';
import { Content, Response } from '../models/missingPerson.model';

@Injectable()
export class MissingPersonService
{
    constructor(
        private readonly http: HttpClient
    )
    { }

    public getMissingPerson(): Observable<Response>
    {
        return this.http.get<Response>(`${BASE_API_1}`);
    }

    public getFiltered(filters: IFilter): Observable<Response>
    {
        let url = BASE_API_1;

        if (filters.name)
        {
            url += `&nome=${filters.name}`;
        }
        if (filters.minimumAge)
        {
            url += `&faixaIdadeInicial=${filters.minimumAge}`;
        }
        if (filters.maximumAge)
        {
            url += `&faixaIdadeFinal=${filters.maximumAge}`;
        }
        if (filters.gender)
        {
            url += `&sexo=${filters.gender}`;
        }

        return this.http.get<Response>(url);
    }

    public getDetails(idPerson: string): Observable<Content>
    {
        return this.http.get<Content>(`${BASE_API}${idPerson}`)
    }
}