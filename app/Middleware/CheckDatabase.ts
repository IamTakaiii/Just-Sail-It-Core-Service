import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class CheckDatabase {
  public async handle({request, response, logger}: HttpContextContract, next: () => Promise<void>) {
    const { publicAddress, signature } = request.body()
    try {
      console.log(publicAddress)
      const user = await User.findByOrFail('id', publicAddress)
      request.updateBody({ publicAddress, signature, user })
      if (!signature) response.send({ publicAddress,  nonce: user.nonce, user})
      else response.send({user})
    }
    catch (err) {
      if (err.toString().includes('E_ROW_NOT_FOUND')) {
        logger.warn(err)
        response.send({user : []})
        // response.status(400).send({ error: err.toString(), url: `http://127.0.0.1:3333/register` })
        }
      else {
        logger.error(err)
        await next()
      }
    }
  }
}
