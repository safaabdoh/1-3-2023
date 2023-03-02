import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Productline from './Productline'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column({ serializeAs: "dode" })
  public dode: string
    
  @column({ serializeAs: "name" })
  public name: string

  @column({ serializeAs: "line_id" })
  public lineId: number
      
  @column({ serializeAs: "scale" })
  public scale: string
        
  @column({ serializeAs: "vendor" })
  public vendor: string
         
  @column({ serializeAs: "description" })
  public description: string
  
  @column({ serializeAs: "quantity_in_stock" })
  public quantityInStock: number
    
  @column({ serializeAs: "price" })
  public price: number
    
  @column({ serializeAs: "msrp" })
  public msrp: number
      
  @belongsTo(() => Productline, {
    foreignKey: 'lineId'
  })
  public line: BelongsTo<typeof Productline>

}
