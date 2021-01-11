import { BaseEntity } from "./base-entity.model";

export class Country extends BaseEntity {

    name: string;
    flag: string;
    area: number;
    population: number;
}