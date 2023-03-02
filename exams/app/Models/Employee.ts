import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Office from './Office'

export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column({ serializeAs: "first_name" })
  public firstName: string

  @column({ serializeAs: "last_name" })
  public lastName: string
  
  @column({ serializeAs: "extension" })
  public extension: string

  @column({ serializeAs: "email" })
  public email: string
  
  @column({ serializeAs: "office_id" })
  public officeId: string
    
  @column({ serializeAs: "emplpyees_id" })
  public emplpyeesId: number
      
  @column({ serializeAs: "job_title" })
  public jobTitle: string
  
  @belongsTo(() => Employee, {
    foreignKey: 'emplpyeesId'
  })
  public emplpyees: BelongsTo<typeof Employee>
    
  @belongsTo(() => Office, {
    foreignKey: 'officeId'
  })
  public office: BelongsTo<typeof Office>

}
