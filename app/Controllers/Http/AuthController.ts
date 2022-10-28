import { bufferToHex } from 'ethereumjs-util';
import { recoverPersonalSignature } from '@metamask/eth-sig-util';

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Token from 'App/ReuseClass/Token';

export default class AuthController {
  public async login({ request, response }:HttpContextContract) {
    try {
      const { signature, publicAddress, user } = request.body()
      const msg = `I am signing my one-time nonce: ${user.nonce}`
      const msgBufferHex = bufferToHex(Buffer.from(msg, 'utf-8'))
      const address = recoverPersonalSignature({
        data: msgBufferHex,
        signature: signature
      })
      if (address.toLowerCase() === publicAddress.toLowerCase()) {
        user.nonce = Math.floor(Math.random() * 100000).toString()
        await user.save()
      }
      const token = await Token.createToken({
        publicAddress: user.id,
        username: user.username,
        email: user.email
      })
      response.send({ token })
    }
    catch (err) {
      console.log(err)
      response.status(500).send(err.message)
    }
  }
}
