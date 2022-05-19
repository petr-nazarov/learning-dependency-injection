"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
class MongoModel {
    constructor() {
        this.collectionName = 'base';
    }
    create(data) {
        console.log(`Inserting into collection ${this.collectionName}`, JSON.stringify(data));
    }
    update(id, data) {
        console.log('BaseModel.update()');
    }
}
class BaseModel extends MongoModel {
}
exports.BaseModel = BaseModel;
//# sourceMappingURL=base.model.js.map