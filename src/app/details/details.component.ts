import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { notNullPipe } from 'src/environments/constants';
import { Content } from '../core/models/missingPerson.model';
import { checkDetails, clearDetails } from '../core/store/missingPerson/missingPerson.actions';
import { getDetailsPerson, getMissingPersonLoading } from '../core/store/missingPerson/missingPerson.selectors';
import { missingPerson } from '../core/store/missingPerson/missingPerson.store';

@Component({
    selector: 'details-root',
    templateUrl: './details.component.html',
    styleUrls: [ './details.component.scss' ]
})
export class DetailsComponent implements OnInit, OnDestroy
{
    public details!: Content;
    public idPerson: string = '';
    public sub: Subscription = new Subscription();
    public details$: Observable<Content> = this.store.select(getDetailsPerson);
    public loading$: Observable<boolean> = this.store.select(getMissingPersonLoading);

    constructor(
        private readonly _ActivatedRoute: ActivatedRoute,
        private readonly store: Store<missingPerson>,
        private readonly route: Router
    )
    { }

    public ngOnDestroy(): void
    {
        this.sub.unsubscribe();
        this.store.dispatch(clearDetails());
    }

    public ngOnInit(): void
    {
        this.sub.add(
            this._ActivatedRoute.paramMap.pipe(notNullPipe).subscribe((data: ParamMap) =>
            {
                this.idPerson = data.get('id')!
                this.store.dispatch(checkDetails({ id: this.idPerson }));
            })
        );

        this.sub.add(
            this.details$.pipe(notNullPipe).subscribe((data: Content) =>
            {
                this.details = data;
            })
        );
    }

    public backToList(): void
    {
        window.history.back();
    }

    public generateLinkShare(): string
    {
        const linkPhoto: string = this.details.urlFoto || 'Uninformed';
        return `If you want to see a photo here is the link - ${linkPhoto}`;
    }

    public generateDescriptionShare(): string
    {
        const { sexo, idade } = this.details;
        const { ocorrenciaEntrevDesapDTO } = this.details.ultimaOcorrencia;
        const ultimaOcorrencia = this.details.ultimaOcorrencia || {};
        const { vestimentasDesaparecido, informacao } = ocorrenciaEntrevDesapDTO || {};

        const clothing = vestimentasDesaparecido || 'Uninformed';
        const information = informacao || 'Uninformed';
        const date = ultimaOcorrencia.dtDesaparecimento
            ? new Date(ultimaOcorrencia.dtDesaparecimento).toLocaleDateString()
            : 'Uninformed';
        const linkPoster = (ultimaOcorrencia.listaCartaz && ultimaOcorrencia.listaCartaz[ 0 ] && ultimaOcorrencia.listaCartaz[ 0 ].urlCartaz) || 'Uninformed';

        return decodeURI(`Did you see that person? Please, contact me!\nClothing: ${clothing}\nInformation: ${information}\nDate: ${date}\nGender: ${sexo}\nAge: ${idade} years\nLink Poster: ${linkPoster}\n`);
    }
}