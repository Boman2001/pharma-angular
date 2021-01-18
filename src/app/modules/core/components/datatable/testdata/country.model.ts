import { BaseEntity } from "../../../models/base-entity.model";

export class Country extends BaseEntity {

    name: string;
    flag: string;
    area: number;
    population: number;
}
