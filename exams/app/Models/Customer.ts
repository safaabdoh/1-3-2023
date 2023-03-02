import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Employee from './Employee'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "name" })
  public name: string

  @column({ serializeAs: "first_name" })
  public firstName: string

  @column({ serializeAs: "last_name" })
  public lastName: string

  @column({ serializeAs: "phone_number" })
  public phoneNumber: string

  @column({ serializeAs: "address_line1" })
  public addressLine1: string

  @column({ serializeAs: "address_line2" })
  public addressLine2: string

  @column({ serializeAs: "city" })
  public city: string

  @column({ serializeAs: "state" })
  public state: string

  @column({ serializeAs: "postal_code" })
  public postalCode: string

  @column({ serializeAs: "country" })
  public country: string
  
  @column({ serializeAs: "employee_id" })
  public employeeId: number
  
  @column({ serializeAs: "credit_limit" })
  public creditLimit: number
  
  @belongsTo(() => Employee, {
    foreignKey: 'employeeId'
  })
  public employee: BelongsTo<typeof Employee>

}
