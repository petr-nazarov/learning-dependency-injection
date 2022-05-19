class MongoModel {
  collectionName?: string = 'base';

   /// think of this as method of mongoose
  create(data  ) {
    console.log(`Inserting into collection ${this.collectionName}`, JSON.stringify(data));
  }

  update(id: string, data:any ) {
    console.log('BaseModel.update()');
  }
}


export abstract class BaseModel extends MongoModel{
  id: string;
}
