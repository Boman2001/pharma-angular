import { BaseEntity } from "../models/base-entity.model";

export type SortColumn = keyof BaseEntity | string;
