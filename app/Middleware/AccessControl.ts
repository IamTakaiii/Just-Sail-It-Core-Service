import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Token from 'App/ReuseClass/Token'

export default class AccessControl {
  public async handle({request, response}: HttpContextContract, next: () => Promise<void>) {
    try {
      const token = request.headers().authorization?.split(" ")[1]
      await Token.verifyToken(token ? token : '')
      await next()
    }
    catch (err) {
      response.status(401).send({ err : 'Unauthorize' })
    }
  }
}
