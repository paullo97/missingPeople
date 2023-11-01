import { Content, Response } from '../../models/missingPerson.model';

export const storeTag: string = '[Missing Store]';

export interface missingPerson
{
    loading: boolean;
    response: Response;
    details: Content;
    pageActual: number;
}