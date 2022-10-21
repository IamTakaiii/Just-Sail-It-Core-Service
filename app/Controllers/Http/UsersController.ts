import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import UserException from 'App/Exceptions/UserException'

export default class UsersController {
  public async create ({request, response}: HttpContextContract) {
    const { publicAddress, username, email } = request.body()
    try {
      await User.create({
        id : publicAddress,
        username : username,
        email : email,
        nonce : Math.floor(Math.random()*1000000).toString()
      })
      response.status(200)
    }
    catch (err) {
      throw new UserException(err.message, err.status, 'USER_ERROR')
    }
  }

  public async get ({request}: HttpContextContract) {
    // TO DO
  }

  public async update ({request}: HttpContextContract) {
    // TO DO
  }

  public async delete ({request}: HttpContextContract) {
    // TO DO
  }
}
