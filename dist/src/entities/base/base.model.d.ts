declare class MongoModel {
    collectionName?: string;
    create(data: any): void;
    update(id: string, data: any): void;
}
export declare abstract class BaseModel extends MongoModel {
    id: string;
}
export {};
//# sourceMappingURL=base.model.d.ts.map