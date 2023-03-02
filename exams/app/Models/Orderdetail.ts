import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Order from './Order'
import Product from './Product'

export default class Orderdetail extends BaseModel {
  @column({ isPrimary: true })
  public id: number
    
  @column({ serializeAs: "order_id" })
  public orderId: number

  @column({ serializeAs: "quantity" })
  public quantity: number
    
  @column({ serializeAs: "price" })
  public price: number

  @column({ serializeAs: "line_number" })
  public lineNumber: number

  @column({ serializeAs: "product_id" })
  public productId: number

  @belongsTo(() => Product, {
    foreignKey: 'productId'
  })
  public product: BelongsTo<typeof Product>
  
  @belongsTo(() => Order, {
    foreignKey: 'orderId'
  })
  public order: BelongsTo<typeof Order>

}
