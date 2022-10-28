import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CheckRegisReq {

  private regisSchema = schema.create({
    username: schema.string([
      rules.trim(),
      rules.minLength(2)
    ]),
    email: schema.string([
      rules.email(),
      rules.trim(),
      rules.minLength(5)
    ]),
    publicAddress: schema.string([
      rules.trim(),
      rules.minLength(5)
    ])
  })

  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    try {
      await request.validate({ schema: this.regisSchema })
      next()
    }
    catch (err) {
      response.status(400).send(err.messages)
    }
  }
}
