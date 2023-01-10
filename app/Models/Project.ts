import { DateTime } from 'luxon'
import { v4 as uuid } from 'uuid'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public user_id: string

  @column()
  public name: string

  @column()
  public description: object

  @column()
  public catagories: number[]

  @column()
  public funding_goal: number

  @column()
  public start_date: Date

  @column()
  public end_date: Date

  @column()
  public status: string

  @column()
  public total: number

  @column()
  public backers: number

  @column()
  public trusth_score: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID (model:Project) {
    model.id = 'project-'+uuid()
  }
}
