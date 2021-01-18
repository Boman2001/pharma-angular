import { BaseEntity } from "../models/base-entity.model";

export type TableAction = { id: string, name: string, classes: string[], icon: string, action: (entity: BaseEntity) => void };
