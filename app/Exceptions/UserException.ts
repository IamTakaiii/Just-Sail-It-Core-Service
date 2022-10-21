import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@adonisjs/core` allows defining
| a status code and error code for every exception.
|
| @example
| new UserException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class UserException extends Exception {

  constructor(message:string, status: number, code?: string) {
    super(message)
    this.status = status ? status : 400
    this.message = message
    this.code = code
  }

  public async handle(error: this, ctx: HttpContextContract) {
    let userMessage = ''
    if (error.message.includes('duplicate')) userMessage = 'User already exist'
    // if (error.message.includes(''))
    ctx.response.status(error.status).send({ err : userMessage  })
  }
}
