import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class CheckDatabase {
  public async handle({request, response, logger}: HttpContextContract, next: () => Promise<void>) {
    const { publicAddress } = request.body()
    try {
      const user = await User.findByOrFail('id', publicAddress)
      request.updateBody(user)
    }
    catch (err) {
      if (err.toString().includes('E_ROW_NOT_FOUND')) {
        logger.warn(err)
        response.send({ err: err.toString(), url: `http://127.0.0.1:3333/register` })
      }
      else {
        logger.error(err)
      }
    }
    finally {
      await next()
    }
  }
}
