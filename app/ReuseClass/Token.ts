import jwt from 'jsonwebtoken'

import { RegisterRequest } from 'App/ReuseInterfaces/AuthInterface'

class Token {
  public async createToken (userData: RegisterRequest) {
    const token = jwt.sign(userData, `process.env.TOKENSECRET`, { expiresIn: "10h" })
    return token
  }
  public async verifyToken (token: string) {
    // todo
  }
}

export default new Token()
