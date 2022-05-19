export class BaseModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;


  /// think of this as method of mongoose
  async create(data:any ) {
    console.log('BaseModel.create()');
  }

  async update(id: string, data:any ) {
    console.log('BaseModel.update()');
  }
}