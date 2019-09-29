import { Species } from './../models/species';
export interface Especierespuesta {
    count: number;
    next: string;
    previous: string;
    results: Species[];
}
