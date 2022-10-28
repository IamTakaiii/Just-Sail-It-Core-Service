import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class UserException extends Exception {

  constructor(message:string, status: number, code?: string) {
    super(message)
    this.status = status ? status : 400
    this.message = message
    this.code = code
  }

  public async handle(error: this, ctx: HttpContextContract) {
    let userMessage = ''
    ctx.logger.error(error.message)
    // if (error.message.includes(''))
    if (error.message.includes('duplicate')) userMessage = 'User already exist'
    else userMessage = error.message
    ctx.response.status(error.status).send({ error : userMessage  })
  }
}
